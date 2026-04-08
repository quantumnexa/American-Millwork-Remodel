import React from "react";
import appData from "../../data/app.json";

const ContactWithMap = () => {
  const [mainService, setMainService] = React.useState("");
  const [showUploads, setShowUploads] = React.useState(false);
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
    setStatus({ type: "loading", message: "Submitting..." });

    try {
      const formData = new FormData(e.target);
      const response = await fetch("/api/leads", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error?.error || "Submit failed");
      }

      setStatus({ type: "success", message: "Your form has been submitted." });
      e.target.reset();
      setShowUploads(false); // optional if you want to reset upload section
    } catch (err) {
      setStatus({ type: "error", message: err.message || "Submission failed." });
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
          <form onSubmit={handleSubmit}>
            {status && (
              <div
                style={{
                  marginBottom: 16,
                  padding: 12,
                  borderRadius: 8,
                  color: status.type === "success" ? "#155724" : "#721c24",
                  background: status.type === "success" ? "#d4edda" : "#f8d7da",
                  border: `1px solid ${status.type === "success" ? "#c3e6cb" : "#f5c6cb"}`,
                }}
              >
                {status.message}
              </div>
            )}

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
                <label className="amr-checkbox">
                  <input
                    type="checkbox"
                    checked={showUploads}
                    onChange={(e) => setShowUploads(e.target.checked)}
                  />
                  <span style={{color:'white'}}>Add photos or videos </span>
                </label>
              </div>

              {showUploads && (
                <div className="form-group">
                  <div className="amr-group-title">Upload photos or videos of your space to get a quick quote and estimate.</div>
                  <input
                    id="form_drawings"
                    type="file"
                    name="drawings"
                    accept="image/*,video/*"
                    multiple
                    className="amr-input"
                  />
                  
                </div>
              )}

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
      .amr-checkbox {
        display: flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;
        font-size: 14px;
        color: #333;
      }
      .amr-checkbox input[type="checkbox"] {
        width: 18px;
        height: 18px;
        cursor: pointer;
        accent-color: #B68C4A;
      }
    `}</style>
    </>
  );
};

export default ContactWithMap;
