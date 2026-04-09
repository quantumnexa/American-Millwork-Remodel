/* eslint-disable @next/next/no-img-element */
import React from "react";
import CabinetHero from "../../components/Cabinet/Hero";
import AboutUs2 from "../../components/Cabinet/About-Us2";
import Process from "../../components/Cabinet/Process";
import LightLayout from "../../layouts/light";
import Services3 from "../../components/Cabinet/Services3";
import Services5Light from "../../components/Cabinet/Services5-Light";
import AboutUs8 from "../../components/Cabinet/About-Us8";
import Skills2 from "../../components/Cabinet/Skills2";
import NextProject from "../../components/Cabinet/Next-Project";
import CabinetBrands from "../../components/Cabinet/Brands";
import CabinetVideoReels from "../../components/Cabinet/VideoReels";

const Cabinet = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (  
    <LightLayout isKitchen={true}>
      <section id="home">
        <CabinetHero />
      </section>
      <CabinetBrands />
      <section id="reels">
        <CabinetVideoReels />
      </section>
      <div id="about" className="bg-white">
        <AboutUs2 />
        {/* <Services3 /> */}
      </div>
      <div id="why-us" className="bg-gray">
        <AboutUs8
          subTitle="WHY CHOOSE US"
          title="Built for Homeowners Who Want Flexibility, Speed, and Quality"
          points={[
            { icon: "flaticon-kitchen-1", text: "Ready-to-install cabinet options available" },
            { icon: "flaticon-home-1", text: "Fully customizable designs to match your space" },
            { icon: "flaticon-computer", text: "Modular system for easy upgrades and adjustments" },
            { icon: "flaticon-sketch", text: "Premium materials without the premium wait time" },
            { icon: "flaticon-plan", text: "Expert guidance from design to installation" },
          ]}
        />
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
          title="UPGRADE YOUR CABINETS,YOUR WAY"
          text="Need something quick? Go with stock. Want something unique? Customize it. Either way, you get cabinets that fit your life,not the other way around."
          btn1Text="Get Free Quote"
          btn2Text="Talk to a Designer"
        />
      </section>
    </LightLayout>
  );
};

export default Cabinet;