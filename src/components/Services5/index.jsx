import React, { useState } from "react";
import Link from "next/link";

const Services5 = () => {
  const [activeTab, setActiveTab] = useState("commercial");

  const commercialData = {
    subtitle: "Commercial Millwork Focus",
    title: "Commercial Millwork For Interiors That Need To Impress",
    text: "We focus heavily on custom millwork and finish carpentry for commercial projects including restaurants, lobbies, retail spaces, office interiors, hospitality spaces, and franchise build-outs. We can also provide shop drawings and scope coordination for production and installation.",
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

  const residentialData = {
    subtitle: "Residential Remodel Focus",
    title: "Kitchen, Bathroom And Flooring Remodels Made Simple",
    text: "For homeowners and property owners, we make the quoting process easier. Clients can submit photos, measurements, and videos or walk through the space live online. Our team can review the layout, prepare a material quote, and help coordinate local installation options.",
    keyMessage: "You do not need to start with a long in-person process to get real pricing. We can begin online.",
    items: [
      { icon: "flaticon-kitchen", title: "Kitchen Cabinets" },
      { icon: "flaticon-renovation", title: "Bathroom Vanities" },
      { icon: "flaticon-house-plan", title: "Flooring Solutions" },
      { icon: "flaticon-interior-design", title: "Tile & Backsplash" },
      { icon: "flaticon-furniture", title: "Interior Trim" },
      { icon: "flaticon-sketch", title: "Material Packages" },
      { icon: "flaticon-plan", title: "Layout Planning" },
      { icon: "flaticon-computer", title: "Remote Consultations" },
      { icon: "flaticon-home-1", title: "Modern Upgrades" },
      { icon: "flaticon-living-room", title: "Finish Carpentry" },
    ],
  };

  const currentData = activeTab === "commercial" ? commercialData : residentialData;

  return (
    <section className="services-col section-padding bg-dark-section">
      <div className="container-fluid padding5">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center mb-40">
            <div className="tab-buttons">
              <button
                className={`tab-btn ${activeTab === "commercial" ? "active" : ""}`}
                onClick={() => setActiveTab("commercial")}
                style={{ position: 'relative', zIndex: 999 }}
              >
                Commercial
              </button>
              <button
                className={`tab-btn ${activeTab === "residential" ? "active" : ""}`}
                onClick={() => setActiveTab("residential")}
                style={{ position: 'relative', zIndex: 999 }}
              >
                Residential
              </button>
            </div>
          </div>
        </div>
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <h6 className="custom-font wow fadeInDown" data-wow-delay=".3s">
                {currentData.subtitle}
              </h6>
              <h2 className="mb-20 playfont wow flipInX" data-wow-delay=".5s">
                {currentData.title}
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".7s">
                {currentData.text}
              </p>
              {currentData.keyMessage && (
                <p className="mt-20 highlight-text wow fadeInUp" data-wow-delay=".8s" style={{color: '#B68C4A', fontWeight: '500'}}>
                  {currentData.keyMessage}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="row bord-box wow fadeInUp">
              {currentData.items.map((item, index) => (
                <div className="col-lg-2-4 col-md-4 col-sm-6 item-bx" key={index}>
                  <span className={`icon ${item.icon}`}></span>
                  <h6 className="mb-20">{item.title}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row mt-40">
          <div className="col-lg-12 text-center">
            <Link href="/contact">
              <a className="btn-curve btn-color wow fadeInUp" data-wow-delay=".5s">
                <span>Get My Quote</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services5;
