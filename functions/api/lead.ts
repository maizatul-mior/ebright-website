// Cloudflare Pages Function: POST /api/lead
// Replaces the retired Next.js Node route. Verifies Cloudflare Turnstile and
// inserts the lead into D1. Returns the same JSON contract the form JS expects.
import { parseLead, validateLead, LEAD_COLUMNS, toBindValues } from "./_lead-core";

interface Env {
  DB: D1Database;
  TURNSTILE_SECRET?: string;
}

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
  if (!secret) return true; // not configured yet -> don't block submissions
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
    const placeholders = LEAD_COLUMNS.map((_, i) => `?${i + 1}`).join(", ");
    const sql =
      `INSERT INTO new_website_form (${LEAD_COLUMNS.join(", ")}) ` +
      `VALUES (${placeholders}) RETURNING id`;
    const row = await env.DB.prepare(sql)
      .bind(...toBindValues(lead))
      .first<{ id: number }>();
    return json({ ok: true, id: row?.id });
  } catch (e) {
    console.error("[lead] insert error", e);
    return json({ ok: false, error: "Server error. Please try again." }, 500);
  }
};
