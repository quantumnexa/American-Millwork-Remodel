import { createClient } from "@supabase/supabase-js";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  const form = formidable({ multiples: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ ok: false, error: err.message });
    }

    const orgId =
      fields.org_id?.[0] ||
      process.env.ORG_ID ||
      process.env.YOUR_ORG_ID ||
      process.env.NEXT_PUBLIC_ORG_ID ||
      "YOUR_ORG_ID";
    const rawWebsiteId =
      fields.website_id?.[0] ??
      process.env.WEBSITE_ID ??
      process.env.NEXT_PUBLIC_WEBSITE_ID ??
      null;
    const websiteId =
      rawWebsiteId === "" || rawWebsiteId === "NULL" ? null : rawWebsiteId;
    const name = fields.name?.[0] || "";
    const email = fields.email?.[0] || "";
    const phone = fields.phone?.[0] || "";
    const serviceType = fields.service_type?.[0] || "";
    const source = fields.source?.[0] || "website";
    const customObj = fields.custom ? JSON.parse(fields.custom[0]) : {};

    // Handle file uploads
    const drawings = files.drawings;
    let drawingUrls = [];
    if (drawings) {
      const supabaseUrl =
        process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey =
        process.env.SUPABASE_SERVICE_ROLE ||
        process.env.SUPABASE_KEY ||
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      const supabase = createClient(supabaseUrl, supabaseKey);

      const uploadPromises = (Array.isArray(drawings) ? drawings : [drawings]).map(async (file) => {
        const fileName = `drawings/${Date.now()}-${file.originalFilename}`;
        const { data, error } = await supabase.storage
          .from("project-docs")
          .upload(fileName, file._writeStream || file.filepath, {
            contentType: file.mimetype,
          });
        if (error) throw error;
        return supabase.storage.from("project-docs").getPublicUrl(fileName).data.publicUrl;
      });

      try {
        drawingUrls = await Promise.all(uploadPromises);
      } catch (uploadErr) {
        return res.status(500).json({ ok: false, error: uploadErr.message });
      }
    }

    customObj.drawings = drawingUrls;

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
  });
}
