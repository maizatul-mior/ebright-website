import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  host: process.env.PG_HOST,
  port: parseInt(process.env.PG_PORT),
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  ssl: false,
  connectionTimeoutMillis: 5000,
  idleTimeoutMillis: 10000,
});

// ── Location & GHL config ────────────────────────────────────────────────────

const LOCATION_ALIASES = {
  'taman_sri_gombak': 'taman_seri_gombak',
  'taman sri gombak': 'taman_seri_gombak',
  'tsg': 'taman_seri_gombak',
  'online_-_zoom_class': 'online',
  'online_-_zoom': 'online',
  'online_zoom_class': 'online',
  'online_zoom': 'online',
  'online': 'online',
  'wednesday_evening_online': 'online',
  'thursday_evening_online': 'online',
  'friday_evening_online': 'online',
  'saturday_online': 'online',
  'sunday_online': 'online',
  'kota_warrisan': 'kota_warisan',
  'kota warisan': 'kota_warisan',
  'kota_warisan': 'kota_warisan',
  'shah alam': 'shah_alam',
  'shah_alam': 'shah_alam',
  'putrajaya_presint_15': 'putrajaya',
  'w_p_putrajaya_presint_15': 'putrajaya',
  'wp_putrajaya_presint_15': 'putrajaya',
  'putrajaya_presint15': 'putrajaya',
  'putrajaya_presint_15_': 'putrajaya',
  'dataran_puchong_utama': 'puchong_utama',
};

function normalizeLocationKey(raw) {
  if (!raw) return raw;
  const cleaned = String(raw).trim().toLowerCase()
    .replace(/[^\w]+/g, '_').replace(/_+/g, '_').replace(/^_+|_+$/g, '');
  return LOCATION_ALIASES[cleaned] || cleaned;
}

function normalizeKids(formData) {
  if (!formData) return [];
  if (Array.isArray(formData.children)) {
    return formData.children.filter(c => c && (c.name || c.age)).slice(0, 4);
  }
  const kids = [];
  for (let i = 1; i <= 4; i++) {
    const c = formData[`child_${i}`];
    if (c && (c.name || c.age)) kids.push({ name: c.name || '', age: c.age || '', remarks: c.remarks || '' });
  }
  formData.children = kids;
  return kids;
}

