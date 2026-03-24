/* eslint-disable @next/next/no-img-element */
import React from "react";
import LightLayout from "../../layouts/light";
import IntroWithVerticalTwo from "../../components/Intro-with-vertical-2";
import AboutUs8 from "../../components/About-Us8";
import NextProject from "../../components/Next-Project";

const MaterialsPage = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);

  return (
    <LightLayout>
      <IntroWithVerticalTwo
        customData={[
          {
            id: 1,
            title: { first: "EXPLORE", second: "MATERIAL OPTIONS" },
            content: {
              first:
                "Selecting the right materials is one of the most important steps in a successful remodeling or interior finish project.",
            },
            image: "/assets/img/hero/1.png",
          },
        ]}
      />

      <div className="bg-white pt-80">
        <AboutUs8
          subTitle="OPTIONS"
          title="Wood Finish Options"
          text="Discover a range of natural and manufactured wood finishes for millwork, cabinetry, and interior paneling."
          imageLeft={true}
          image1="/assets/img/new/7.png"
          image2="/assets/img/new/8.png"
          points={[
            { icon: "flaticon-interior-design", text: "White Oak" },
            { icon: "flaticon-interior-design", text: "Walnut" },
            { icon: "flaticon-interior-design", text: "Maple" },
            { icon: "flaticon-interior-design", text: "Cherry" },
            { icon: "flaticon-interior-design", text: "Painted Finishes" },
            { icon: "flaticon-interior-design", text: "Engineered Veneer Panels" },
          ]}
        />
      </div>

      <div className="bg-gray">
        <AboutUs8
          subTitle="SURFACES"
          title="Stone & Surface Options"
          text="Premium surfaces for kitchens, bathrooms, and commercial counters."
          imageLeft={false}
          image1="/assets/img/new/9.png"
          image2="/assets/img/new/10.png"
          points={[
            { icon: "flaticon-kitchen-2", text: "Quartz Surfaces" },
            { icon: "flaticon-kitchen-2", text: "Granite Stone" },
            { icon: "flaticon-kitchen-2", text: "Marble Stone" },
            { icon: "flaticon-kitchen-2", text: "Porcelain Slabs" },
            { icon: "flaticon-kitchen-2", text: "Solid Surface Materials" },
          ]}
        />
      </div>

      <div className="bg-white">
        <AboutUs8
          subTitle="FLOORING"
          title="Flooring Materials"
          text="Durable and design-forward flooring options for residential and commercial spaces."
          imageLeft={true}
          image1="/assets/img/new/11.png"
          image2="/assets/img/new/12.png"
          points={[
            { icon: "flaticon-house-plan", text: "Luxury Vinyl Plank" },
            { icon: "flaticon-house-plan", text: "Engineered Wood Flooring" },
            { icon: "flaticon-house-plan", text: "Tile Flooring" },
            { icon: "flaticon-house-plan", text: "Waterproof Flooring Systems" },
          ]}
        />
      </div>

      <NextProject
        title="SELECT YOUR MATERIALS"
        text="Request a material quote and our team will guide you through finish options and availability."
        btn1Text="Request Material Quote"
        btn2Text="Schedule Call"
      />
    </LightLayout>
  );
};

export default MaterialsPage;

