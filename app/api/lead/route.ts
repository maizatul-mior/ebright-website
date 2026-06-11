import { NextRequest, NextResponse } from "next/server";
import { getPool, ensureTable } from "../../lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const str = (v: unknown): string => (typeof v === "string" ? v.trim() : "");

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET;
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

export async function POST(req: NextRequest) {
  let body: Record<string, unknown> = {};
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parent = str(body.parent_name ?? body["parent-name"]);
  const child = str(body.child_name ?? body["child-name"]);
  const ageRaw = str(body.child_age ?? body["child-age"]);
  const whatsapp = str(body.whatsapp_no ?? body.whatsapp);
  const email = str(body.email ?? body["parent-email"]);
  const branch = str(body.preferred_branch ?? body.branch);
  const token = str(body["cf-turnstile-response"] ?? body.token);

  if (!parent || !child || !whatsapp || !email || !branch) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  const ip =
    req.headers.get("cf-connecting-ip") ||
    (req.headers.get("x-forwarded-for") || "").split(",")[0].trim();

  const human = await verifyTurnstile(token, ip);
  if (!human) {
    return NextResponse.json(
      { ok: false, error: "Verification failed. Please try again." },
      { status: 400 }
    );
  }

  const age = parseInt(ageRaw, 10);
  try {
    await ensureTable();
    const result = await getPool().query(
      `INSERT INTO public.new_website_form
         (parent_name, child_name, child_age, whatsapp_no, email, preferred_branch)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id`,
      [parent, child, Number.isNaN(age) ? null : age, whatsapp, email, branch]
    );
    return NextResponse.json({ ok: true, id: result.rows[0].id });
  } catch (e) {
    console.error("[lead] insert error", e);
    return NextResponse.json({ ok: false, error: "Server error. Please try again." }, { status: 500 });
  }
}
