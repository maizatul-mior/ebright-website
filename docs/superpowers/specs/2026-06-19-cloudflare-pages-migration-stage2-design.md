# Design: ebright-website Cloudflare Migration — Stage 2 (reduced scope)

**Date:** 2026-06-19
**Status:** Approved (pending spec review)
**Owner:** od@ebright.my
**Depends on:** Stage 1 (done) — site live at https://ebright-website.pages.dev, D1 `ebright-leads`.

## Goal

Finish the migration with the **minimal** end state the owner wants:

- The live site is **`ebright-website.pages.dev`** (no custom domain, no
  nameserver change).
- **Migrate the 56 historical leads** from VPS Postgres into D1.
- **Retire the VPS + public Postgres.**

## Explicitly decided / out of scope

- **No nameserver move to Cloudflare** and **no CNAME** — DNS/email stay on Wix
  untouched. The `ebright.my` domain is **handled by the owner separately**; it
  will stop resolving to a site once the VPS is shut down, until the owner
  repoints it.
- **Turnstile secret:** the **owner will set it themselves** (and add the
  pages.dev host to the Turnstile widget). Not done here. The Pages Function
  already skips verification gracefully when the secret is unset.
- **No credential rotation / git-history scrub** as a security cutover step.
  (The leaked `.env` creds become useless once the Postgres is destroyed in VPS
  teardown; `.env` is already untracked going forward.)
- No GoHighLevel re-integration (pipeline retired).

## Facts

- 56 rows in `public.new_website_form` (all `marketing_trial_form`), columns =
  the 14 D1 columns + `id` + `created_at` + legacy `pushed_to_ghl_at` (dropped on
  migration). Postgres at `103.209.156.174` (`PGSSL=false`), on the VPS.
- D1 `ebright-leads` (id `b2ef4279-20af-41a4-b974-dd2192fce95e`), account Ebright
  `856b802e7e7fefffbc6642c1239f894a`. Remote D1 currently empty.
- VPS deploy: `.github/workflows/deploy.yml` redeploys the VPS on push to `main`.

## Work items

### A. Lead-migration script (prepared + dry-run now)
Create `scripts/migrate-leads.mjs` (committed):
- Plain `import pg from "pg"`; `pg` is provided **at run time only** (no `pg` in
  the website repo, no hardcoded local path). For runs on this machine, point
  `NODE_PATH` at an existing `pg` install (the CRM's `node_modules`) or do a
  temporary `npm i pg` in a scratch dir.
- Reads Postgres connection from `.env`.
- `SELECT`s the 14 D1 columns + `created_at` (NOT `id`, NOT `pushed_to_ghl_at`)
  ordered by `id`.
- Writes batched, value-escaped D1 `INSERT` statements (including `created_at`)
  to a generated `.sql` file.
- `--dry-run` (default): prints the row count and writes the `.sql` for review;
  performs **no** D1 write.
- Apply step (cutover): pipe the generated `.sql` to
  `wrangler d1 execute ebright-leads --remote --file=<generated>.sql`.

Dry-run now to validate mapping against the 56 rows. **No D1 write yet.**

### B. Cutover sequence (ordered; owner performs the VPS-side steps)
1. **Owner: stop the VPS app/form** so Postgres stops receiving new leads
   (keep Postgres reachable on `103.209.156.174` for the copy).
2. **Run the real migration**: regenerate the `.sql` from the now-frozen Postgres
   and apply it to remote D1.
3. **Verify**: remote D1 row count == final Postgres row count; spot-check the
   newest and oldest lead.
4. **Repo cleanup (no VPS impact yet):** delete `.github/workflows/deploy.yml`
   and the `CNAME` file; merge `cloudflare-pages-migration` → `main`; set the
   Pages **production branch to `main`**; deploy from `main` so
   `ebright-website.pages.dev` is the production deployment. (Order matters:
   removing `deploy.yml` in the merge means the merge does **not** trigger a VPS
   redeploy.)
5. **Owner: shut down the VPS + destroy the Postgres instance.**

## Acceptance
- Dry-run prints `56` and a generated SQL whose columns match the D1 schema.
- After cutover: remote D1 count == final Postgres count; site served from the
  `main` branch on pages.dev; `deploy.yml` + `CNAME` gone; VPS + Postgres off.

## Risks
- **Lead loss** if the copy runs while the VPS is still collecting — mitigated by
  step B.1 (freeze before copy).
- **Accidental VPS redeploy** if `main` is pushed while `deploy.yml` still exists
  — mitigated by removing `deploy.yml` in the same merge (B.4).
- **`ebright.my` goes dark** after VPS shutdown until the owner repoints it —
  accepted; owner handles the domain.
