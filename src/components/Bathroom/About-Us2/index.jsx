/* eslint-disable @next/next/no-img-element */
import React from "react";
import aboutUs2Data from "../../../data/about-us2.json";
import Link from 'next/link'

const BathroomAboutUs2 = () => {
  return (
    <section className="about section-padding">
      <div className="container-fluid padding5">
        <div className="row">
          <div className="col-lg-6 valign">
            <div
              className="exp-content nopat wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h6 className="sub-title main-color mb-10 ls10" style={{ color: '#B68C4A' }}>ABOUT US</h6>
              <h2 className="mb-20 playfont">
                Luxury <span className="text-highlight">Bathroom Remodeling</span> and <span className="text-highlight">Spa Transformations</span>
              </h2>
              <p>
                We specialize in complete bathroom transformations, from high-end fixtures and vanities to custom tile work and walk-in showers. Our expert team ensures every detail is handled with precision, turning your vision of a perfect bathroom into reality.
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
                    <img src={aboutUs2Data.image1} alt="" />
                  </div>
                </div>
                <div className="col-md-7 wow fadeInUp" data-wow-delay=".3s">
                  <div className="img wow imago">
                    <img src={aboutUs2Data.image2} alt="" />
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

export default BathroomAboutUs2;
