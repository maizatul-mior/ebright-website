# Cloudflare Pages Migration — Stage 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Get the ebright-website live on a `*.pages.dev` URL with the trial-class form writing new leads to Cloudflare D1.

**Architecture:** The ~30 marketing pages are exported as static HTML (`output: "export"`) and served by Cloudflare Pages. The single dynamic endpoint `/api/lead` is reimplemented as a Cloudflare **Pages Function** (`functions/api/lead.ts`) that verifies Cloudflare Turnstile and inserts into a **Cloudflare D1** database. The forms keep POSTing to the relative `/api/lead`, so no form-component changes. Deploys run from local via Wrangler.

**Tech Stack:** Next.js 16.2.6 (static export), Cloudflare Pages + Pages Functions (Workers runtime), Cloudflare D1 (SQLite), Wrangler CLI (via `npx`), Vitest (unit tests for the pure lead-parsing core).

**Branch:** `cloudflare-pages-migration` (already created; the spec is committed here).

**Working directory:** `C:/Users/user/ebright-website`

---

## File Structure

| File | Responsibility | Action |
|------|----------------|--------|
| `next.config.ts` | Enable static export, unoptimized images, drop runtime rewrite | Modify |
| `public/_redirects` | Serve `/thankyou` → `/thankyou.html` on Pages | Create |
| `schema.sql` | D1 table DDL for `new_website_form` | Create |
| `functions/api/_lead-core.ts` | Pure parse/validate/bind helpers (no I/O) | Create |
| `test/lead-core.test.ts` | Unit tests for `_lead-core` | Create |
| `functions/api/lead.ts` | Pages Function: Turnstile + D1 insert | Create |
| `app/api/lead/route.ts` | Old Node route handler | Delete |
| `app/lib/db.ts` | Old `pg` pool | Delete |
| `wrangler.jsonc` | Pages + D1 binding config | Create |
| `package.json` | Remove `pg`/`@types/pg`, add dev deps + test script | Modify |
| `vitest.config.ts` | Minimal Vitest config | Create |

`app/lib/phone.ts` is **reused unchanged** (pure validation, imported by `_lead-core.ts`).

---

## Task 1: Enable static export

**Files:**
- Modify: `next.config.ts`
- Create: `public/_redirects`

- [ ] **Step 1: Replace `next.config.ts` with the static-export config**

The current file uses a runtime `rewrites()` (incompatible with `output: "export"`). Replace its entire contents with:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // next/image is used in 9 files; the default optimizer needs a server,
  // which static export does not have.
  images: { unoptimized: true },
  // Emit /route/index.html so clean URLs resolve as static files on Pages.
  trailingSlash: true,
};