const LOCATION_MAPPING = {
  'online':                 { locationId: 'Vpl9uLtDIHvddSSZztMA', token: 'pit-04d5417e-9400-448e-8f18-ab1ddcf70700', name: '01 Ebright Public Speaking (Online)' },
  'subang_taipan':          { locationId: 'usaXD9ZihKNI9lNqueE4', token: 'pit-ff268089-be71-45cb-9225-e6f7129d2547', name: '02 Ebright Public Speaking (Subang Taipan)' },
  'setia_alam':             { locationId: 'DoKT0lXGyQFz8DHoVOm4', token: 'pit-362bf359-27b3-4166-a55e-f698e915af9e', name: '03 Ebright Public Speaking (Setia Alam)' },
  'sri_petaling':           { locationId: 'wREGaqHXvoxHiNTj02mJ', token: 'pit-74e28a7b-30a3-48d7-8902-0c12b23cccc1', name: '04 Ebright Public Speaking (Sri Petaling)' },
  'kota_damansara':         { locationId: '3IxS5tbD1lvDxMGMSczL', token: 'pit-ce36e258-f128-4094-be1b-c1271f81442f', name: '05 Ebright Kids Public Speaking (Kota Damansara)' },
  'putrajaya':              { locationId: 'BBqrR8ckJ87m4YojupLZ', token: 'pit-d95a6a82-e8f2-4855-9169-204accfbf84d', name: '06 Ebright Public Speaking (Putrajaya)' },
  'ampang':                 { locationId: 'cqr1ywf20KLTFSDCytCx', token: 'pit-7d5f7f52-1c30-49d6-b30e-8a5715beb88d', name: '07 Ebright Kids Public Speaking (Ampang)' },
  'cyberjaya':              { locationId: '4xnM7ZmlbYAVFVqY1bX8', token: 'pit-ac5b7372-a5a0-4cdd-9828-38a74362706c', name: '08 Ebright Public Speaking (Cyberjaya)' },
  'klang':                  { locationId: 'ByhyzMBuV43aAzOsZffy', token: 'pit-db64a126-6605-48c3-9aa6-04622670c69e', name: '09 Ebright Public Speaking (Klang)' },
  'denai_alam':             { locationId: '7myL6WBNCz4rlxhE1GfC', token: 'pit-fba13e5a-ce2c-46eb-bae7-fb9e352a0e4a', name: '10 Ebright Kids Public Speaking (Denai Alam)' },
  'bandar_baru_bangi':      { locationId: 'oUjhd0TVocJcZ1cMMi2G', token: 'pit-03fe8042-925c-4694-90b1-e86cfacdaeae', name: '11 Ebright Public Speaking (Bandar Baru Bangi)' },
  'danau_kota':             { locationId: 'HTsl0vOTuEAVw85S9I16', token: 'pit-f93e4594-99fe-43ed-9f9d-d6f766d4cd6d', name: '12 Ebright Public Speaking (Danau Kota)' },
  'shah_alam':              { locationId: '3ZNi0O4QkJiJ49QWnc19', token: 'pit-80debf55-6796-4ac9-8170-a9c2e69330e4', name: '13 Ebright Public Speaking (Shah Alam)' },
  'bandar_tun_hussein_onn': { locationId: 'gtZGYA7BGWfx54pND4nw', token: 'pit-e1e94f64-9950-4cd4-8cf1-acbaa4059ffd', name: '14 Ebright Public Speaking (Bandar Tun Hussein Onn)' },
  'eco_grandeur':           { locationId: 'EyX5ziXrAPuCOHoMutip', token: 'pit-503e96e5-e6a1-4e37-8fa9-dd48f67c3248', name: '15 Ebright Public Speaking (Eco Grandeur)' },
  'bandar_seri_putra':      { locationId: 'FuQByFeUURbkBl2YA61q', token: 'pit-d891efe2-0f9b-410f-b7b4-a192c4c3f62c', name: '16 Ebright Public Speaking (Bandar Seri Putra)' },
  'bandar_rimbayu':         { locationId: 'RtnVTOWs5GRREHyiTxaT', token: 'pit-6914cf46-ce4e-4b4a-a2fc-f0ae33ac9159', name: '17 Ebright Public Speaking Academy (Bandar Rimbayu)' },
  'taman_seri_gombak':      { locationId: 'XUCj8GKwaYGPFB3LFm17', token: 'pit-1c61ad71-ff45-411c-8899-034e9e797959', name: '18 Ebright Public Speaking (Taman Seri Gombak)' },
  'kajang_ttdi_grove':      { locationId: 'QpIeU8mksO4PHvBIudQQ', token: 'pit-8f5445fa-b413-4137-8bed-00f8e9c15efb', name: '19 Ebright Public Speaking Academy (TTDI Grove)' },
  'kota_warisan':           { locationId: 'XeId139CcA8Wl6h5zTJT', token: 'pit-506bc22f-a756-4d80-b7ef-76fdee54a6e5', name: '20 Ebright Public Speaking Academy (Kota Warisan)' },
  'tropicana_sungai_buloh': { locationId: 'baTAHn1jvxmUZS0J5pBf', token: 'pit-04919c9d-db5c-4c31-9923-b8fa08ea32d2', name: '21 Ebright Public Speaking Academy (Tropicana Sungai Buloh)' },
  'puncak_jalil':           { locationId: 'xdiXYPd2m6LZWNTQVAIj', token: 'pit-3cd62cb3-1acf-435f-98ba-bc53fae93a2e', name: '22 Ebright Public Speaking Academy (Puncak Jalil)' },
  'puchong_utama':          { locationId: 'dVVxStgEAxPktzsNEb5B', token: 'pit-ac07c188-6b62-4b6e-8d94-486d6b624ef5', name: '23 Ebright Public Speaking Academy (Puchong Utama)' },
};

