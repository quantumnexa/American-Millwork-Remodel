/* eslint-disable @next/next/no-img-element */
import React from "react";
import aboutUs2Data from "../../../data/about-us2.json";
import Link from 'next/link'

const AboutUs2 = () => {
  return (
    <section className="about section-padding">
      <div className="container-fluid padding5">
        <div className="row">
          <div className="col-lg-6 valign">
            <div
              className="exp-content nopat wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h6 className="sub-title main-color mb-10 ls10" style={{ color: '#B68C4A' }}>SMART COUNTERTOP SOLUTIONS</h6>
              <h2 className="mb-20 playfont">
                Built Around <span className="text-highlight">Your Needs</span>
              </h2>
              <p className="about-text">
                Whether you&apos;re upgrading your kitchen, bathroom, or workspace, we provide countertop solutions that match your vision, timeline, and budget.
              </p>
              <div className="about-features">
                <div className="feature-item">
                  <strong>Stock Countertops:</strong>
                  <span>Quick, cost-effective, and ready to install. Perfect when you need quality without the wait.</span>
                </div>
                <div className="feature-item">
                  <strong>Custom Countertops:</strong>
                  <span>Tailored to your exact space. Choose your material, finish, edges, and dimensions for a perfect fit.</span>
                </div>
                <div className="feature-item">
                  <strong>Material Flexibility:</strong>
                  <span>Quartz, granite, marble, and more—premium options designed for durability and long-term performance.</span>
                </div>
              </div>
              <p className="about-text">
                You get the best of both worlds, speed when you need it, customization when you want it.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ab-exp">
              <div className="row">
                <div className="col-md-4 mb-20">
                  <div
                    className="pattern bg-img bg-repeat"
                    style={{
                      backgroundImage: `url(/assets/img/line-pattern.png)`,
                    }}
                  ></div>
                </div>
                <div className="col-md-8 wow fadeInUp" data-wow-delay=".3s">
                  <div className="img mb-20 wow imago">
                    <img src={aboutUs2Data.image1} alt="" loading="lazy" />
                  </div>
                </div>
                <div className="col-md-7 wow fadeInUp" data-wow-delay=".3s">
                  <div className="img wow imago">
                    <img src={aboutUs2Data.image2} alt="" loading="lazy" />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="years-exp">
                    <div className="exp-text">
                      <h2 className="custom-font">{aboutUs2Data.exp}</h2>
                      <h6>Years Of Experience</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .sub-title {
          display: inline-block;
          padding: 0 35px !important;
          position: relative;
          letter-spacing: 4px;
          text-transform: uppercase;
          font-weight: 500;
        }
        .sub-title:before,
        .sub-title:after {
          content: "";
          width: 25px;
          height: 1px;
          background: #B68C4A;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
        .exp-content {
          max-width: 620px;
        }
        .exp-content ul,
        .about-features {
          margin: 1.5rem 0 1.5rem;
          padding-left: 0;
        }
        .about-features {
          display: grid;
          gap: 1rem;
        }
        .feature-item {
          display: grid;
          grid-template-columns: max-content 1fr;
          gap: 1rem;
          align-items: flex-start;
          line-height: 1.8;
        }
        .feature-item strong {
          color: #111;
          display: block;
          min-width: 170px;
        }
        .about-text {
          line-height: 1.85;
          margin-bottom: 1.25rem;
          color: #444;
        }
        .img-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          align-items: end;
        }
        .img-grid .large {
          grid-row: span 2;
        }
        .img-grid .img {
          overflow: hidden;
          border-radius: 24px;
          min-height: 280px;
        }
        .img-grid .img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .years-exp {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.05);
          border-radius: 24px;
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100%;
        }
        .exp-text h2 {
          margin: 0;
          font-size: 3rem;
          line-height: 1;
        }
        .exp-text h6 {
          margin: 0.5rem 0 0;
          font-weight: 500;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .sub-title:before {
          left: 0;
        }
        .sub-title:after {
          right: 0;
        }
        @media screen and (max-width: 991px) {
          .about {
            padding: 60px 0;
          }
          .exp-content h2 {
            font-size: 32px !important;
          }
          .ab-exp {
            margin-top: 40px;
          }
        }
        @media screen and (max-width: 767px) {
          .exp-content h2 {
            font-size: 28px !important;
          }
          .sub-title {
            font-size: 12px !important;
            padding: 0 25px !important;
          }
          .sub-title:before, .sub-title:after {
            width: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutUs2;