export default nextConfig;
```

- [ ] **Step 2: Create `public/_redirects` for the clean /thankyou URL**

`public/thankyou.html` already exists; the old rewrite mapped `/thankyou` → `/thankyou.html`. Reproduce that on Pages:

```
/thankyou  /thankyou.html  200
```

- [ ] **Step 3: Build and verify static output is produced**

Run:
```bash
npm run build
```
Expected: build completes; an `out/` directory is created containing `index.html`, per-route folders (e.g. `out/programmes/index.html`, `out/trial-class/index.html`), and `out/thankyou.html`. No error about `rewrites`, `next/image`, or `output: export`.

- [ ] **Step 4: Confirm `out/` exists with key pages**

Run:
```bash
ls out/index.html out/trial-class/index.html out/thankyou.html out/_redirects
```
Expected: all four paths listed (no "No such file"). (`_redirects` is copied from `public/` into `out/`.)

- [ ] **Step 5: Stop tracking the committed `.env` (no rotation yet)**

`.env*` is already in `.gitignore`; the file was force-added. Untrack it so it stops appearing in future commits. This is safe — the VPS receives its `.env` via `--env-file` on the server, not from git, and the working-tree file is left in place. **Do not** rotate the credential or scrub history here (Stage 2).

Run:
```bash
git rm --cached .env
```
Expected: `rm '.env'` (staged for removal from the index; the file remains on disk).

- [ ] **Step 6: Commit**

The `.env` removal is already staged by `git rm --cached`; only add the new/modified files (do **not** `git add .env`, which would re-track it).

```bash
git add next.config.ts public/_redirects
git commit -m "build: configure Next.js static export for Cloudflare Pages; untrack .env"
```

---

## Task 2: Create the D1 schema

**Files:**
- Create: `schema.sql`

- [ ] **Step 1: Write `schema.sql` (SQLite/D1 translation of the Postgres DDL)**

```sql
-- Cloudflare D1 (SQLite) schema for website lead capture.
-- Translated from public.new_website_form (Postgres) in the retired app/lib/db.ts.
CREATE TABLE IF NOT EXISTS new_website_form (
  id               INTEGER PRIMARY KEY AUTOINCREMENT,
  parent_name      TEXT NOT NULL,
  child_name       TEXT NOT NULL,
  child_age        TEXT,
  whatsapp_no      TEXT NOT NULL,
  email            TEXT NOT NULL,
  preferred_branch TEXT NOT NULL,
  source           TEXT DEFAULT 'website_trial_form',
  utm_source       TEXT,
  utm_medium       TEXT,
  utm_campaign     TEXT,
  utm_id           TEXT,
  utm_content      TEXT,
  utm_term         TEXT,
  fbclid           TEXT,
  created_at       TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

- [ ] **Step 2: Sanity-check the SQL parses (using local D1)**

Run:
```bash
npx wrangler d1 execute __schema_check --file=schema.sql --local --yes
```
Expected: prints an "executed" summary with no SQL syntax error. (This creates a throwaway local-only DB named `__schema_check`; it is not used later. If Wrangler prompts to create it, accept.)

- [ ] **Step 3: Commit**

```bash
git add schema.sql
git commit -m "feat: add D1 schema for website lead capture"
```

---

## Task 3: Pure lead-parsing core (TDD)

**Files:**
- Create: `functions/api/_lead-core.ts`
- Create: `test/lead-core.test.ts`
- Create: `vitest.config.ts`
- Modify: `package.json` (add Vitest dev dep + `test` script)

> Files under `functions/` whose name starts with `_` are **not** routed by Pages, so `_lead-core.ts` is import-only. The pure logic (field aliasing, `source` allowlist, required-field + WhatsApp validation, bind-value ordering) is the porting risk worth a unit test; Turnstile + D1 are covered by the integration smoke test in Task 7.

- [ ] **Step 1: Add Vitest and a test script to `package.json`**

In `package.json`, add to `"scripts"`:
```json
    "test": "vitest run"
```
And add to `"devDependencies"`:
```json
    "vitest": "^3.2.4",
    "@cloudflare/workers-types": "^4.20250620.0"
```
Then install:
```bash
npm install
```
Expected: installs without error.

- [ ] **Step 2: Create `vitest.config.ts`**

```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["test/**/*.test.ts"],
    environment: "node",
  },
});
```

- [ ] **Step 3: Write the failing test `test/lead-core.test.ts`**

```ts
import { describe, it, expect } from "vitest";
import { parseLead, validateLead, LEAD_COLUMNS, toBindValues } from "../functions/api/_lead-core";

describe("parseLead", () => {
  it("reads canonical field names and trims them", () => {
    const p = parseLead({
      parent_name: "  Ann  ",
      child_name: "Bo",
      child_age: "7",
      whatsapp_no: "0123456789",
      email: "a@b.com",
      preferred_branch: "KL",
    });
    expect(p.parent).toBe("Ann");
    expect(p.child).toBe("Bo");
    expect(p.whatsapp).toBe("0123456789");
  });

  it("accepts hyphenated aliases from the legacy form", () => {
    const p = parseLead({
      "parent-name": "Ann",
      "child-name": "Bo",
      "child-age": "7",
      whatsapp: "0123456789",
      "parent-email": "a@b.com",
      branch: "KL",
    });
    expect(p.parent).toBe("Ann");
    expect(p.email).toBe("a@b.com");
    expect(p.branch).toBe("KL");
  });

  it("allowlists source: marketing_trial_form passes, anything else defaults", () => {
    expect(parseLead({ source: "marketing_trial_form" }).source).toBe("marketing_trial_form");
    expect(parseLead({ source: "evil_value" }).source).toBe("website_trial_form");
    expect(parseLead({}).source).toBe("website_trial_form");
  });
});

describe("validateLead", () => {
  const ok = {
    parent_name: "Ann", child_name: "Bo", whatsapp_no: "0123456789",
    email: "a@b.com", preferred_branch: "KL",
  };
  it("returns null when all required fields valid", () => {
    expect(validateLead(parseLead(ok))).toBeNull();
  });
  it("flags missing required fields", () => {
    expect(validateLead(parseLead({ ...ok, parent_name: "" }))).toMatch(/Missing required/i);
  });
  it("flags an invalid WhatsApp number (too short)", () => {
    expect(validateLead(parseLead({ ...ok, whatsapp_no: "123" }))).toMatch(/WhatsApp/i);
  });
});

describe("toBindValues", () => {
  it("produces one value per column, with empty optionals as null", () => {
    const values = toBindValues(parseLead({
      parent_name: "Ann", child_name: "Bo", whatsapp_no: "0123456789",
      email: "a@b.com", preferred_branch: "KL",
    }));
    expect(values).toHaveLength(LEAD_COLUMNS.length);
    // child_age + all utm/fbclid are empty -> null
    expect(values[LEAD_COLUMNS.indexOf("child_age")]).toBeNull();
    expect(values[LEAD_COLUMNS.indexOf("utm_source")]).toBeNull();
    expect(values[LEAD_COLUMNS.indexOf("parent_name")]).toBe("Ann");
    expect(values[LEAD_COLUMNS.indexOf("source")]).toBe("website_trial_form");
  });
});
```

- [ ] **Step 4: Run the test to confirm it fails**

Run:
```bash
npm test
```
Expected: FAIL — cannot resolve `../functions/api/_lead-core` (module does not exist yet).

- [ ] **Step 5: Implement `functions/api/_lead-core.ts`**

```ts
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
```

- [ ] **Step 6: Run the test to confirm it passes**

Run:
```bash
npm test
```
Expected: PASS — all tests green.

- [ ] **Step 7: Commit**

```bash
git add package.json package-lock.json vitest.config.ts functions/api/_lead-core.ts test/lead-core.test.ts
git commit -m "feat: add pure lead-parsing core with unit tests"
```

---

## Task 4: Pages Function for /api/lead, remove the Node route

**Files:**
- Create: `functions/api/lead.ts`
- Delete: `app/api/lead/route.ts`
- Delete: `app/lib/db.ts`
- Modify: `package.json` (remove `pg`, `@types/pg`)

- [ ] **Step 1: Create `functions/api/lead.ts`**

```ts
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
```

- [ ] **Step 2: Delete the old Node route and pool**

Run:
```bash
git rm app/api/lead/route.ts app/lib/db.ts
```
Expected: both files staged for deletion.

- [ ] **Step 3: Remove `pg` and `@types/pg` from `package.json`**

In `package.json`, delete the `"pg": "^8.13.1"` line from `"dependencies"` and the `"@types/pg": "^8.11.10"` line from `"devDependencies"`. Then:
```bash
npm install
```
Expected: `pg` removed from the lockfile, install succeeds.

- [ ] **Step 4: Verify nothing still imports the deleted modules or `pg`**

Run:
```bash
grep -rn -E "from \"pg\"|app/lib/db|api/lead/route" app functions 2>/dev/null || echo "clean"
```
Expected: `clean` (no matches).

- [ ] **Step 5: Re-run the build and unit tests**

Run:
```bash
npm run build && npm test
```
Expected: build emits `out/` (now with no API route), unit tests PASS.

- [ ] **Step 6: Commit**

```bash
git add functions/api/lead.ts package.json package-lock.json
git commit -m "feat: implement /api/lead as a Pages Function backed by D1; drop pg"
```

---

## Task 5: Wrangler configuration

**Files:**
- Create: `wrangler.jsonc`

- [ ] **Step 1: Create `wrangler.jsonc`**

The `database_id` is filled in Task 6 after `d1 create`; leave the placeholder for now.

```jsonc
{
  "name": "ebright-website",
  "compatibility_date": "2025-06-01",
  "pages_build_output_dir": "out",
  "d1_databases": [
    {
      "binding": "DB",
      "database_name": "ebright-leads",
      "database_id": "PLACEHOLDER_FILLED_IN_TASK_6"
    }
  ]
}
```

- [ ] **Step 2: Commit**

```bash
git add wrangler.jsonc
git commit -m "chore: add Wrangler config with D1 binding"
```

---

## Task 6: Provision Cloudflare resources (run locally)

> These steps create cloud resources and require your Cloudflare login. `npx wrangler login` opens a browser — **run it yourself** in the terminal (e.g. type `! npx wrangler login`).

**Files:**
- Modify: `wrangler.jsonc` (insert real `database_id`)

- [ ] **Step 1: Authenticate Wrangler**

Run:
```bash
npx wrangler login
```
Expected: browser opens; after granting access, terminal prints "Successfully logged in."

- [ ] **Step 2: Create the D1 database**

Run:
```bash
npx wrangler d1 create ebright-leads
```
Expected: prints a config block including `database_id = "<uuid>"`.

- [ ] **Step 3: Paste the real `database_id` into `wrangler.jsonc`**

Replace `PLACEHOLDER_FILLED_IN_TASK_6` with the `<uuid>` from Step 2.

- [ ] **Step 4: Apply the schema to the REMOTE D1**

Run:
```bash
npx wrangler d1 execute ebright-leads --file=schema.sql --remote --yes
```
Expected: "executed" summary, table created, no error.

- [ ] **Step 5: Apply the schema to the LOCAL D1 (for the Task 7 smoke test)**

Run:
```bash
npx wrangler d1 execute ebright-leads --file=schema.sql --local --yes
```
Expected: "executed" summary against the local `.wrangler/state` DB.

- [ ] **Step 6: Set the Turnstile secret for the Pages project**

Run:
```bash
npx wrangler pages secret put TURNSTILE_SECRET
```
Paste the Turnstile secret when prompted (the same value currently in the VPS `.env`).
Expected: "Successfully created secret TURNSTILE_SECRET."

> If the Pages project does not exist yet, this command (or the first deploy in Task 8) will offer to create it — accept, name it `ebright-website`.

- [ ] **Step 7: Commit the real database id**

```bash
git add wrangler.jsonc
git commit -m "chore: wire real D1 database_id into Wrangler config"
```

---

## Task 7: Local end-to-end smoke test

> Verifies the Function + D1 binding actually accept a submission before deploying. Run two terminals (or background the dev server).

- [ ] **Step 1: Build, then start the local Pages dev server**

Run:
```bash
npm run build
npx wrangler pages dev
```
Expected: serves on a local URL (e.g. `http://localhost:8788`) and reports the `DB` binding (local) is available. Leave running.

- [ ] **Step 2: POST a valid lead (Turnstile unset locally → not blocked)**

In a second terminal:
```bash
curl -s -X POST http://localhost:8788/api/lead \
  -H "content-type: application/json" \
  -d '{"parent_name":"Smoke Test","child_name":"Kid","child_age":"8","whatsapp_no":"0123456789","email":"smoke@test.com","preferred_branch":"KL"}'
```
Expected: `{"ok":true,"id":1}` (id may differ).

- [ ] **Step 3: POST an invalid lead (missing fields) → 400**

```bash
curl -s -o /dev/null -w "%{http_code}\n" -X POST http://localhost:8788/api/lead \
  -H "content-type: application/json" -d '{"parent_name":"NoRest"}'
```
Expected: `400`.

- [ ] **Step 4: Confirm the row landed in local D1**

```bash
npx wrangler d1 execute ebright-leads --local --yes \
  --command "SELECT id, parent_name, source FROM new_website_form ORDER BY id DESC LIMIT 3"
```
Expected: shows the "Smoke Test" row with `source = website_trial_form`.

- [ ] **Step 5: Stop the dev server** (Ctrl+C). No commit (no file changes).

---

## Task 8: Deploy and verify on pages.dev

- [ ] **Step 1: Deploy**

Run:
```bash
npm run build
npx wrangler pages deploy
```
Expected: uploads `out/` and the `functions/`; prints a live URL like `https://ebright-website.pages.dev` (and a per-deployment preview URL).

- [ ] **Step 2: Verify pages render**

Open the printed `*.pages.dev` URL in a browser. Confirm the home page, `/programmes/`, `/trial-class/`, `/our-story/`, `/our-branches/`, and `/gallery/` load with styles and images.

- [ ] **Step 3: Verify the live form writes to remote D1**

Submit the trial-class form on the live site (completing the Turnstile challenge). Expected: success UI. Then confirm the row:
```bash
npx wrangler d1 execute ebright-leads --remote --yes \
  --command "SELECT count(*) AS n, max(created_at) AS latest FROM new_website_form"
```
Expected: `n` incremented and `latest` ~now.

- [ ] **Step 4: Verify the /thankyou clean URL**

Visit `https://<project>.pages.dev/thankyou`. Expected: the thank-you page renders (served from `thankyou.html` via `_redirects`).

- [ ] **Step 5: Final commit / push the branch**

```bash
git status   # confirm working tree clean (all changes already committed)
git push -u origin cloudflare-pages-migration
```
Expected: branch pushed. (Open a PR when ready — merge is a Stage-2 decision alongside domain cutover.)

---

## Stage 1 Done — Acceptance Recap
- Site live on `*.pages.dev`; key marketing pages render. (Task 8.2)
- Trial-class form submission returns `{ ok: true, id }` and a row appears in remote D1. (Task 8.3)
- Invalid submission returns HTTP 400. (Task 7.3)
- `/thankyou` resolves. (Task 8.4)
- `pg` removed; no references to the deleted Node route/pool. (Task 4.4)

## Explicitly NOT in Stage 1 (tracked for Stage 2)
- Migrating historical leads from the VPS Postgres into D1.
- Attaching `www.ebright.my` / `ebright.my` custom domains; deleting the `CNAME` file.
- Rotating the leaked Postgres password and scrubbing `.env` from git history.
- Removing `.github/workflows/deploy.yml` and decommissioning the VPS + public Postgres.

## Notes / Risks
- **`.env` is still committed.** Stage 1 does not touch it (the live VPS still needs the credential until cutover). Do not delete or rotate it here.
- **Turnstile sitekey:** the client widget sitekey lives in the form components and is unchanged; only the server-side `TURNSTILE_SECRET` moves to Pages. If the secret is left unset, the Function intentionally does **not** block submissions (matches current behaviour).
- **`nodejs_compat`:** not added, since the Function uses only native Workers APIs (`fetch`, D1). If the build/deploy reports a Node built-in is required, add `"compatibility_flags": ["nodejs_compat"]` to `wrangler.jsonc` and redeploy.