const FIELD_MAPPINGS = {
  'remarks': 'contact.remarks',
  'utm_source': 'contact.utm_source',
  'utm_medium': 'contact.utm_medium',
  'utm_campaign': 'contact.utm_campaign',
  'utm_content': 'contact.utm_content',
  'utm_term': 'contact.utm_term',
  'fbclid': 'contact.facebook_click_id',
  'gclid': 'contact.google_click_id',
  'lead_source': 'contact.lead_source',
  'landing_page_url': 'contact.landing_page_url',
  'device_type': 'contact.device_type',
};

const PREFERRED_BRANCH_VALUES = {
  'online': 'Online (Zoom Class)', 'subang_taipan': 'Subang Taipan (USJ 10)',
  'setia_alam': 'Setia Alam (Sunsuria Forum)', 'sri_petaling': 'Sri Petaling (Jalan Radin Tengah)',
  'kota_damansara': 'Kota Damansara', 'putrajaya': 'Putrajaya (Presint 15)',
  'ampang': 'Ampang (Jalan Ampang Utama 1/1)', 'cyberjaya': 'Cyberjaya (Tamarind Square)',
  'klang': 'Klang (Bandar Botanic)', 'denai_alam': 'Denai Alam (Jalan Elektron U16/E)',
  'bandar_baru_bangi': 'Bandar Baru Bangi (Jalan Medan Pusat Bandar 8A)',
  'danau_kota': 'Danau Kota (StarParc Point)',
  'shah_alam': 'Shah Alam (Jalan Tengku Ampuan Zabedah D 9/D)',
  'bandar_tun_hussein_onn': 'Bandar Tun Hussein Onn (Jalan Suarasa 8/5)',
  'eco_grandeur': 'Eco Grandeur (Jalan Eco Grandeur 1/3D)',
  'bandar_seri_putra': 'Bandar Seri Putra (Jalan Seri Putra 1/10)',
  'bandar_rimbayu': 'Bandar Rimbayu', 'taman_seri_gombak': 'Taman Seri Gombak',
  'kajang_ttdi_grove': 'Kajang TTDI Grove', 'kota_warisan': 'Kota Warisan',
  'tropicana_sungai_buloh': 'Tropicana Sungai Buloh', 'puncak_jalil': 'Puncak Jalil',
  'puchong_utama': 'Puchong Utama',
};

const BRANCH_TAGS = {
  'online': { tag: 'onl', region: 'r3' }, 'subang_taipan': { tag: 'st', region: 'r2' },
  'setia_alam': { tag: 'sa', region: 'r2' }, 'sri_petaling': { tag: 'sp', region: 'r3' },
  'kota_damansara': { tag: 'kd', region: 'r3' }, 'putrajaya': { tag: 'pjy', region: 'r2' },
  'ampang': { tag: 'amp', region: 'r2' }, 'cyberjaya': { tag: 'cjy', region: 'r2' },
  'klang': { tag: 'klg', region: 'r2' }, 'denai_alam': { tag: 'da', region: 'r3' },
  'bandar_baru_bangi': { tag: 'bbb', region: 'r2' }, 'danau_kota': { tag: 'dk', region: 'r3' },
  'shah_alam': { tag: 'sha', region: 'r2' }, 'bandar_tun_hussein_onn': { tag: 'btho', region: 'r3' },
  'eco_grandeur': { tag: 'egr', region: 'r3' }, 'bandar_seri_putra': { tag: 'bsp', region: 'r3' },
  'bandar_rimbayu': { tag: 'rby', region: 'r2' }, 'taman_seri_gombak': { tag: 'tsg', region: 'r3' },
  'kajang_ttdi_grove': { tag: 'ktg', region: 'r3' }, 'kota_warisan': { tag: 'kw', region: 'r2' },
  'tropicana_sungai_buloh': { tag: 'tsb', region: 'ra' }, 'puncak_jalil': { tag: 'pjl', region: 'rb' },
  'puchong_utama': { tag: 'pu', region: 'rc' },
};

