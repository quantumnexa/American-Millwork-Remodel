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
    <LightLayout>
      <KitchenHero />
      <KitchenBrands />
      <KitchenVideoReels />
      <div className="bg-white">
        <AboutUs2 />
        {/* <Services3 /> */}
      </div>
      <div className="bg-gray">
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
      <div className="bg-white">
        <Process />
      </div>
      <NextProject
        title="START YOUR PROJECT TODAY"
        text="Whether you need a restaurant millwork package, a lobby feature wall, or a kitchen and bath material quote, send your project and our team will guide you to the next step."
        btn1Text="Submit Project"
        btn2Text="Get Online Quote"
      />
    </LightLayout>
  );
};

export default Kitchen;
