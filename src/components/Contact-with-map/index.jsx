import React from "react";
import appData from "../../data/app.json";

const ContactWithMap = () => {
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
  const [status, setStatus] = React.useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
    const utm_source = params.get("utm_source") || null;
    const custom = {
      page: "contact",
      utm_source,
      message: formData.get("message"),
      main_service: formData.get("main_service"),
      sub_services: formData.getAll("sub_services[]").filter(Boolean),
      zip: formData.get("zip"),
      timing: formData.get("timing"),
      budget: formData.get("budget"),
      preferred_contact: formData.get("preferred_contact") || "Email",
    };
    formData.append("custom", JSON.stringify(custom));
    formData.append("source", "website");
    setStatus("pending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        body: formData,
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
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 map-box">
          <iframe title="Location map" src={appData.mapIframe} loading="lazy"></iframe>
        </div>
        <div className="col-lg-6 form">
          <form id="contact-form" method="post" className="amr-form" onSubmit={handleSubmit}>
            <div className="messages">
              {status === "pending" && <p>Submitting...</p>}
              {status === "success" && <p>Thank you! We have received your request.</p>}
              {status && status !== "pending" && status !== "success" && <p>{status}</p>}
            </div>

            <div className="controls amr-contact-card wow fadeInUp" data-wow-delay=".2s">
              <div className="amr-form-header">
                <h3 className="amr-form-title">Start Your Project</h3>
                <p className="amr-form-sub">Answer a few quick questions and we’ll guide you to the right team.</p>
              </div>

              <div className="form-group">
                <div className="amr-select-wrap">
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
                  type="tel"
                  name="phone"
                  placeholder="Phone (optional)"
                  className="amr-input"
                />
              </div>

              <div className="form-group">
                <input
                  id="form_zip"
                  type="text"
                  name="zip"
                  placeholder="Project ZIP code (optional)"
                  className="amr-input"
                />
              </div>

             

              <div className="form-group">
                <div className="amr-select-wrap">
                  <select id="form_timing" name="timing" defaultValue="" className="amr-select">
                    <option value="">Project timing</option>
                    <option value="Ready to start">Ready to start</option>
                    <option value="1–3 months">1–3 months</option>
                    <option value="3–6 months">3–6 months</option>
                    <option value="Just exploring">Just exploring</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <div className="amr-group-title">Estimated budget</div>
                <input
                  id="form_budget"
                  type="text"
                  name="budget"
                  placeholder="Estimated budget"
                  className="amr-input"
                />
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
                <textarea
                  id="form_message"
                  name="message"
                  placeholder="Message"
                  rows="4"
                  required="required"
                  className="amr-textarea"
                ></textarea>
              </div>

              <div className="form-group">
                <div className="amr-group-title">Upload Images or Videos</div>
                <input
                  id="form_drawings"
                  type="file"
                  name="drawings"
                  accept="image/*,video/*"
                  multiple
                  className="amr-input"
                />
                <p className="amr-form-sub">Upload photos or videos of your space to get a quick quote and estimate.</p>
              </div>

              <button type="submit" className="btn-curve btn-color" style={{ width: "100%" }} disabled={status === "pending"}>
                <span>{status === "pending" ? "Submitting..." : "Send Message"}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <style jsx>{`
      .amr-select-wrap {
        position: relative;
      }
      .amr-select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        padding-right: 48px;
        cursor: pointer;
        background: transparent;
      }
      .amr-select-wrap:after {
        content: "";
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 8px solid #B68C4A;
        pointer-events: none;
      }
      .amr-select::-ms-expand {
        display: none;
      }
      .amr-select:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(182,140,74,0.35);
      }
    `}</style>
    </>
  );
};

export default ContactWithMap;
