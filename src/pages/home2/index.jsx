/* eslint-disable @next/next/no-img-element */
import React from "react";
import dynamic from "next/dynamic";
import AboutUs2 from "../../components/About-Us2";
import IntroWithVertical from "../../components/Intro-with-vertical";
import LightLayout from "../../layouts/light";
import Services3 from "../../components/Services3";
import AboutUs8 from "../../components/About-Us8";

const Process = dynamic(() => import("../../components/Process"), { ssr: false });
const Services5Light = dynamic(() => import("../../components/Services5-Light"), { ssr: false });

const Skills2 = dynamic(() => import("../../components/Skills2"), {
  loading: () => <div className="section-padding text-center">Loading...</div>,
  ssr: false
});

const NextProject = dynamic(() => import("../../components/Next-Project"), {
  ssr: false
});


const Home1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout>
      <IntroWithVertical />
      <div className="bg-white">
        <AboutUs2 />
        <AboutUs8
          subTitle="HOW WE WORK?"
          title="Get Free Quotes Before Committing"
          text="We provide instant, free quotes using LiDAR technology . This includes architectural drawings, shop drawings, and 3D renderings for presentations. Before any commitment, our role is to guide clients and help them understand how this industry works."
          points={[
            { icon: "flaticon-computer", text: "Instant free LiDAR quotes" },
            { icon: "flaticon-sketch", text: "Architectural & shop drawings" },
            { icon: "flaticon-plan", text: "3D renderings for presentations" },
            { icon: "flaticon-home-1", text: "Guidance before any commitment" },
          ]}
          singleImage
          imageLeft
          image1="/assets/img/process/lidar.png"
        />
        <Services3 />
      </div>
      <div className="bg-gray">
        <Services5Light />
      </div>
      <div className="bg-white">
        <AboutUs8 />
      </div>
      {/* <div className="bg-gray">
        <Skills2 />
      </div> */}
      <div className="bg-white">
        <Process />
      </div>
      {/* <div className="bg-white">
        <Contact />
      </div> */}
      <NextProject 
        title="START YOUR PROJECT TODAY"
        text="Upload your drawings and send us pictures and our team wil guide you to the next step."
        btn1Text="Upload Drawings"
        btn2Text="Get Online Quote"
      />
    </LightLayout>
  );
};

export default Home1;
