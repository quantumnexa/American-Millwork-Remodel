import React from "react";
import appData from '../../data/app.json'

const ContactWithMap = () => {
<<<<<<< Updated upstream
  const [mainService, setMainService] = React.useState("");
  const residential = [
    "Kitchen Remodel",
    "Bathroom Remodel",
    "Custom Millwork",
    "Countertops",
    "Interior Finish",
    "Design Consultation"
  ];
  const commercial = [
    "Office Millwork",
    "Retail Fixtures",
    "Hospitality",
    "Healthcare",
    "Countertops",
    "Design Consultation"
  ];
=======
  const [status, setStatus] = React.useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const service_type = formData.get("service_type");
    const message = formData.get("message");
    const org_id = process.env.NEXT_PUBLIC_ORG_ID || "YOUR_ORG_ID";
    const website_id = process.env.NEXT_PUBLIC_WEBSITE_ID || "YOUR_WEBSITE_ID";
    const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
    const utm_source = params.get("utm_source") || null;
    const custom = {
      page: "contact",
      utm_source,
      message,
    };
    setStatus("pending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          org_id,
          website_id,
          name,
          email,
          phone,
          service_type,
          source: "website",
          custom,
        }),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus(data.error || "error");
      }
    } catch (err) {
      setStatus("error");
    }
  };
>>>>>>> Stashed changes
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 map-box">
          <iframe src={appData.mapIframe}></iframe>
        </div>
        <div className="col-lg-6 form">
<<<<<<< Updated upstream
          <form id="contact-form" method="post" className="amr-form">
            <div className="messages"></div>
=======
          <form id="contact-form" method="post" onSubmit={handleSubmit}>
            <div className="messages">
              {status === "pending" && <p>Submitting...</p>}
              {status === "success" && <p>Thank you! We have received your request.</p>}
              {status && status !== "pending" && status !== "success" && <p>Something went wrong.</p>}
            </div>
>>>>>>> Stashed changes

            <div className="controls amr-contact-card wow fadeInUp" data-wow-delay=".2s">
              <div className="amr-form-header">
                <h3 className="amr-form-title">Start Your Project</h3>
                <p className="amr-form-sub">Answer a few quick questions and we’ll guide you to the right team.</p>
              </div>

              <div className="form-group">
                <select
                  id="form_main_service"
                  name="main_service"
                  value={mainService}
                  onChange={(e) => setMainService(e.target.value)}
                  required
                  className="amr-select"
                >
                  <option value="">Select Service Type</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>

              {mainService && (
                <div className="form-group">
                  <div className="amr-group-title">Select sub-services</div>
                  {(mainService === "Residential" ? residential : commercial).map(
                    (label) => (
                      <label key={label} className="amr-pill">
                        <input type="checkbox" name="sub_services[]" value={label} />
                        <span>{label}</span>
                      </label>
                    )
                  )}
                </div>
              )}

              <div className="form-group">
                <input
                  id="form_name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required="required"
                  className="amr-input"
                />
              </div>

              <div className="form-group">
                <input
                  id="form_email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required="required"
                  className="amr-input"
                />
              </div>

              <div className="form-group">
                <input
                  id="form_phone"
<<<<<<< Updated upstream
                  type="tel"
                  name="phone"
                  placeholder="Phone (optional)"
                  className="amr-input"
=======
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  required="required"
>>>>>>> Stashed changes
                />
              </div>

              <div className="form-group">
                <input
<<<<<<< Updated upstream
                  id="form_zip"
                  type="text"
                  name="zip"
                  placeholder="Project ZIP code (optional)"
                  className="amr-input"
=======
                  id="form_service_type"
                  type="text"
                  name="service_type"
                  placeholder="Service Type"
                  required="required"
>>>>>>> Stashed changes
                />
              </div>

              <div className="form-group">
<<<<<<< Updated upstream
                <select id="form_timing" name="timing" defaultValue="" className="amr-select">
                  <option value="">Project timing</option>
                  <option value="Ready to start">Ready to start</option>
                  <option value="1–3 months">1–3 months</option>
                  <option value="3–6 months">3–6 months</option>
                  <option value="Just exploring">Just exploring</option>
                </select>
              </div>

              <div className="form-group">
                <select id="form_budget" name="budget" defaultValue="" className="amr-select">
                  <option value="">Estimated budget</option>
                  <option value="Under $5k">Under $5k</option>
                  <option value="$5k–$15k">$5k–$15k</option>
                  <option value="$15k–$30k">$15k–$30k</option>
                  <option value="$30k–$60k">$30k–$60k</option>
                  <option value="$60k+">$60k+</option>
                  <option value="Not sure">Not sure</option>
                </select>
              </div>

              <div className="form-group">
                <div className="amr-group-title">Preferred contact</div>
                <label className="amr-radio">
                  <input type="radio" name="preferred_contact" value="Email" defaultChecked />
                  <span>Email</span>
                </label>
                <label className="amr-radio">
                  <input type="radio" name="preferred_contact" value="Phone" />
                  <span>Phone</span>
                </label>
              </div>

              <div className="form-group">
=======
>>>>>>> Stashed changes
                <textarea
                  id="form_message"
                  name="message"
                  placeholder="Message"
                  rows="4"
                  required="required"
                  className="amr-textarea"
                ></textarea>
              </div>

              <button type="submit" className="btn-curve btn-color" style={{ width: "100%" }}>
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactWithMap;
