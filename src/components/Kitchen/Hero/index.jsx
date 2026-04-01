import React from "react";
import Link from "next/link";

const KitchenHero = () => {
  const [status, setStatus] = React.useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
    const utm_source = params.get("utm_source") || null;
    const custom = { page: "kitchen-hero", utm_source, hear, message };
    setStatus("pending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
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
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <header className="slid-half kitchen-hero">
        <div className="cta__slider-wrapper nofull">
          <div className="media-wrapper slide-inner valign">
            <div
              className="bg-img"
              style={{ backgroundImage: "url(/assets/img/hero/hero-kitchen.png)" }}
              data-overlay-dark="5"
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="caption">
                    <span className="top-corn"></span>
                    <span className="bottom-corn"></span>
                    <div className="hero-row">
                      <div className="hero-col">
                        <div className="custom-font">
                          <h5 className="thin custom-font text-highlight" style={{ color: "#B68C4A", letterSpacing: "4px", fontWeight: "500" }}>
                            KITCHEN
                          </h5>
                          <h1 className="words chars splitting" style={{ fontSize: "55px", lineHeight: "1.1" }}>
                            <Link href="#">Transform Your Kitchen Into a Modern Masterpiece</Link>
                          </h1>
                        </div>
                        <p className="mt-10">
                          Expert kitchen remodeling services for both residential and commercial spaces — designed for style, efficiency, and long-lasting performance.
                        </p>
                      </div>
                      <div className="hero-form">
                        <h3 className="form-title">Get a Free Quote</h3>
                        <form onSubmit={handleSubmit}>
                          <div className="row-2">
                            <input className="hf-input" name="name" type="text" placeholder="Name" required />
                            <input className="hf-input" name="phone" type="tel" placeholder="Phone" required />
                          </div>
                          
                         
                          <textarea className="hf-textarea" name="message" rows="3" placeholder="Project Description" required />
                          <button className="btn-curve btn-color hf-btn" type="submit" disabled={status === "pending"}>
                            <span>{status === "pending" ? "Submitting..." : "Get A Quote"}</span>
                          </button>
                          <div className="hf-messages">
                            {status === "success" && <p>Thank you! We have received your request.</p>}
                            {status && status !== "pending" && status !== "success" && status !== "error" && <p>{status}</p>}
                            {status === "error" && <p>Something went wrong.</p>}
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <style jsx>{`
        .kitchen-hero {
          background-color: transparent !important;
          background-image: none !important;
          padding-bottom: 0 !important;
          margin-bottom: 0 !important;
        }
        .kitchen-hero .cta__slider-wrapper {
          background-color: transparent !important;
          background-image: none !important;
        }
        .cta__slider-wrapper.nofull {
          position: relative;
        }
        .slide-inner {
          position: relative;
          min-height: 100vh;
        }
        .slide-inner .bg-img {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center center;
        }
        .caption { position: relative; z-index: 2; }
        .hero-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 40px;
          align-items: center;
          width: 100%;
        }
        .caption {
          width: 100%;
          max-width: none;
          padding-top: 0;
          margin-top: 60px;
        }
        .hero-col,
        .hero-form {
          min-width: 0;
          width: 100%;
          justify-self: stretch;
          align-self: center;
        }
        .hero-col p {
          color: #fff;
          opacity: 0.9;
          margin-bottom: 0;
        }
        .hero-form {
          background: rgba(12, 12, 12, 0.78);
          border: 1px solid #B68C4A;
          border-radius: 12px;
          padding: 24px;
          backdrop-filter: saturate(120%) blur(2px);
        }
        .form-title {
          margin: 0 0 14px 0;
          font-size: 24px;
          color: #fff;
          text-align: left;
        }
        .row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 12px;
        }
        .hf-input,
        .hf-select,
        .hf-textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #fff;
          border-radius: 8px;
          padding: 12px 14px;
          box-sizing: border-box;
        }
        .hf-input,
        .hf-select {
          height: 48px;
        }
        .hf-input::placeholder,
        .hf-textarea::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
        .hf-input:focus,
        .hf-select:focus,
        .hf-textarea:focus {
          outline: none;
          border-color: #B68C4A;
          box-shadow: 0 0 0 2px rgba(182, 140, 74, 0.35);
        }
        .select-wrap {
          position: relative;
        }
        .select-wrap:after {
          content: "";
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 8px solid #B68C4A;
          pointer-events: none;
        }
        .hf-select {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          padding-right: 40px;
        }
        .hf-textarea {
          margin-bottom: 12px;
          resize: vertical;
          min-height: 120px;
        }
        .hf-btn {
          width: 100%;
          margin-top: 6px;
        }
        .hf-messages {
          margin-top: 10px;
          color: #fff;
        }
        @media (max-width: 991px) {
          .caption { padding-top: 0; margin-top: 20px; }
          .hero-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .row-2 {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .hero-col h1 {
            font-size: 34px !important;
            margin-bottom: 10px;
          }
          .hero-form {
            padding: 20px;
            margin-top: 10px;
          }
          .form-title {
            font-size: 20px;
            margin-bottom: 15px;
          }
          .slide-inner {
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding: 120px 0 60px;
          }
          .hf-input, .hf-select, .hf-textarea {
            padding: 10px 12px;
            height: 44px;
          }
          .hf-textarea {
            min-height: 80px;
          }
        }
        @media (max-width: 767px) {
          .hero-col h1 {
            font-size: 28px !important;
          }
          .hero-col h5 {
            font-size: 13px !important;
            letter-spacing: 2px !important;
          }
          .slide-inner {
            padding: 100px 0 40px;
          }
        }
        @media (max-width: 1199px) and (min-width: 992px) {
          .caption { padding-top: 0; }
        }
      `}</style>
    </>
  );
};

export default KitchenHero;
