import React, { useState } from "react";
import Link from "next/link";

const Services5Light = ({
  commercialDataOverride,
  residentialDataOverride
}) => {
  const [activeTab, setActiveTab] = useState("commercial");

  const defaultCommercialData = {
    subtitle: "Modern Kitchen Designs",
    title: "Innovative Kitchen Layouts Built For Performance",
    text: "We design and supply high-performance kitchen systems for both high-end residential homes and commercial hospitality spaces. Our focus is on maximizing space, improving workflow, and using durable, premium materials that stand the test of time.",
    items: [
      { icon: "flaticon-kitchen-1", title: "Custom Islands" },
      { icon: "flaticon-home-1", title: "Smart Storage" },
      { icon: "flaticon-desk-lamp", title: "Task Lighting" },
      { icon: "flaticon-living-room", title: "Open Concepts" },
      { icon: "flaticon-furniture", title: "Luxury Cabinets" },
      { icon: "flaticon-interior-design", title: "Modern Backsplash" },
      { icon: "flaticon-house-plan", title: "Pantry Systems" },
      { icon: "flaticon-sofa-1", title: "Breakfast Nooks" },
      { icon: "flaticon-kitchen-2", title: "Premium Counters" },
      { icon: "flaticon-computer", title: "3D Visualizations" },
    ],
  };

  const defaultResidentialData = {
    subtitle: "Kitchen Remodeling Process",
    title: "Your Dream Kitchen Remodel, Simplified and Coordinated",
    text: "Remodeling your kitchen doesn't have to be overwhelming. We provide a streamlined material selection and quoting process. From the first video consultation to the final delivery of your custom cabinetry, we coordinate every detail so you don't have to.",
    keyMessage: "Get an accurate quote for your kitchen project without the long in-person meetings.",
    items: [
      { icon: "flaticon-kitchen", title: "Base Cabinets" },
      { icon: "flaticon-renovation", title: "Wall Units" },
      { icon: "flaticon-house-plan", title: "Natural Stone" },
      { icon: "flaticon-interior-design", title: "Quartz Finishes" },
      { icon: "flaticon-furniture", title: "Hardware Selection" },
      { icon: "flaticon-sketch", title: "Detailed Plans" },
      { icon: "flaticon-plan", title: "Space Optimization" },
      { icon: "flaticon-computer", title: "Remote Planning" },
      { icon: "flaticon-home-1", title: "Style Upgrades" },
      { icon: "flaticon-living-room", title: "Finish Detailing" },
    ],
  };

  const commercialData = commercialDataOverride || defaultCommercialData;
  const residentialData = residentialDataOverride || defaultResidentialData;

  const currentData = activeTab === "commercial" ? commercialData : residentialData;

  return (
    <section className="services-col section-padding bg-light-section">
      <div className="container-fluid padding5">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center mb-60">
            <div className="tab-buttons" style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
              <div
                className={`btn-curve ${activeTab === "commercial" ? "btn-color" : "btn-lit"}`}
                onClick={() => setActiveTab("commercial")}
                style={{ position: 'relative', zIndex: 999, cursor: 'pointer', margin: 0 }}
              >
                <span>Commercial</span>
              </div>
              <div
                className={`btn-curve ${activeTab === "residential" ? "btn-color" : "btn-lit"}`}
                onClick={() => setActiveTab("residential")}
                style={{ position: 'relative', zIndex: 999, cursor: 'pointer', margin: 0 }}
              >
                <span>Residential</span>
              </div>
            </div>
          </div>
        </div>
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <h6 className="sub-title main-color mb-10 ls10 wow fadeInDown" data-wow-delay=".3s" style={{ color: '#B68C4A', paddingLeft: 0 }}>
                {currentData.subtitle}
              </h6>
              <h2 className="mb-20 playfont wow flipInX" data-wow-delay=".5s" style={{ fontSize: '40px' }}>
                {currentData.title}
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".7s" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                {currentData.text}
              </p>
              {currentData.keyMessage && (
                <p className="mt-20 highlight-text wow fadeInUp" data-wow-delay=".8s" style={{color: '#B68C4A', fontWeight: '500', fontSize: '16px'}}>
                  {currentData.keyMessage}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="row wow fadeInUp">
              {currentData.items.map((item, index) => {
                const itemsCount = currentData.items.length;
                const colClass = itemsCount === 8 ? "col-lg-3" : "col-lg-2-4";
                const isLastInRow = (index + 1) % (itemsCount === 8 ? 4 : 5) === 0;

                return (
                  <div 
                    className={`${colClass} col-md-4 col-sm-6 item-bx light ${isLastInRow ? 'last-item' : ''}`} 
                    key={index}
                  >
                    <span className={`icon ${item.icon}`}></span>
                    <h6 className="mb-20">{item.title}</h6>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="row mt-40">
          <div className="col-lg-12 text-center">
            <Link href="/contact">
              <a className="btn-curve btn-color wow fadeInUp" data-wow-delay=".5s">
                <span>Get Free Quote</span>
              </a>
            </Link>
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
        .tab-buttons .btn-curve {
          margin: 0 !important;
        }
      `}</style>
    </section>
  );
};

export default Services5Light;
