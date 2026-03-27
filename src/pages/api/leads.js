import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  const orgId =
    req.body?.org_id ||
    process.env.ORG_ID ||
    process.env.YOUR_ORG_ID ||
    process.env.NEXT_PUBLIC_ORG_ID ||
    "YOUR_ORG_ID";
  const rawWebsiteId =
    req.body?.website_id ??
    process.env.WEBSITE_ID ??
    process.env.NEXT_PUBLIC_WEBSITE_ID ??
    null;
  const websiteId =
    rawWebsiteId === "" || rawWebsiteId === "NULL" ? null : rawWebsiteId;
  const name = req.body?.name || "";
  const email = req.body?.email || "";
  const phone = req.body?.phone || "";
  const serviceType = req.body?.service_type || "";
  const source = req.body?.source || "website";
  const customObj = req.body?.custom || {};

  try {
    const supabaseUrl =
      process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey =
      process.env.SUPABASE_SERVICE_ROLE ||
      process.env.SUPABASE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseKey) {
      return res
        .status(500)
        .json({
          ok: false,
          error:
            "Supabase environment is missing. Set SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL) and SUPABASE_SERVICE_ROLE (or SUPABASE_KEY / NEXT_PUBLIC_SUPABASE_ANON_KEY) on the server.",
        });
    }
    const supabase = createClient(supabaseUrl, supabaseKey);

    const payload = {
      org_id: orgId,
      website_id: websiteId,
      name,
      email,
      phone,
      service_type: serviceType,
      source,
      custom: customObj || {},
    };
    const { data, error } = await supabase.from("leads").insert(payload).select("id").single();
    if (error) {
      return res.status(500).json({ ok: false, error: error.message });
    }
    return res.status(200).json({ ok: true, id: data?.id });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
}
