# Design: Migrate ebright-website to Cloudflare Pages

**Date:** 2026-06-19
**Status:** Approved (pending spec review)
**Owner:** od@ebright.my

## Goal

Move the ebright marketing website off its VPS (Docker + `next start` + public
Postgres) and onto **Cloudflare** entirely: static pages on **Cloudflare Pages**,
the lead form on a **Pages Function**, leads stored in **Cloudflare D1**.
Deploys happen **from local** via Wrangler.

Delivered in two stages:

- **Stage 1 (this spec's focus):** Get the site live on a `*.pages.dev` URL with a
  fully working trial-class form writing new leads to D1.
- **Stage 2 (follow-up):** Migrate historical leads from Postgres, attach the
  `www.ebright.my` / `ebright.my` custom domains, rotate the leaked DB credential,
  scrub `.env` from git history, and decommission the VPS + public Postgres.

## Current state (as found)

- **Framework:** Next.js 16.2.6, React 19, TypeScript, Tailwind v4.
- **Pages:** ~30 marketing routes under `app/` — all static (scan found no
  `cookies()`, `headers()`, ISR, `generateStaticParams`, or `dynamic`).
- **One dynamic endpoint:** `app/api/lead/route.ts` — `runtime = "nodejs"`,
  `force-dynamic`. Validates fields, verifies **Cloudflare Turnstile** via `fetch`,
  inserts into Postgres table `public.new_website_form` using the `pg` pool in
  `app/lib/db.ts`.
- **Forms posting to `/api/lead`:** `app/components/TrialClassForm.tsx`,
  `app/trial-class/TrialClassMarketingForm.tsx` (relative, same-origin).
- **`next/image` used** in 9 files.
- **Deploy today:** `.github/workflows/deploy.yml` SSHes to a VPS, `docker build`,
  runs container on port 3006 (`form.ebright.my`).
- **Database:** Postgres on a **public IPv4**, `PGSSL=false`. No in-repo consumer
  reads `new_website_form` other than this site; the CRM does not reference it.
- **Security debt:** `.env` (real DB credentials) is **committed** despite `.env*`
  being in `.gitignore` (line 34) — it was force-added and lives in git history.

## Target architecture

```
Browser
  ├─ GET pages ──────────►  Cloudflare Pages   (static HTML/CSS/JS from `out/`)
  └─ POST /api/lead ─────►  Pages Function      (functions/api/lead.ts, Workers runtime)
                               ├─ verify Cloudflare Turnstile (fetch, unchanged)
                               └─ INSERT into Cloudflare D1   (binding: DB)
```

No Node server, no VPS, no public Postgres. The form stays **same-origin**
(`POST /api/lead`), so form components need no change.

## Stage 1 — scope & changes

### 1. Static export config (`next.config.ts`)
- Add `output: "export"`.
- Add `images: { unoptimized: true }` (required — `next/image` is used and the
  default Image Optimization loader needs a server).
- Remove the runtime `rewrites()` for `/thankyou`. Replace with a static
  `public/thankyou.html` plus a Cloudflare `public/_redirects` rule
  (`/thankyou /thankyou.html 200`) if a clean URL is still wanted. (Confirm
  whether `/thankyou` is actually linked anywhere during implementation.)

### 2. Replace the Node API route with a Pages Function
- **Delete** `app/api/lead/route.ts` and `app/lib/db.ts`.
- **Remove** `pg` and `@types/pg` from `package.json`.
- **Add** `functions/api/lead.ts` (Cloudflare Pages Function, Workers runtime):
  - Port the existing field parsing, WhatsApp validation (`app/lib/phone.ts`
    logic — keep it as a shared util importable from the function, or inline it),
    allowlisted `source`, and UTM/click attribution handling **verbatim**.
  - Keep `verifyTurnstile` exactly (plain `fetch` to
    `challenges.cloudflare.com/turnstile/v0/siteverify`; `TURNSTILE_SECRET` from
    `env`).
  - Read client IP from `request.headers.get("cf-connecting-ip")`.
  - Replace the Postgres `INSERT ... RETURNING id` with D1:
    `env.DB.prepare("INSERT INTO new_website_form (...) VALUES (?,...)")
    .bind(...).run()` and return the inserted id from `meta.last_row_id`.
  - Preserve the JSON response contract (`{ ok, id }` / `{ ok:false, error }`)
    and the same HTTP status codes (400 / 500) so the existing form JS keeps
    working unchanged.

### 3. D1 schema (`schema.sql`)
Translate the Postgres DDL in `app/lib/db.ts` to SQLite/D1:
- `BIGSERIAL PRIMARY KEY` → `INTEGER PRIMARY KEY AUTOINCREMENT`
- `TEXT NOT NULL` / `TEXT` unchanged
- `TIMESTAMPTZ DEFAULT now()` → `TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP`
- Same columns/order: `id, parent_name, child_name, child_age, whatsapp_no,
  email, preferred_branch, source, utm_source, utm_medium, utm_campaign,
  utm_id, utm_content, utm_term, fbclid, created_at`.
- `source` default `'website_trial_form'`.

### 4. Wrangler config (`wrangler.jsonc`)
- Pages project name (e.g. `ebright-website`).
- D1 binding `DB` → database `ebright-leads` (id filled after `d1 create`).
- `compatibility_date` set; `compatibility_flags: ["nodejs_compat"]` if needed by
  the function (likely not, since D1 + fetch are native — confirm at build).
- `pages_build_output_dir: "out"`.

### 5. Light cleanup now (low-risk, no VPS impact)
- `git rm --cached .env` (stop tracking; `.gitignore` already covers it).
  **Do not rotate the credential yet** — the live VPS still uses it until Stage 2
  cutover. Full rotation + history scrub happen in Stage 2.

### Deploy procedure (from local)
```
npx wrangler login                                          # browser auth (user runs)
npx wrangler d1 create ebright-leads                        # paste id into wrangler.jsonc
npx wrangler d1 execute ebright-leads --file=schema.sql --remote
npx wrangler pages secret put TURNSTILE_SECRET              # paste the Turnstile secret
npm install                                                  # after dep changes
npm run build                                                # produces out/ (+ functions/)
npx wrangler pages deploy                                    # → live on *.pages.dev
```

### Stage 1 acceptance criteria
- Site loads on the `*.pages.dev` URL; key pages render (home, programmes,
  trial-class, our-story, branches, gallery).
- Submitting the trial-class form returns `{ ok: true, id }` and a row appears in
  D1 (`wrangler d1 execute ebright-leads --command "SELECT count(*) FROM
  new_website_form" --remote`).
- Turnstile rejection path returns 400 with the expected error JSON.
- No console errors from missing image optimization or broken `/thankyou`.

## Stage 2 — follow-up (not built yet, recorded for continuity)
- Export `public.new_website_form` from VPS Postgres → import into D1.
- Attach `www.ebright.my` + apex `ebright.my` as Pages custom domains; delete the
  GitHub-Pages `CNAME` file.
- **Rotate the Postgres password** and **scrub `.env` from git history**
  (git filter-repo / BFG).
- Remove `.github/workflows/deploy.yml`; stop and decommission the VPS container
  and shut down the public Postgres.

## Out of scope
- Visual/design changes to any page.
- CRM integration changes.
- Any non-lead backend functionality (none exists).

## Open items to confirm during implementation
- Whether `/thankyou` is linked anywhere (decides if the redirect rule is needed).
- Whether `ContactForm.tsx` submits leads through a different path (it did not
  match `/api/lead` in the scan) — confirm it needs no backend or wire it too.
- Next.js 16 + `output: "export"` + Pages Functions interaction (validate the
  build emits `out/` and Pages picks up `functions/`).
