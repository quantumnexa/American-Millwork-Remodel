/* eslint-disable @next/next/no-img-element */
import React from "react";

const Services6 = ({ subTitle, title, text, projectTypes = [] }) => {
  return (
    <section className="services-feat section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img md-mb50">
              <img src="/assets/img/feat.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="cont">
              {subTitle && <h6 className="sub-title main-color mb-10 ls10">{subTitle}</h6>}
              {title && <h2 className="mb-20 playfont" style={{ fontSize: '40px' }}>{title}</h2>}
              {text && <p className="mb-40" style={{ fontSize: '16px', lineHeight: '1.8' }}>{text}</p>}
              
              {projectTypes && projectTypes.length > 0 ? (
                <div className="row">
                  {projectTypes.map((pt, i) => (
                    <div className="col-md-6 mb-20" key={i}>
                      <div className="item d-flex align-items-center mb-0" style={{ padding: '15px 0' }}>
                        <span className={`icon ${pt.icon} text-highlight`} style={{ fontSize: '30px', marginRight: '15px' }}></span>
                        <h6 style={{ marginBottom: 0, fontWeight: 500, fontSize: '15px' }}>{pt.title}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="item">
                    <span className="icon flaticon-home-1"></span>
                    <div>
                      <h5>Architecture</h5>
                      <p>
                        At vero eos et accusamus et iusto odio dignis simos ducimus
                        qui blanditiis praesnti
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <span className="icon flaticon-living-room"></span>
                    <div>
                      <h5>Interior Design</h5>
                      <p>
                        At vero eos et accusamus et iusto odio dignis simos ducimus
                        qui blanditiis praesnti
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <span className="icon flaticon-interior-design"></span>
                    <div>
                      <h5>3D Modeling</h5>
                      <p>
                        At vero eos et accusamus et iusto odio dignis simos ducimus
                        qui blanditiis praesnti
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services6;