const PIPELINE_NAME_MAP = {
  'online': '01 ONL', 'subang_taipan': '02 ST', 'setia_alam': '03 SA',
  'sri_petaling': '04 SP', 'kota_damansara': '05 KD', 'putrajaya': '06 PJY',
  'ampang': '07 AMP', 'cyberjaya': '08 CJY', 'klang': '09 KLG',
  'denai_alam': '10 DA', 'bandar_baru_bangi': '11 BBB', 'danau_kota': '12 DK',
  'shah_alam': '13 SHA', 'bandar_tun_hussein_onn': '14 BTHO', 'eco_grandeur': '15 EGR',
  'bandar_seri_putra': '16 BSP', 'bandar_rimbayu': '17 RBY', 'taman_seri_gombak': '18 TSG',
  'kajang_ttdi_grove': '19 KTG', 'kota_warisan': '20 KW', 'tropicana_sungai_buloh': '21 TSB',
  'puncak_jalil': '22 PJL', 'puchong_utama': '23 PU',
};

// ── GHL API helpers ──────────────────────────────────────────────────────────

const GHL_HEADERS = (token) => ({
  'Authorization': `Bearer ${token}`,
  'Content-Type': 'application/json',
  'Version': '2021-07-28',
});

async function ghlGet(url, token) {
  const res = await fetch(url, { headers: GHL_HEADERS(token) });
  const text = await res.text();
  try { return { ok: res.ok, status: res.status, data: text ? JSON.parse(text) : {} }; }
  catch { return { ok: res.ok, status: res.status, data: {} }; }
}

async function ghlPost(url, token, body) {
  const res = await fetch(url, { method: 'POST', headers: GHL_HEADERS(token), body: JSON.stringify(body) });
  const text = await res.text();
  try { return { ok: res.ok, status: res.status, data: text ? JSON.parse(text) : {} }; }
  catch { return { ok: res.ok, status: res.status, data: {} }; }
}

async function ghlPut(url, token, body) {
  const res = await fetch(url, { method: 'PUT', headers: GHL_HEADERS(token), body: JSON.stringify(body) });
  return res.ok;
}

async function getCustomFieldIds(locationId, token) {
  const { data } = await ghlGet(`https://services.leadconnectorhq.com/locations/${locationId}/customFields`, token);
  const fieldMap = { keys: {}, labels: {} };
  (data.customFields || []).forEach(f => {
    if (f.fieldKey) {
      fieldMap.keys[f.fieldKey] = f.id;
      fieldMap.keys[f.fieldKey.toLowerCase().replace('contact.', '')] = f.id;
    }
    if (f.name) fieldMap.labels[f.name.toLowerCase()] = f.id;
  });
  return fieldMap;
}

function findFieldId(ghlFieldKey, fieldMap) {
  if (!fieldMap?.keys) return null;
  const stripped = ghlFieldKey.toLowerCase().replace('contact.', '');
  const pure = stripped.replace(/[^a-z0-9]/g, '');
  if (fieldMap.keys[ghlFieldKey]) return fieldMap.keys[ghlFieldKey];
  if (fieldMap.keys[stripped]) return fieldMap.keys[stripped];
  if (fieldMap.labels[stripped.replace(/_/g, ' ')]) return fieldMap.labels[stripped.replace(/_/g, ' ')];
  for (const [k, id] of Object.entries(fieldMap.keys)) {
    if (k.replace('contact.', '').replace(/[^a-z0-9]/g, '') === pure) return id;
  }
  return null;
}

