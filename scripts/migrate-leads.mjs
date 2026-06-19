// One-time migration: copy leads from the VPS Postgres new_website_form table
// into Cloudflare D1. Generates a .sql file of INSERT statements (and applies it
// only with --apply via wrangler — see README usage below).
//
// The website repo intentionally has no `pg` dependency. Provide pg at run time:
//   - set PG_MODULE_PATH to an existing pg install, e.g.
//       PG_MODULE_PATH=C:/Users/user/ebright-crm/node_modules/pg
//   - or `npm i pg` somewhere and point PG_MODULE_PATH at it.
//
// Usage:
//   node scripts/migrate-leads.mjs --out <file.sql>            # dry-run (default): read + generate SQL, NO writes
//   node scripts/migrate-leads.mjs --out <file.sql> --apply    # generate, then apply to remote D1 via wrangler
//
// Reads Postgres connection from the repo .env (PGHOST/PGPORT/PGUSER/PGPASSWORD/PGDATABASE/PGSSL).

import { createRequire } from "module";
import { readFileSync, writeFileSync } from "fs";
import { execFileSync } from "child_process";

const require = createRequire(import.meta.url);
const pgPath = process.env.PG_MODULE_PATH || "pg";
const { Client } = require(pgPath);

const args = process.argv.slice(2);
const apply = args.includes("--apply");
const outIdx = args.indexOf("--out");
const outFile = outIdx !== -1 ? args[outIdx + 1] : "leads-migration.sql";

// Columns that exist in BOTH Postgres and the D1 schema. Order is the INSERT order.
// Deliberately excludes id (D1 autoincrements) and pushed_to_ghl_at (legacy/dead).
const COLS = [
  "parent_name", "child_name", "child_age", "whatsapp_no", "email",
  "preferred_branch", "source", "utm_source", "utm_medium", "utm_campaign",
  "utm_id", "utm_content", "utm_term", "fbclid", "created_at",
];

const env = {};
for (const line of readFileSync("./.env", "utf8").split(/\r?\n/)) {
  const m = line.match(/^([A-Z_]+)=(.*)$/);
  if (m) env[m[1]] = m[2];
}

const sqlLiteral = (v) => {
  if (v === null || v === undefined) return "NULL";
  if (v instanceof Date) {
    // Store as 'YYYY-MM-DD HH:MM:SS' UTC, matching D1's CURRENT_TIMESTAMP format.
    return "'" + v.toISOString().replace("T", " ").replace(/\..*$/, "") + "'";
  }
  return "'" + String(v).replace(/'/g, "''") + "'";
};

(async () => {
  const client = new Client({
    host: env.PGHOST,
    port: Number(env.PGPORT || 5432),
    user: env.PGUSER,
    password: env.PGPASSWORD,
    database: env.PGDATABASE,
    ssl: env.PGSSL === "true" ? { rejectUnauthorized: false } : false,
    connectionTimeoutMillis: 15000,
  });
  await client.connect();
  try {
    const { rows } = await client.query(
      `SELECT ${COLS.join(", ")} FROM public.new_website_form ORDER BY id ASC`
    );
    const lines = rows.map(
      (r) =>
        `INSERT INTO new_website_form (${COLS.join(", ")}) VALUES (` +
        COLS.map((c) => sqlLiteral(r[c])).join(", ") +
        ");"
    );
    const sql = lines.join("\n") + "\n";
    writeFileSync(outFile, sql, "utf8");
    console.log(`Rows read from Postgres: ${rows.length}`);
    console.log(`Generated SQL written to: ${outFile}`);
    if (rows.length) {
      console.log("First INSERT:\n  " + lines[0]);
      console.log("Last INSERT:\n  " + lines[lines.length - 1]);
    }
    if (apply) {
      console.log("Applying to remote D1 (ebright-leads) via wrangler...");
      execFileSync(
        "npx",
        ["-y", "wrangler", "d1", "execute", "ebright-leads", "--remote", "--yes", `--file=${outFile}`],
        { stdio: "inherit", shell: true }
      );
      console.log("Apply complete.");
    } else {
      console.log("DRY-RUN: no D1 write performed. Re-run with --apply to write.");
    }
  } finally {
    await client.end().catch(() => {});
  }
})();
