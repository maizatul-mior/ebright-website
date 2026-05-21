import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  host: process.env.PG_HOST,
  port: parseInt(process.env.PG_PORT),
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  ssl: false,
});

async function ensureTable(client) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS trial_leads (
      id SERIAL PRIMARY KEY,
      parent_name TEXT NOT NULL,
      parent_email TEXT NOT NULL,
      parent_phone TEXT NOT NULL,
      branch TEXT,
      location_key TEXT,
      children JSONB,
      num_children INTEGER,
      remarks TEXT,
      utm_source TEXT,
      utm_medium TEXT,
      utm_campaign TEXT,
      utm_content TEXT,
      utm_term TEXT,
      fbclid TEXT,
      gclid TEXT,
      device_type TEXT,
      lead_source TEXT,
      landing_page_url TEXT,
      webhook_status TEXT DEFAULT 'pending',
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `);
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const {
    parentName, parentEmail, parentPhone,
    locationKey, preferredBranch, children,
    childrenCount, remarks,
    utm_source, utm_medium, utm_campaign, utm_content, utm_term,
    fbclid, gclid, device_type, lead_source, landing_page_url,
  } = req.body;

  if (!parentName || !parentEmail || !parentPhone || !locationKey) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const client = await pool.connect();
  let dbId = null;
  let webhookStatus = 'pending';

  try {
    await ensureTable(client);

    const result = await client.query(
      `INSERT INTO trial_leads (
        parent_name, parent_email, parent_phone,
        branch, location_key, children, num_children, remarks,
        utm_source, utm_medium, utm_campaign, utm_content, utm_term,
        fbclid, gclid, device_type, lead_source, landing_page_url,
        webhook_status
      ) VALUES (
        $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,'pending'
      ) RETURNING id`,
      [
        parentName, parentEmail, parentPhone,
        preferredBranch || locationKey, locationKey,
        JSON.stringify(children || []), childrenCount || (children?.length ?? 0),
        remarks || '',
        utm_source || '', utm_medium || '', utm_campaign || '',
        utm_content || '', utm_term || '',
        fbclid || '', gclid || '',
        device_type || '', lead_source || 'Website', landing_page_url || '',
      ]
    );

    dbId = result.rows[0].id;

    // Forward to GHL webhook if configured
    const webhookUrl = process.env.GHL_WEBHOOK_URL;
    const webhookApiKey = process.env.GHL_WEBHOOK_API_KEY;
    if (webhookUrl) {
      try {
        const webhookRes = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(webhookApiKey ? { 'x-api-key': webhookApiKey } : {}),
          },
          body: JSON.stringify(req.body),
        });
        webhookStatus = webhookRes.ok ? 'success' : 'failed';
      } catch {
        webhookStatus = 'failed';
      }

      await client.query(
        `UPDATE trial_leads SET webhook_status = $1 WHERE id = $2`,
        [webhookStatus, dbId]
      );
    } else {
      webhookStatus = 'no_webhook_configured';
    }

    return res.status(200).json({ success: true, id: dbId, webhookStatus });
  } catch (err) {
    console.error('Submit error:', err.message);
    return res.status(500).json({ error: 'Server error', details: err.message });
  } finally {
    client.release();
  }
}
