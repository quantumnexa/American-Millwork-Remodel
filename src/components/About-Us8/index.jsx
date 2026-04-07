/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const AboutUs8 = ({
 subTitle = "Honest pricing with no hidden cost",
title = (
  <>
    Trusted craftsmanship for <span className="text-highlight">Cabinets</span>, <span className="text-highlight">Millwork</span>, and <span className="text-highlight">Custom Carpentry</span>
  </>
),
  text = "",
  points = [
    { icon: "flaticon-furniture", text: "Custom millwork focus" },
    { icon: "flaticon-home-1", text: "Commercial and residential capability" },
    { icon: "flaticon-computer", text: "Remote quoting system" },
    { icon: "flaticon-sketch", text: "Shop drawings available" },
    { icon: "flaticon-plan", text: "Nationwide material sales capability" },
    { icon: "flaticon-renovation", text: "Local install coordination when needed" },
  ],
  imageLeft = false,
  image1 = "/assets/img/new-images/trust-section/2.png",
  image2 = "/assets/img/new-images/trust-section/1.png",
  singleImage = false
}) => {

  return (
    <section className="about-us-8 section-padding bg-light-section">
      <div className="container-fluid padding5">
        <div className="row">
          {imageLeft ? (
            <>
              <div className="col-lg-6">
                <div className="img-collage wow fadeInUp" data-wow-delay=".3s">
                  {singleImage ? (
                    <div className="img" style={{ position: 'relative', width: '100%', height: '500px' }}>
                      <Image 
                        src={image1} 
                        alt="about" 
                        layout="fill"
                        objectFit="cover"
                        style={{ borderRadius: '10px' }}
                      />
                    </div>
                  ) : (
                    <div className="row">
                      <div className="col-md-6">
                        <div className="img mb-30" style={{ position: 'relative', width: '100%', height: '400px' }}>
                          <Image 
                            src={image1} 
                            alt="about" 
                            layout="fill"
                            objectFit="cover"
                            style={{ borderRadius: '10px' }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="img mb-30" style={{ marginTop: '50px', position: 'relative', width: '100%', height: '400px' }}>
                          <Image 
                            src={image2} 
                            alt="about" 
                            layout="fill"
                            objectFit="cover"
                            style={{ borderRadius: '10px' }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-6 valign">
                <div className="content-side pl-60">
                  <div className="exp-content wow fadeInUp" data-wow-delay=".3s">
                    <h6 className="sub-title main-color mb-10 ls10">{subTitle}</h6>
                    <h2 className="mb-40 playfont">
                      {title}
                    </h2>
                    {text && (
                      <p className="mb-40" style={{ lineHeight: '1.8', fontSize: '16px' }}>
                        {text}
                      </p>
                    )}
                  </div>
                  <div className="row points-grid">
                    {points.map((point, index) => (
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
            </>
          ) : (
            <>
              <div className="col-lg-6 valign order2 order-lg-1">
                <div className="content-side pr-60">
                  <div className="exp-content wow fadeInUp" data-wow-delay=".3s">
                    <h6 className="sub-title main-color mb-10 ls10">{subTitle}</h6>
                    <h2 className="mb-40 playfont">
                      {title}
                    </h2>
                    {text && (
                      <p className="mb-40" style={{ lineHeight: '1.8', fontSize: '16px' }}>
                        {text}
                      </p>
                    )}
                  </div>
                  <div className="row points-grid">
                    {points.map((point, index) => (
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
                  {singleImage ? (
                    <div className="img" style={{ position: 'relative', width: '100%', height: '500px' }}>
                      <Image 
                        src={image1} 
                        alt="about" 
                        layout="fill"
                        objectFit="cover"
                        style={{ borderRadius: '10px' }}
                      />
                    </div>
                  ) : (
                    <div className="row">
                      <div className="col-md-6">
                        <div className="img mb-30" style={{ position: 'relative', width: '100%', height: '400px' }}>
                          <Image 
                            src={image1} 
                            alt="about" 
                            layout="fill"
                            objectFit="cover"
                            style={{ borderRadius: '10px' }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="img mb-30" style={{ marginTop: '50px', position: 'relative', width: '100%', height: '400px' }}>
                          <Image 
                            src={image2} 
                            alt="about" 
                            layout="fill"
                            objectFit="cover"
                            style={{ borderRadius: '10px' }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs8;
