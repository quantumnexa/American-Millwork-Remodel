/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs2 from "../../components/About-Us2";
import Services2 from "../../components/Services2";
import dynamic from "next/dynamic";
const IntroWithVerticalTwo = dynamic(() => import("../../components/Intro-with-vertical-2"), { ssr: false });

import Process from "../../components/Process";
import LightLayout from "../../layouts/light";
import Services3 from "../../components/Services3";
import Services5Light from "../../components/Services5-Light";
import AboutUs8 from "../../components/About-Us8";
import Skills2 from "../../components/Skills2";
import Contact from "../../components/Contact";
import PageHeader from "../../components/Page-header";
import Team1 from "../../components/Team1";
import AboutUs5 from "../../components/About-Us5";
import Services6 from "../../components/Services6";
import NextProject from "../../components/Next-Project";
import { WorkTwoColumn } from "../../components/Work-Two-Column";

const Services = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout>
      <IntroWithVerticalTwo 
        customData={[{
          id: 1,
          title: {
            first: "ABOUT",
            second: "OUR SERVICES"
          },
          content: {
            first: "We provide custom millwork, finish carpentry, kitchen and bathroom remodeling materials, flooring, and shop drawing support for commercial and residential projects."
          },
          image: "/assets/img/new-images/hero-section/custom-interior-finish.png"
        }]}
      />
      <div className="bg-white">
        <Services3 />
      </div>
      {/* <WorkTwoColumn lightTheme={true} /> */}
     
      <NextProject 
        title="CHOOSE YOUR SERVICE AND GET STARTED"
        text="Send your project information and our team will guide you to the right service path."
        btn1Text="Get Quote"
        btn2Text="Submit Project"
      />
    </LightLayout>
  );
};

export default Services;
