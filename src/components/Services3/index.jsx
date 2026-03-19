import React from "react";
import services3Data from "../../data/services3.json";
import Link from "next/link";

const Services3 = ({ bigTitle, grid }) => {
  return (
    <section
      className={`${!grid ? "services" : "services-grid"} section-padding`}
    >
      <div className="container">
        {!bigTitle ? (
          <div className="section-head text-center">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <h6 className="sub-title main-color mb-10 ls10 wow fadeInDown" data-wow-delay=".3s" style={{ color: '#B68C4A', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: '500' }}>
                  OUR SERVICES
                </h6>
                <h2 className="mb-20 playfont wow flipInX" data-wow-delay=".5s">
                    Complete <span className="text-highlight">Millwork</span> & Finish Solutions for <span className="text-highlight">Commercial</span> and <span className="text-highlight">Residential</span> Projects
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".7s">
                  From custom Commercial interiors to Residential remodeling materials, we deliver precision-built Millwork, curated finish packages, and technical drawing support, all coordinated to keep your project on schedule and on spec.
                </p>
               
              </div>
            </div>
          </div>
        ) : (
          <div className="main-header text-center">
            <h3>Best Features.</h3>
            <div className="tex-bg">Services</div>
          </div>
        )}

        <div className="row">
          {services3Data.map((item, index) => (
            <div className="col-lg-4" key={item.id}>
              <div
                className="item-bx wow fadeInUp"
                data-wow-delay={index == 0 ? ".3s" : index == 1 ? ".5s" : ".7s"}
                style={{ backgroundColor: '#f8f4f3', border: 'none' }}
              >
                <span className={item.icon}></span>
                <h6 className="mb-20">{item.title}</h6>
                <p>{item.content}</p>
                <Link href="/about">
                  <a className={`more ${!grid ? "custom-font" : ""} mt-30`}>
                    Read More
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services3;
