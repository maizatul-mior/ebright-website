// Pure, I/O-free helpers for the lead endpoint. Ported verbatim from the
// retired app/api/lead/route.ts so behaviour (field aliasing, source allowlist,
// validation, column order) is preserved. Not routed by Pages (leading "_").
import { isValidWhatsapp } from "../../app/lib/phone";

const str = (v: unknown): string => (typeof v === "string" ? v.trim() : "");

export interface ParsedLead {
  parent: string;
  child: string;
  age: string;
  whatsapp: string;
  email: string;
  branch: string;
  source: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmId: string;
  utmContent: string;
  utmTerm: string;
  fbclid: string;
}

export function parseLead(body: Record<string, unknown>): ParsedLead {
  return {
    parent: str(body.parent_name ?? body["parent-name"]),
    child: str(body.child_name ?? body["child-name"]),
    age: str(body.child_age ?? body["child-age"]),
    whatsapp: str(body.whatsapp_no ?? body.whatsapp),
    email: str(body.email ?? body["parent-email"]),
    branch: str(body.preferred_branch ?? body.branch),
    source:
      str(body.source) === "marketing_trial_form"
        ? "marketing_trial_form"
        : "website_trial_form",
    utmSource: str(body.utm_source),
    utmMedium: str(body.utm_medium),
    utmCampaign: str(body.utm_campaign),
    utmId: str(body.utm_id),
    utmContent: str(body.utm_content),
    utmTerm: str(body.utm_term),
    fbclid: str(body.fbclid),
  };
}

/** Returns an error message string, or null if valid. */
export function validateLead(p: ParsedLead): string | null {
  if (!p.parent || !p.child || !p.whatsapp || !p.email || !p.branch) {
    return "Missing required fields.";
  }
  if (!isValidWhatsapp(p.whatsapp)) {
    return "Please enter a valid WhatsApp number (10–13 digits).";
  }
  return null;
}

// Column order MUST match toBindValues() below and the INSERT in lead.ts.
export const LEAD_COLUMNS = [
  "parent_name", "child_name", "child_age", "whatsapp_no", "email",
  "preferred_branch", "source", "utm_source", "utm_medium", "utm_campaign",
  "utm_id", "utm_content", "utm_term", "fbclid",
] as const;

/** Bind values aligned to LEAD_COLUMNS; empty optionals become null. */
export function toBindValues(p: ParsedLead): (string | null)[] {
  return [
    p.parent, p.child, p.age || null, p.whatsapp, p.email,
    p.branch, p.source, p.utmSource || null, p.utmMedium || null, p.utmCampaign || null,
    p.utmId || null, p.utmContent || null, p.utmTerm || null, p.fbclid || null,
  ];
}
