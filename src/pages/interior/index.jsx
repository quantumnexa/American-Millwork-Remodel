/* eslint-disable @next/next/no-img-element */
import React from "react";
import KitchenHero from "../../components/Kitchen/Hero";
import AboutUs2 from "../../components/Kitchen/About-Us2";
import Process from "../../components/Kitchen/Process";
import LightLayout from "../../layouts/light";
import Services3 from "../../components/Kitchen/Services3";
import Services5Light from "../../components/Kitchen/Services5-Light";
import AboutUs8 from "../../components/Kitchen/About-Us8";
import Skills2 from "../../components/Kitchen/Skills2";
import NextProject from "../../components/Kitchen/Next-Project";
import KitchenBrands from "../../components/Kitchen/Brands";
import KitchenVideoReels from "../../components/Kitchen/VideoReels";

const InteriorBuildOuts = () => {
  const whyChooseUsPoints = [
    { icon: "flaticon-kitchen-1", text: "End-to-end project management from design to completion" },
    { icon: "flaticon-home-1", text: "Custom layouts that maximize space and functionality" },
    { icon: "flaticon-computer", text: "High-quality materials and expert craftsmanship" },
    { icon: "flaticon-sketch", text: "On-time delivery with clear communication" },
    { icon: "flaticon-plan", text: "Solutions tailored to your business or lifestyle needs" },
  ];

  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);

  return (
    <LightLayout>
      <section id="home">
        <KitchenHero />
      </section>
      <KitchenBrands />
      <section id="reels">
        <KitchenVideoReels />
      </section>
      <div id="about" className="bg-white">
        <AboutUs2 />
        {/* <Services3 /> */}
      </div>
      <div id="why-us" className="bg-gray">
        <AboutUs8 subTitle="WHY CHOOSE US" title="Built for Clients Who Expect More" points={whyChooseUsPoints} />
      </div>
      {/* <div className="bg-gray">
        <Services5Light />
      </div>
      <div className="bg-white">
        <AboutUs8 />
      </div>
      <div className="bg-gray">
        <Skills2 />
      </div> */}
      <div id="process" className="bg-white">
        <Process />
      </div>
      <section id="contact">
        <NextProject
          title="START YOUR INTERIOR BUILD-OUT TRANSFORMATION"
          text="Starting from scratch or upgrading your space? We make interior buildouts simple, efficient, and built around your goals—so you can focus on what matters most."
          btn1Text="GET FREE QUOTE"
          btn2Text="TALK TO A DESIGNER"
        />
      </section>
    </LightLayout>
  );
};

export default InteriorBuildOuts;
