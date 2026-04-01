/* eslint-disable @next/next/no-img-element */
import React from "react";

const AboutUs8 = (props) => {
  return (
    <section className="about-us-8 section-padding bg-light-section">
      <div className="container-fluid padding5">
        <div className="row">
          <div className="col-lg-6 valign order2 order-lg-1">
            <div className="content-side pr-60">
              <div className="exp-content wow fadeInUp" data-wow-delay=".3s">
                <h6 className="sub-title main-color mb-10 ls10" style={{ color: '#B68C4A', paddingLeft: 0 }}>
                  {props.subTitle || "Trust Section"}
                </h6>
                <h2 className="mb-40 playfont">
                  {props.title || <>Built for homeowners who want <span className="text-highlight">Detail</span>, <span className="text-highlight">Speed</span> and <span className="text-highlight">Quality</span></>}
                </h2>
                {props.text && (
                  <p className="mb-40" style={{ lineHeight: '1.8', fontSize: '16px' }}>
                    {props.text}
                  </p>
                )}
              </div>
              <div className="row points-grid">
                {(props.points || [
                  { icon: "flaticon-kitchen-1", text: "Kitchen design focus" },
                  { icon: "flaticon-home-1", text: "Premium cabinet supply" },
                  { icon: "flaticon-computer", text: "Remote quoting system" },
                  { icon: "flaticon-sketch", text: "Detailed kitchen plans" },
                  { icon: "flaticon-plan", text: "Nationwide cabinet delivery" },
                  { icon: "flaticon-renovation", text: "Local install coordination" },
                ]).map((point, index) => (
                  <div className="col-md-6 mb-30 wow fadeInUp" data-wow-delay={`${0.1 * (index + 1)}s`} key={index}>
                    <div className="point-item valign" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <div className="icon-wrapper">
                        <span className={`icon main-color fz-30 ${point.icon}`}></span>
                      </div>
                      <div className="text">
                        <h6 className="fz-14 fw-500">{point.text}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 order1 order-lg-2">
            <div className="img-collage wow fadeInUp" data-wow-delay=".3s">
              <div className="row">
                <div className="col-md-6">
                  <div className="img mb-30">
                    <img src={(props.image1 || "/assets/img/new/7.png")} alt="" style={{ width: '100%', borderRadius: '10px', height: '400px', objectFit: 'cover' }} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img mb-30" style={{ marginTop: '50px' }}>
                    <img src={(props.image2 || "/assets/img/new/8.png")} alt="" style={{ width: '100%', borderRadius: '10px', height: '400px', objectFit: 'cover' }} />
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
          .about-us-8 {
            padding: 60px 0;
          }
          .content-side {
            padding-right: 0 !important;
            margin-top: 40px;
          }
          .exp-content h2 {
            font-size: 32px !important;
          }
          .img-collage {
            margin-bottom: 40px;
          }
          .img-collage .img {
            margin-top: 0 !important;
            height: 300px !important;
          }
          .img-collage .img img {
            height: 300px !important;
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

export default AboutUs8;
