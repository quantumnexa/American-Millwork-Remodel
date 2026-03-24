/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

export const WorkTwoColumn = ({ lightTheme = false }) => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className={`works filter-img section-padding ${lightTheme ? 'bg-light-section' : ''}`}>
        <div className="container">
          <div className="row gallery">
            <div className="col-lg-6 items mt-0 interior theaters residential">
              <div className="section-head mb-0">
                <h3 className="playfont" style={{ fontSize: '40px', color: '#111' }}>Works</h3>

                <div className="filtering mt-30">
                  <div className="filter">
                    <span data-filter="*" className="active">
                      All
                    </span>
                    <span data-filter=".interior">Kitchen</span>
                    <span data-filter=".theaters">Bathroom</span>
                    <span data-filter=".residential">Commercial</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items theaters">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/2.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items residential interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/1.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/5.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items residential">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/3.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items theaters">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/4.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
