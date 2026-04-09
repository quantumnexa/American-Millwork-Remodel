/* eslint-disable @next/next/no-img-element */
import React from "react";
import CountertopsHero from "../../components/Countertops/Hero";
import AboutUs2 from "../../components/Countertops/About-Us2";
import Process from "../../components/Countertops/Process";
import LightLayout from "../../layouts/light";
import Services3 from "../../components/Countertops/Services3";
import Services5Light from "../../components/Countertops/Services5-Light";
import AboutUs8 from "../../components/Countertops/About-Us8";
import Skills2 from "../../components/Countertops/Skills2";
import NextProject from "../../components/Countertops/Next-Project";
import CountertopsBrands from "../../components/Countertops/Brands";
import CountertopsVideoReels from "../../components/Countertops/VideoReels";

const Countertops = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (  
    <LightLayout isKitchen={true}>
      <section id="home">
        <CountertopsHero />
      </section>
      <CountertopsBrands />
      <section id="reels">
        <CountertopsVideoReels />
      </section>
      <div id="about" className="bg-white">
        <AboutUs2 />
        {/* <Services3 /> */}
      </div>
      <div id="why-us" className="bg-gray">
        <AboutUs8
          subTitle="WHY CHOOSE US"
          title="Built for Homeowners Who Want Quality Without Compromise"
          points={[
            { icon: "flaticon-kitchen-1", text: "Ready-to-install options for faster project timelines" },
            { icon: "flaticon-home-1", text: "Fully customizable designs to match your exact vision" },
            { icon: "flaticon-computer", text: "Durable, low-maintenance materials built for daily use" },
            { icon: "flaticon-sketch", text: "Precision installation for a flawless finish" },
            { icon: "flaticon-plan", text: "Expert support from selection to completion" },
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
          title="UPGRADE YOUR COUNTERTOPS,YOUR WAY"
          text="Need something quick? Go with stock. Want something unique? Customize it. Either way, you get countertops that fit your life,not the other way around."
          btn1Text="GET FREE QUOTE"
          btn2Text="TALK TO A DESIGNER"
        />
      </section>
    </LightLayout>
  );
};

export default Countertops;