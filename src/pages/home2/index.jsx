/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs2 from "../../components/About-Us2";
import IntroWithVertical from "../../components/Intro-with-vertical";
import Process from "../../components/Process";
import LightLayout from "../../layouts/light";
import Services3 from "../../components/Services3";
import Services5Light from "../../components/Services5-Light";
import AboutUs8 from "../../components/About-Us8";
import Skills2 from "../../components/Skills2";
import NextProject from "../../components/Next-Project";


const Home1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout>
      <IntroWithVertical />
      <div className="bg-white">
        <AboutUs2 />
        <Services3 />
      </div>
      <div className="bg-gray">
        <Services5Light />
      </div>
      <div className="bg-white">
        <AboutUs8 />
      </div>
      <div className="bg-gray">
        <Skills2 />
      </div>
      <div className="bg-white">
        <Process />
      </div>
      {/* <div className="bg-white">
        <Contact />
      </div> */}
      <NextProject 
        title="START YOUR PROJECT TODAY"
        text="Whether you need a restaurant millwork package, a lobby feature wall, or a kitchen and bath material quote, send your project and our team will guide you to the next step."
        btn1Text="Submit Project"
        btn2Text="Get Online Quote"
      />
    </LightLayout>
  );
};

export default Home1;