async function getPipelineInfo(locationId, token, locationKey) {
  const { data } = await ghlGet(`https://services.leadconnectorhq.com/opportunities/pipelines?locationId=${locationId}`, token);
  const pipelines = data.pipelines || [];
  if (!pipelines.length) return null;
  const expectedName = PIPELINE_NAME_MAP[locationKey];
  let pipeline = expectedName ? pipelines.find(p => p.name === expectedName) : null;
  if (!pipeline) pipeline = pipelines.find(p => p.name.toLowerCase().includes('lead') || p.name.toLowerCase().includes('sales'));
  if (!pipeline) pipeline = pipelines[0];
  if (!pipeline?.stages?.length) return null;
  const stage = pipeline.stages.find(s =>
    s.name.toLowerCase().includes('new lead') || s.name.toLowerCase().includes('(nl)')
  ) || pipeline.stages[0];
  return { pipelineId: pipeline.id, stageId: stage.id, pipelineName: pipeline.name, stageName: stage.name };
}

async function searchDuplicate(locationConfig, email, phone) {
  if (email) {
    const { ok, data } = await ghlGet(
      `https://services.leadconnectorhq.com/contacts/search/duplicate?locationId=${locationConfig.locationId}&email=${encodeURIComponent(email)}`,
      locationConfig.token
    );
    if (ok && data.contact?.id) return data.contact.id;
  }
  if (phone && phone.length >= 10) {
    const { ok, data } = await ghlGet(
      `https://services.leadconnectorhq.com/contacts/search/duplicate?locationId=${locationConfig.locationId}&phone=${encodeURIComponent(phone)}`,
      locationConfig.token
    );
    if (ok && data.contact?.id) return data.contact.id;
  }
  return null;
}

async function createContact(locationConfig, formData, fieldMap) {
  const customFields = [];
  for (const [formField, ghlKey] of Object.entries(FIELD_MAPPINGS)) {
    const id = findFieldId(ghlKey, fieldMap);
    if (formData[formField] && id) customFields.push({ id, value: String(formData[formField]) });
  }
  const branchNameId = findFieldId('contact.branch_name', fieldMap);
  if (branchNameId) customFields.push({ id: branchNameId, value: locationConfig.name });
  const prefBranchId = findFieldId('contact.preferred_branch', fieldMap);
  if (prefBranchId && formData.location) {
    const val = PREFERRED_BRANCH_VALUES[formData.location];
    if (val) customFields.push({ id: prefBranchId, value: val });
  }
  const kids = Array.isArray(formData.children) ? formData.children.filter(c => c?.name || c?.age).slice(0, 4) : [];
  kids.forEach((child, i) => {
    const nameId = findFieldId(`contact.child_${i + 1}_name`, fieldMap);
    const ageId = findFieldId(`contact.child_${i + 1}_age`, fieldMap);
    if (nameId && child.name) customFields.push({ id: nameId, value: child.name.trim() });
    if (ageId && child.age) customFields.push({ id: ageId, value: child.age.trim() });
  });
  const numId = findFieldId('contact.number_of_children', fieldMap);
  if (numId && kids.length) customFields.push({ id: numId, value: String(kids.length) });

  const nameParts = (formData.parent_name || '').trim().split(/\s+/);
  const branchConfig = BRANCH_TAGS[formData.location];
  const tags = ['new lead'];
  if (branchConfig) { tags.push(branchConfig.tag); tags.push(branchConfig.region); }

  return ghlPost('https://services.leadconnectorhq.com/contacts', locationConfig.token, {
    locationId: locationConfig.locationId,
    firstName: nameParts[0] || '',
    lastName: nameParts.slice(1).join(' ') || '',
    email: formData.parent_email || '',
    phone: formData.parent_contact || '',
    source: formData.lead_source || 'Trial Class Form',
    tags,
    customFields,
  });
}

