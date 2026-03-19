/* eslint-disable @next/next/no-img-element */
import React from "react";
import IntroWithVertical from "../../components/Intro-with-vertical";
import LightLayout from "../../layouts/light";
import AboutUs8 from "../../components/About-Us8";
import NextProject from "../../components/Next-Project";

const Services2Page = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);

  return (
    <LightLayout>
      <IntroWithVertical 
        customData={[{
          id: 1,
          title: {
            first: "RESIDENTIAL",
            second: "REMODELING"
          },
          content: {
            first: "Material quotes and finish coordination for kitchen remodels, bathroom upgrades, flooring, and interior finish improvements."
          },
          image: "/assets/img/02.jpg"
        }]}
      />

      <div className="bg-white pt-80">
        <AboutUs8 
          subTitle="KITCHEN"
          title="Kitchen Remodeling"
          text="We provide premium materials and coordination for complete kitchen remodeling projects."
          imageLeft={true}
          image1="/assets/img/ab1.jpg"
          image2="/assets/img/ab2.jpg"
          points={[
            { icon: "flaticon-kitchen-1", text: "Kitchen cabinets" },
            { icon: "flaticon-kitchen-2", text: "Countertops" },
            { icon: "flaticon-interior-design", text: "Backsplash coordination" },
            { icon: "flaticon-furniture", text: "Kitchen trim & finishes" },
            { icon: "flaticon-house-plan", text: "Kitchen flooring upgrades" }
          ]}
        />
      </div>

      <div className="bg-gray">
        <AboutUs8 
          subTitle="BATHROOM"
          title="Bathroom Remodeling"
          text="Transform your bathroom with our high-quality vanities, cabinets, and material packages."
          imageLeft={false}
          image1="/assets/img/03.jpg"
          image2="/assets/img/04.jpg"
          points={[
            { icon: "flaticon-renovation", text: "Bathroom vanities" },
            { icon: "flaticon-furniture", text: "Storage cabinets" },
            { icon: "flaticon-interior-design", text: "Tile coordination" },
            { icon: "flaticon-house-plan", text: "Bathroom trim and finishes" },
            { icon: "flaticon-sketch", text: "Bathroom material packages" }
          ]}
        />
      </div>

      <div className="bg-white">
        <AboutUs8 
          subTitle="FLOORING"
          title="Flooring & Interior Finishes"
          text="Upgrade your home's interior with our extensive flooring options and finish carpentry packages."
          imageLeft={true}
          image1="/assets/img/1.jpg"
          image2="/assets/img/2.jpg"
          points={[
            { icon: "flaticon-house-plan", text: "Luxury vinyl plank flooring" },
            { icon: "flaticon-house-plan", text: "Engineered wood flooring" },
            { icon: "flaticon-interior-design", text: "Tile flooring coordination" },
            { icon: "flaticon-furniture", text: "Trim upgrades" },
            { icon: "flaticon-living-room", text: "Finish carpentry packages" }
          ]}
        />
      </div>

      <NextProject 
        title="START YOUR RESIDENTIAL PROJECT"
        text="Send your project information and our team will guide you to the right service path."
        btn1Text="Get Quote"
        btn2Text="Submit Project"
      />
    </LightLayout>
  );
};

export default Services2Page;
