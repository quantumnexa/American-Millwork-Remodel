import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  const orgId =
    req.body?.org_id || process.env.ORG_ID || process.env.NEXT_PUBLIC_ORG_ID || "YOUR_ORG_ID";
  const websiteId =
    req.body?.website_id ||
    process.env.WEBSITE_ID ||
    process.env.NEXT_PUBLIC_WEBSITE_ID ||
    "YOUR_WEBSITE_ID";
  const name = req.body?.name || "";
  const email = req.body?.email || "";
  const phone = req.body?.phone || "";
  const serviceType = req.body?.service_type || "";
  const source = req.body?.source || "website";
  const customObj = req.body?.custom || {};

  try {
    if (!process.env.DATABASE_URL) {
      return res
        .status(500)
        .json({ ok: false, error: "DATABASE_URL env is required on server" });
    }

    const text =
      "INSERT INTO public.leads (org_id, website_id, name, email, phone, service_type, source, custom) VALUES ($1,$2,$3,$4,$5,$6,$7,$8::jsonb) RETURNING id";
    const values = [
      orgId,
      websiteId,
      name,
      email,
      phone,
      serviceType,
      source,
      JSON.stringify(customObj || {}),
    ];
    const result = await pool.query(text, values);
    return res.status(200).json({ ok: true, id: result.rows[0]?.id });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
}
