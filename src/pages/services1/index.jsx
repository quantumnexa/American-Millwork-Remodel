/* eslint-disable @next/next/no-img-element */
import React from "react";
import IntroWithVertical from "../../components/Intro-with-vertical-2";
import LightLayout from "../../layouts/light";
import AboutUs8 from "../../components/About-Us8";
import NextProject from "../../components/Next-Project";

const Services1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);

  return (
    <LightLayout>
      <IntroWithVertical 
        customData={[{
          id: 1,
          title: {
            first: "COMMERCIAL",
            second: "MILLWORK"
          },
          content: {
            first: "Custom millwork, restaurant interiors, franchise finishes, retail displays, reception desks, feature walls, and finish carpentry for commercial spaces."
          },
          image: "/assets/img/hero/1.png"
        }]}
      />

      <div className="bg-white pt-80">
        <AboutUs8 
          subTitle="SERVICE"
          title="Core Services"
          text="We provide comprehensive commercial millwork and interior finish services designed to meet the demands of B2B projects."
          imageLeft={true}
          image1="/assets/img/new/1.png"
          image2="/assets/img/new/2.png"
          points={[
            { icon: "flaticon-furniture", text: "Custom commercial millwork" },
            { icon: "flaticon-home-1", text: "Restaurant interiors & finish carpentry" },
            { icon: "flaticon-living-room", text: "Franchise interior finish packages" },
            { icon: "flaticon-desk-lamp", text: "Lobby & reception millwork" },
            { icon: "flaticon-interior-design", text: "Retail display millwork" },
            { icon: "flaticon-house-plan", text: "Office feature walls & paneling" }
          ]}
        />
      </div>

      <div className="bg-gray">
        <AboutUs8 
          subTitle="DETAILS"
          title="Interior Features & Elements"
          text="Our team specializes in fabricating and coordinating specific interior features to elevate commercial environments."
          imageLeft={false}
          image1="/assets/img/new/3.png"
          image2="/assets/img/new/4.png"
          points={[
            { icon: "flaticon-interior-design", text: "Decorative wall paneling" },
            { icon: "flaticon-house-plan", text: "Decorative ceiling features" },
            { icon: "flaticon-sofa-1", text: "Banquette seating" },
            { icon: "flaticon-kitchen-2", text: "Custom counters & host stands" },
            { icon: "flaticon-furniture", text: "Custom shelving & retail displays" },
            { icon: "flaticon-sketch", text: "Trim & finish carpentry scopes" }
          ]}
        />
      </div>

      <div className="bg-white">
        <AboutUs8 
          subTitle="APPLICATIONS"
          title="Typical Applications"
          text="We deliver high-quality interior finishes for a wide variety of commercial applications."
          imageLeft={true}
          image1="/assets/img/new/5.png"
          image2="/assets/img/new/6.png"
          points={[
            { icon: "flaticon-kitchen-1", text: "Restaurants" },
            { icon: "flaticon-living-room", text: "Franchise locations" },
            { icon: "flaticon-furniture", text: "Retail stores" },
            { icon: "flaticon-computer", text: "Office interiors" },
            { icon: "flaticon-home-1", text: "Hospitality spaces" },
            { icon: "flaticon-desk-lamp", text: "Lobby and reception areas" }
          ]}
        />
      </div>

      <NextProject 
        title="START YOUR COMMERCIAL PROJECT"
        text="Send your project information and our team will guide you to the right service path."
        btn1Text="Get Quote"
        btn2Text="Submit Project"
      />
    </LightLayout>
  );
};

export default Services1;