async function updateContact(locationConfig, contactId, formData, fieldMap) {
  const customFields = [];
  for (const [formField, ghlKey] of Object.entries(FIELD_MAPPINGS)) {
    const id = findFieldId(ghlKey, fieldMap);
    if (formData[formField] && id) customFields.push({ id, value: String(formData[formField]) });
  }
  if (!customFields.length) return;
  await ghlPut(`https://services.leadconnectorhq.com/contacts/${contactId}`, locationConfig.token, { customFields });
}

async function createOpportunity(locationConfig, contactId, name, pipelineInfo, leadSource) {
  const uniqueId = Date.now().toString().slice(-4);
  return ghlPost('https://services.leadconnectorhq.com/opportunities/', locationConfig.token, {
    locationId: locationConfig.locationId,
    pipelineId: pipelineInfo.pipelineId,
    pipelineStageId: pipelineInfo.stageId,
    contactId,
    name: `${name} [#${uniqueId}]`,
    status: 'open',
    source: leadSource || 'Trial Class Form',
  });
}

async function addNote(locationConfig, contactId, body) {
  await ghlPost(`https://services.leadconnectorhq.com/contacts/${contactId}/notes`, locationConfig.token, { body });
}

async function hasOpportunities(locationConfig, contactId) {
  const { data } = await ghlGet(
    `https://services.leadconnectorhq.com/opportunities/search?location_id=${locationConfig.locationId}&contact_id=${contactId}`,
    locationConfig.token
  );
  return (data.opportunities?.length || 0) > 0;
}

