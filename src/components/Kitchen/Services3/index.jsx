import React from "react";
import services3Data from "../../../data/services3.json";
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
                <h6 className="sub-title main-color mb-10 ls10 wow fadeInDown" data-wow-delay=".3s" style={{ color: '#B68C4A', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: '500', paddingLeft: 0 }}>
                  KITCHEN SOLUTIONS
                </h6>
                <h2 className="mb-20 playfont wow flipInX" data-wow-delay=".5s">
                    Complete <span className="text-highlight">Remodeling</span> & Custom <span className="text-highlight">Cabinetry</span> for Modern <span className="text-highlight">Homes</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".7s">
                  From custom kitchen island designs to luxury countertop finishes, we provide a curated selection of materials and technical planning to ensure your kitchen remodel is completed on schedule and to the highest standards.
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
              <Link href={`/services${index+1}`}>
                <a className="service-card-link" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                  <div
                    className="item-bx wow fadeInUp"
                    data-wow-delay={index == 0 ? ".3s" : index == 1 ? ".5s" : ".7s"}
                    style={{ backgroundColor: '#f8f4f3', border: 'none' }}
                  >
                    <span className={item.icon}></span>
                    <h6 className="mb-20">{item.title}</h6>
                    <p>{item.content}</p>
                    <span className={`more ${!grid ? "custom-font" : ""} mt-30`}>
                      Read More
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          ))}
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
      `}</style>
    </section>
  );
};

export default Services3;
