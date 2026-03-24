/* eslint-disable @next/next/no-img-element */
import React from "react";
import dynamic from "next/dynamic";
const IntroWithVerticalTwo = dynamic(() => import("../../components/Intro-with-vertical-2"), { ssr: false });
import LightLayout from "../../layouts/light";
import Services3 from "../../components/Services3";
import NextProject from "../../components/Next-Project";

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
