import { Pool } from "pg";

// Single shared connection pool (reused across hot reloads / lambda invocations).
declare global {
  // eslint-disable-next-line no-var
  var _ebrightPgPool: Pool | undefined;
}

export function getPool(): Pool {
  if (!global._ebrightPgPool) {
    global._ebrightPgPool = new Pool({
      host: process.env.PGHOST,
      port: Number(process.env.PGPORT || 5432),
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
      ssl: process.env.PGSSL === "true" ? { rejectUnauthorized: false } : false,
      max: 5,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 12000,
    });
  }
  return global._ebrightPgPool;
}

let tableReady = false;

// Creates public.new_website_form once per process if it doesn't exist.
// Uses IF NOT EXISTS so it never touches any other table.
export async function ensureTable(): Promise<void> {
  if (tableReady) return;
  await getPool().query(`
    CREATE TABLE IF NOT EXISTS public.new_website_form (
      id               BIGSERIAL PRIMARY KEY,
      parent_name      TEXT        NOT NULL,
      child_name       TEXT        NOT NULL,
      child_age        TEXT,
      whatsapp_no      TEXT        NOT NULL,
      email            TEXT        NOT NULL,
      preferred_branch TEXT        NOT NULL,
      source           TEXT        DEFAULT 'website_trial_form',
      utm_source       TEXT,
      utm_medium       TEXT,
      utm_campaign     TEXT,
      utm_id           TEXT,
      utm_content      TEXT,
      utm_term         TEXT,
      fbclid           TEXT,
      created_at       TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);
  tableReady = true;
}
