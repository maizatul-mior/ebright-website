// Cloudflare Pages Function: POST /api/lead
// Verifies Turnstile, then forwards the lead to the dashboard backend
// (dashboard.ebright.my/api/website-lead) which writes to public.new_website_form.
import { parseLead, validateLead } from "./_lead-core";

interface Env {
  TURNSTILE_SECRET?: string;
  WEBSITE_LEAD_API_KEY?: string;
}

const DASHBOARD_API = "https://dashboard.ebright.my/api/website-lead";

const json = (data: unknown, status = 200): Response =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" },
  });

async function verifyTurnstile(
  token: string,
  ip: string,
  secret: string | undefined
): Promise<boolean> {
  if (!secret) return true;
  if (!token) return false;
  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.append("remoteip", ip);
  try {
    const r = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body }
    );
    const data = (await r.json()) as { success?: boolean };
    return !!data.success;
  } catch {
    return false;
  }
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: Record<string, unknown> = {};
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: "Invalid request." }, 400);
  }

  const lead = parseLead(body);
  const token =
    typeof body["cf-turnstile-response"] === "string"
      ? (body["cf-turnstile-response"] as string)
      : typeof body.token === "string"
        ? (body.token as string)
        : "";

  const validationError = validateLead(lead);
  if (validationError) return json({ ok: false, error: validationError }, 400);

  const ip =
    request.headers.get("cf-connecting-ip") ||
    (request.headers.get("x-forwarded-for") || "").split(",")[0].trim();

  const human = await verifyTurnstile(token, ip, env.TURNSTILE_SECRET);
  if (!human) {
    return json({ ok: false, error: "Verification failed. Please try again." }, 400);
  }

  try {
    const resp = await fetch(DASHBOARD_API, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": env.WEBSITE_LEAD_API_KEY ?? "",
      },
      body: JSON.stringify({
        parent_name:      lead.parent,
        child_name:       lead.child,
        child_age:        lead.age || null,
        whatsapp_no:      lead.whatsapp,
        email:            lead.email,
        preferred_branch: lead.branch,
        source:           lead.source,
        utm_source:       lead.utmSource  || null,
        utm_medium:       lead.utmMedium  || null,
        utm_campaign:     lead.utmCampaign || null,
        utm_id:           lead.utmId      || null,
        utm_content:      lead.utmContent || null,
        utm_term:         lead.utmTerm    || null,
        fbclid:           lead.fbclid     || null,
      }),
    });

    const result = (await resp.json().catch(() => ({}))) as { ok?: boolean; error?: string; id?: number };
    if (!resp.ok || !result.ok) throw new Error(result.error || "Server error.");
    return json({ ok: true, id: result.id });
  } catch (e) {
    console.error("[lead] forward error", e);
    return json({ ok: false, error: "Server error. Please try again." }, 500);
  }
};
