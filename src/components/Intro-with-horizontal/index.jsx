import React from "react";
import introData from "../../data/Intro-with-horizontal.json";
import Split from "../Split";
import Link from "next/link";

const IntroWithHorizontal = () => {
  const slide = introData[0]; // Just use the first slide data since it's no longer a slider

  return (
    <header className="slider">
      <div className="parallax-slider" style={{ height: '100vh' }}>
        <div
          className="bg-img valign h-100"
          style={{ backgroundImage: `url(${slide.image})` }}
          data-overlay-dark="6"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="caption hmone mt-100">
                  <h5 className="thin text-highlight" style={{ opacity: 1, transform: 'none', color: '#B68C4A', letterSpacing: '4px', fontWeight: '500' }}>{slide.title.first}</h5>
                  <div className="custom-font">
                    <h1 className="words chars splitting" style={{ opacity: 1, visibility: 'visible', whiteSpace: 'nowrap' }}>
                      <Link href="#">{slide.title.second}</Link>
                    </h1>
                  </div>
                  {slide?.content && (
                    <p className="mt-10" style={{ opacity: 1, transform: 'none' }}>
                      {slide.content.first} <br />
                      {slide.content.second}
                    </p>
                  )}
                  <Link href="/about">
                    <a className="btn-curve btn-color mt-30" style={{ opacity: 1, transform: 'none' }}>
                      <span>Find out more</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default IntroWithHorizontal;
