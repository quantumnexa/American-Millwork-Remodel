import React, { useState } from "react";
import Link from "next/link";

const Services5Light = ({
  commercialDataOverride,
  residentialDataOverride
}) => {
  const [activeTab, setActiveTab] = useState("commercial");

  const defaultCommercialData = {
    subtitle: "Commercial Millwork Focus",
    title: "25+ Years of Custom Millwork Expertise",
    text: "With 25 years of experience, we specialize in providing custom millwork for hotel lobbies, restaurants, medical offices, medical buildings, clinics, and all types of millwork projects.",
    items: [
      { icon: "flaticon-kitchen-1", title: "Restaurants" },
      { icon: "flaticon-home-1", title: "Lobbies" },
      { icon: "flaticon-desk-lamp", title: "Reception desks" },
      { icon: "flaticon-living-room", title: "Franchise interiors" },
      { icon: "flaticon-furniture", title: "Retail display millwork" },
      { icon: "flaticon-interior-design", title: "Wall paneling" },
      { icon: "flaticon-house-plan", title: "Decorative ceiling features" },
      { icon: "flaticon-sofa-1", title: "Banquette seating" },
      { icon: "flaticon-kitchen-2", title: "Custom counters" },
      { icon: "flaticon-computer", title: "Office feature walls" },
    ],
  };

  const defaultResidentialData = {
    subtitle: "Residential Remodel Focus",
    title: "Remodeling and New Construction Made Simple.",
    text: "For homeowners and property owners, we make the quoting process easier. Clients can submit photos, measurements, and videos or walk through the space live online. Our team can review the layout, prepare a material quote, and help coordinate local installation options.",
    keyMessage: "You do not need to start with a long in-person process to get real pricing. We can begin online.",
    items: [
  
  { icon: "flaticon-kitchen", title: "• Custom Ready-to-Assemble Kitchen Cabinets" },
  { icon: "flaticon-renovation", title: "• Custom Ready-to-Assemble Bathroom Vanities" },
  { icon: "flaticon-house-plan", title: "• Complete Flooring Solutions" },
  { icon: "flaticon-kitchen-1", title: "• Shower Walls • Kitchen Backsplashes • Countertops" },
  { icon: "flaticon-living-room", title: "• TV Feature Walls • Media Units" },
  { icon: "flaticon-home", title: "• Accent Walls • Built-In Closet Solutions" },
  { icon: "flaticon-sofa", title: "• Interior Trim Work • Crown Molding • Baseboards" },
  { icon: "flaticon-sofa-1", title: "• Exterior Structures • Gazebos • Outdoor Features • Custom Carpentry" },
  { icon: "flaticon-desk-lamp", title: "• Material Packages • In-House & Outsourced Options" },
  { icon: "flaticon-plan", title: "• Free Floor Plans • Layout Planning" },
  { icon: "flaticon-computer", title: "• Remote Consultations • Zoom • Google Meet" },
  { icon: "flaticon-home-1", title: "• Modern Home Upgrades • Built-Ins • Renovation Solutions" },
  { icon: "flaticon-living-room", title: "• Finish Carpentry • Skilled In-House Team" },
  { icon: "flaticon-interior-design", title: "• Expert Design Assistance • No Cost" },
  { icon: "flaticon-plan", title: "• Fast Quotes • Quick Project Turnaround" }  

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
              <h6 className="sub-title main-color mb-10 ls10 wow fadeInDown" data-wow-delay=".3s" style={{ color: '#B68C4A' }}>
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
          <div className="col-lg-12 col-md-12">
            <div className="row wow fadeInUp">
              {currentData.items.map((item, index) => {
                // Calculate how many items per row based on total items
                // If 8 items, we want 4 per row (col-lg-3)
                // If 10 items, we want 5 per row (col-lg-2-4)
                const itemsCount = currentData.items.length;
                const colClass = itemsCount === 8 ? "col-lg-3" : "col-lg-2-4";
                const isLastInRow = (index + 1) % (itemsCount === 8 ? 4 : 5) === 0;

                return (
                  <div 
                    className={`${colClass} col-md-4 col-sm-6 item-bx light ${isLastInRow ? 'last-item' : ''}`} 
                    key={index}
                  >
                    <span className={`icon ${item.icon}`}></span>
                    <h6 className="mb-20" dangerouslySetInnerHTML={{__html: item.title.replace(/•/g, '<br />•')}} ></h6>
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
    </section>
  );
};

export default Services5Light;
