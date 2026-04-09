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
              <h6 className="sub-title main-color mb-10 ls10" style={{ color: '#B68C4A' }}>SMART BUILDOUT SOLUTIONS</h6>
              <h2 className="mb-20 playfont">
                Built Around Your Space &amp; <span className="text-highlight">Goals</span>
              </h2>
              <p>
                Whether you&apos;re launching a new location or upgrading an existing space, we deliver interior buildouts that align with your vision, workflow, and brand identity.
              </p>
              <div className="solutions-list mt-40">
                <div className="solution-item mb-20">
                  <h5 className="fw-600">Commercial Buildouts:</h5>
                  <p>Offices, retail stores, and hospitality spaces designed for efficiency, customer experience, and long-term durability.</p>
                </div>
                <div className="solution-item mb-20">
                  <h5 className="fw-600">Residential Interior Upgrades:</h5>
                  <p>Modern interiors tailored for comfort, functionality, and style—perfect for remodels and renovations.</p>
                </div>
                <div className="solution-item mb-20">
                  <h5 className="fw-600">Custom Design & Layouts:</h5>
                  <p>Optimized floor plans and finishes that maximize space, improve flow, and elevate the overall look.</p>
                </div>
              </div>
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
