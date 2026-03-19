/* eslint-disable @next/next/no-img-element */
import React from "react";
import aboutUs2Data from "../../data/about-us2.json";
import Link from 'next/link'

const AboutUs2 = () => {
  return (
    <section className="about">
      <div className="container-fluid padding5">
        <div className="row">
          <div className="col-lg-6 valign">
            <div
              className="exp-content nopat wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h6 className="sub-title main-color mb-10 ls10" style={{ color: '#B68C4A', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: '500' }}>WHAT WE DO</h6>
              <h2 className="mb-20 playfont">
                One Platform For <span className="text-highlight">Millwork</span>, <span className="text-highlight">Remodeling</span> And <span className="text-highlight">Finishes</span>
              </h2>
              <p>
                A modern system for millwork, remodeling, and interior finishes. We combine commercial millwork expertise with residential material supply and remote project coordination to simplify the entire building and remodeling process.
              </p>
              {/* <ul>
                {aboutUs2Data.textList.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul> */}
              {/* <Link href="/about">
                <a className="btn-curve btn-color mt-30">
                  <span>Read More</span>
                </a>
              </Link> */}
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
    </section>
  );
};

export default AboutUs2;
