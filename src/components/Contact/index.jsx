import React from "react";
import appData from "../../data/app.json";

const Contact = () => {
  const [status, setStatus] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    const params = new URLSearchParams(
      typeof window !== "undefined" ? window.location.search : ""
    );
    const utm_source = params.get("utm_source") || null;
    const custom = { page: "contact-section", utm_source, message };
    setStatus("pending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: "",
          service_type: "Contact Form",
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

  return (
    <>
      <section className="contact cont-map">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-md-6 contact-form wow fadeInDown"
              data-wow-delay=".3s"
            >
              <form id="contact-form" method="post" onSubmit={handleSubmit}>
                <div className="section-head">
                  <h6>Contact Us</h6>
                  <h4 className="playfont">Get In Touch</h4>
                </div>

                <div className="messages">
                  {status === "pending" && <p>Submitting...</p>}
                  {status === "success" && <p>Thank you! We have received your request.</p>}
                  {status && status !== "pending" && status !== "success" && <p>{status}</p>}
                </div>

                <div className="controls">
                  <div className="form-group">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required="required"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required="required"
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Message"
                      rows="4"
                      required="required"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-curve btn-color" disabled={status === "pending"}>
                    <span>{status === "pending" ? "Submitting..." : "Send Message"}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="contact-map">
          <iframe title="Location map" src={appData.mapIframe} loading="lazy"></iframe>
        </div>
        <div
          className="bg-img"
          style={{ backgroundImage: "url(/assets/img/2.jpg)" }}
        ></div>
      </section>
    </>
  );
};

export default Contact;
