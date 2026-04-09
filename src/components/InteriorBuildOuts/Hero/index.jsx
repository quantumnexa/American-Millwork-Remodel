/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";

const InteriorBuildOutsHero = () => {
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
    const custom = { page: "interior-buildouts-hero", utm_source, message };
    setStatus("pending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          service_type: "Interior Build-Outs",
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
      <header className="slid-half interior-buildouts-hero">
        <div className="cta__slider-wrapper nofull">
          <div className="media-wrapper slide-inner valign">
            <div className="bg-img" data-overlay-dark="5">
              <Image
                src="/assets/img/hero/hero-kitchen.png"
                alt="Interior Build-Outs Hero"
                layout="fill"
                objectFit="cover"
                priority={true}
              />
            </div>
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
                            INTERIOR BUILD-OUTS
                          </h5>
                          <h1 className="words chars splitting" style={{ fontSize: "55px", lineHeight: "1.1" }}>
                            <Link href="#">Transform Your Space Into a Fully Functional Interior</Link>
                          </h1>
                        </div>
                        <p className="mt-10">
                          Professional interior buildout services for residential and commercial spaces, crafted for efficiency, style, and long-term performance.
                        </p>
                      </div>
                      <div className="hero-form">
                        <h3 className="form-title">Get a Free Estimate</h3>
                        <form onSubmit={handleSubmit}>
                          <div className="row-2">
                            <input className="hf-input" name="name" type="text" placeholder="Name" required />
                            <input className="hf-input" name="phone" type="tel" placeholder="Phone" required />
                          </div>
                          <input className="hf-input" name="email" type="email" placeholder="Email" required />

                          <textarea className="hf-textarea" name="message" rows="3" placeholder="Project Description" required />
                          <button className="btn-curve btn-color hf-btn" type="submit" disabled={status === "pending"}>
                            <span>{status === "pending" ? "Submitting..." : "Get a Free Estimate"}</span>
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
        .interior-buildouts-hero {
          background-color: transparent !important;
          background-image: none !important;
          padding-bottom: 0 !important;
          margin-bottom: 0 !important;
        }
        .interior-buildouts-hero .cta__slider-wrapper {
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
        }
        .hf-btn {
          width: 100%;
          margin-top: 16px;
        }
        .hf-messages {
          margin-top: 12px;
          text-align: center;
        }
        .hf-messages p {
          color: #fff;
          font-size: 14px;
          margin: 0;
        }
        @media screen and (max-width: 991px) {
          .hero-row {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .caption {
            margin-top: 40px;
          }
          .hero-col h1 {
            font-size: 40px !important;
          }
        }
        @media screen and (max-width: 767px) {
          .hero-col h1 {
            font-size: 32px !important;
          }
          .hero-col h5 {
            font-size: 14px !important;
          }
          .form-title {
            font-size: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default InteriorBuildOutsHero;