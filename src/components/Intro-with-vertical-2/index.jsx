import React from "react";
import intro2Data from "../../data/Intro2.json";
import Split from "../Split";
import Link from "next/link";

const IntroWithVerticalTwo = ({ customData }) => {
  const sliderData = customData || intro2Data;
  const slide = sliderData[0];

  return (
    <>
      <header className="slid-half">
        <div
          id="js-cta-slider"
          className="cta__slider-wrapper nofull swiper-container"
        >
          <div className="swiper-wrapper cta__slider">
            <div className="cta__slider-item swiper-slide swiper-slide-active swiper-slide-visible">
              <div className="media-wrapper slide-inner valign">
                <div
                  className="bg-img"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  data-overlay-dark="5"
                ></div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                      <div className="caption" style={{ opacity: 1, visibility: 'visible', transform: 'none' }}>
                        <span className="top-corn"></span>
                        <span className="bottom-corn"></span>
                        <div className="custom-font">
                          <h5 className="thin custom-font text-highlight" style={{ color: '#B68C4A', letterSpacing: '4px', fontWeight: '500' }}>
                            {slide.title.first}
                          </h5>
                          <Split>
                            <h1
                              data-splitting
                              className="words chars splitting"
                              style={{ whiteSpace: 'nowrap', fontSize: '55px' }}
                            >
                              <Link href="#">{slide.title.second}</Link>
                            </h1>
                          </Split>
                        </div>
                        {slide?.content && (
                          <p className="mt-10">
                            {slide.content.first} <br />
                            {slide.content.second}
                          </p>
                        )}
                        {customData ? (
                          <Link href="/about">
                            <a className="btn-curve btn-color mt-30">
                              <span>Read More</span>
                            </a>
                          </Link>
                        ) : (
                          <div className="buttons-row valign" style={{display: 'flex', gap: '30px'}}>
                            <Link href="/work1">
                              <a className="btn-curve btn-color mt-30">
                                <span>Get My Quote</span>
                              </a>
                            </Link>
                            <Link href="/contact">
                              <a className="btn-curve btn-lit mt-30">
                                <span>Contact Us</span>
                              </a>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
       
      </header>
    </>
  );
};

export default IntroWithVerticalTwo;
