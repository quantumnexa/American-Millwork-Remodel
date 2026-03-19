/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs2 from "../../components/About-Us2";
import Services2 from "../../components/Services2";
import Portfolio2 from "../../components/Portfolio2";
import Testimonials1 from "../../components/Testimonials1";
import Team1 from "../../components/Team1";
import Blogs2 from "../../components/Blogs2";
import IntroWithVertical from "../../components/Intro-with-vertical";
import Process from "../../components/Process";
import Brands from "../../components/Brands";
import LightLayout from "../../layouts/light";
import Services3 from "../../components/Services3";
import Services5Light from "../../components/Services5-Light";
import AboutUs8 from "../../components/About-Us8";
import Skills2 from "../../components/Skills2";
import Contact from "../../components/Contact";

const Home1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout>
      <IntroWithVertical />
      <div className="bg-white">
        <AboutUs2 />
        <Services2 />
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
        <Services3 />
      </div>
      <div className="bg-gray">
        <Process />
      </div>
      <div className="bg-white">
        <Contact />
      </div>
    </LightLayout>
  );
};

export default Home1;
