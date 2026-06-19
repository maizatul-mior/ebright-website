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
