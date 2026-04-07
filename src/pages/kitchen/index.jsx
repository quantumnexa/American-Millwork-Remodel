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

const Kitchen = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout isKitchen={true}>
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
        <AboutUs8 />
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
          title="START YOUR KITCHEN TRANSFORMATION"
          text="Ready to design your dream kitchen? Whether you need a custom cabinetry package or a complete remodel quote, send us your project details and our experts will guide you through the process."
          btn1Text="Get Free Quote"
          btn2Text="Contact Our Designers"
        />
      </section>
    </LightLayout>
  );
};

export default Kitchen;