// ── DB helper ────────────────────────────────────────────────────────────────

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
      utm_source TEXT, utm_medium TEXT, utm_campaign TEXT,
      utm_content TEXT, utm_term TEXT,
      fbclid TEXT, gclid TEXT,
      device_type TEXT, lead_source TEXT, landing_page_url TEXT,
      ghl_contact_id TEXT,
      ghl_status TEXT DEFAULT 'pending',
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `);
  // Add columns if they don't exist (handles existing tables with old schema)
  await client.query(`ALTER TABLE trial_leads ADD COLUMN IF NOT EXISTS ghl_contact_id TEXT`);
  await client.query(`ALTER TABLE trial_leads ADD COLUMN IF NOT EXISTS ghl_status TEXT DEFAULT 'pending'`);
  await client.query(`ALTER TABLE trial_leads ADD COLUMN IF NOT EXISTS webhook_status TEXT`);
}

// ── Main handler ─────────────────────────────────────────────────────────────

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const body = req.body;

  // Normalize field names (support both camelCase and snake_case)
  const formData = {
    parent_name:    body.parent_name    || body.parentName    || '',
    parent_email:   body.parent_email   || body.parentEmail   || '',
    parent_contact: body.parent_contact || body.parentPhone   || '',
    location:       normalizeLocationKey(body.locationKey || body.location || ''),
    children:       body.children || [],
    remarks:        body.remarks || '',
    lead_source:    body.lead_source || 'Website',
    device_type:    body.device_type || '',
    landing_page_url: body.landing_page_url || '',
    utm_source:     body.utm_source || '',
    utm_medium:     body.utm_medium || '',
    utm_campaign:   body.utm_campaign || '',
    utm_content:    body.utm_content || '',
    utm_term:       body.utm_term || '',
    fbclid:         body.fbclid || '',
    gclid:          body.gclid || '',
  };

  normalizeKids(formData);

  if (!formData.parent_name || !formData.parent_email || !formData.parent_contact || !formData.location) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const locationConfig = LOCATION_MAPPING[formData.location];
  if (!locationConfig) return res.status(400).json({ error: 'Invalid location key: ' + formData.location });

  let ghlContactId = null;
  let ghlStatus = 'pending';
  let dbId = null;

  // ── Step 1: Push to GHL (primary — always runs) ──────────────────────────
  try {
    const [fieldMap, pipelineInfo] = await Promise.all([
      getCustomFieldIds(locationConfig.locationId, locationConfig.token),
      getPipelineInfo(locationConfig.locationId, locationConfig.token, formData.location),
    ]);

    const existingId = await searchDuplicate(locationConfig, formData.parent_email, formData.parent_contact);

    if (existingId) {
      ghlContactId = existingId;
      await updateContact(locationConfig, ghlContactId, formData, fieldMap);
    } else {
      const { ok, data } = await createContact(locationConfig, formData, fieldMap);
      if (ok) {
        ghlContactId = data.contact?.id;
      } else if (data.meta?.contactId) {
        ghlContactId = data.meta.contactId;
        await updateContact(locationConfig, ghlContactId, formData, fieldMap);
      }
    }

    if (ghlContactId && pipelineInfo) {
      const alreadyHasOpp = await hasOpportunities(locationConfig, ghlContactId);
      if (!alreadyHasOpp) {
        const kids = formData.children;
        if (kids.length > 0) {
          for (let i = 0; i < kids.length; i++) {
            const oppName = `${formData.parent_name} | ${kids[i].name || 'Child'} (${kids[i].age || '?'})`;
            await createOpportunity(locationConfig, ghlContactId, oppName, pipelineInfo, formData.lead_source);
            if (i < kids.length - 1) await new Promise(r => setTimeout(r, 1200));
          }
        } else {
          await createOpportunity(locationConfig, ghlContactId, formData.parent_name, pipelineInfo, formData.lead_source);
        }
      }
    }

    if (ghlContactId) {
      const kidsSummary = formData.children
        .map((c, i) => `Child ${i + 1}: ${c.name || 'N/A'} (${c.age || 'N/A'})`)
        .join('\n') || 'None';
      await addNote(locationConfig, ghlContactId,
        `TRIAL CLASS SUBMISSION\n\nDetails:\n` +
        `- Name: ${formData.parent_name}\n` +
        `- Email: ${formData.parent_email}\n` +
        `- Phone: ${formData.parent_contact}\n` +
        `- Location: ${locationConfig.name}\n` +
        `- Lead Source: ${formData.lead_source}\n` +
        `- Remarks: ${formData.remarks || 'None'}\n\n` +
        `Children Info:\n${kidsSummary}`
      );
    }

    ghlStatus = ghlContactId ? 'success' : 'failed';
  } catch (ghlErr) {
    console.error('GHL error:', ghlErr.message);
    ghlStatus = 'failed';
  }

  // ── Step 2: Save to PostgreSQL (optional — DB issues won't break GHL) ────
  try {
    const client = await pool.connect();
    try {
      await ensureTable(client);
      const dbResult = await client.query(
        `INSERT INTO trial_leads (
          parent_name, parent_email, parent_phone, branch, location_key,
          children, num_children, remarks, utm_source, utm_medium, utm_campaign,
          utm_content, utm_term, fbclid, gclid, device_type, lead_source,
          landing_page_url, ghl_contact_id, ghl_status
        ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20)
        RETURNING id`,
        [
          formData.parent_name, formData.parent_email, formData.parent_contact,
          body.preferredBranch || formData.location, formData.location,
          JSON.stringify(formData.children), formData.children.length,
          formData.remarks, formData.utm_source, formData.utm_medium, formData.utm_campaign,
          formData.utm_content, formData.utm_term, formData.fbclid, formData.gclid,
          formData.device_type, formData.lead_source, formData.landing_page_url,
          ghlContactId, ghlStatus,
        ]
      );
      dbId = dbResult.rows[0].id;
    } finally {
      client.release();
    }
  } catch (dbErr) {
    console.error('DB error (non-fatal):', dbErr.message);
  }

  return res.status(200).json({ success: true, id: dbId, ghlContactId, ghlStatus });
}
