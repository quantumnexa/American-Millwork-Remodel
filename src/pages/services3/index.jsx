/* eslint-disable @next/next/no-img-element */
import React from "react";
import dynamic from "next/dynamic";
const IntroWithVertical = dynamic(() => import("../../components/Intro-with-vertical-2"), { ssr: false });
import LightLayout from "../../layouts/light";
import AboutUs8 from "../../components/About-Us8";
import NextProject from "../../components/Next-Project";

const Services3Page = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);

  return (
    <LightLayout>
      <IntroWithVertical 
        customData={[{
          id: 1,
          title: {
            first: "DESIGN &",
            second: "PLANNING"
          },
          content: {
            first: "Technical drawings and project coordination support for millwork production, layout planning, and installation preparation."
          },
          image: "/assets/img/new-images/hero-section/design-shop.png"
        }]}
      />

      <div className="bg-white pt-80">
        <AboutUs8 
          subTitle="DRAWINGS"
          title="Shop Drawings"
          text="Detailed and precise drawings to support production and installation for both commercial and residential projects."
          imageLeft={true}
          image1="/assets/img/new/13.png"
          image2="/assets/img/new/14.png"
          points={[
            { icon: "flaticon-sketch", text: "Millwork shop drawings" },
            { icon: "flaticon-plan", text: "Production drawings" },
            { icon: "flaticon-interior-design", text: "Installation coordination drawings" }
          ]}
        />
      </div>

      <div className="bg-gray">
        <AboutUs8 
          subTitle="PLANNING"
          title="Project Planning Support"
          text="We provide comprehensive support for planning the scope and layout of your projects."
          imageLeft={false}
          image1="/assets/img/new/15.png"
          image2="/assets/img/new/16.png"
          points={[
            { icon: "flaticon-plan", text: "Scope planning" },
            { icon: "flaticon-interior-design", text: "Layout review from photos and measurements" },
            { icon: "flaticon-computer", text: "Material quote preparation" }
          ]}
        />
      </div>

      <div className="bg-white">
        <AboutUs8 
          subTitle="INTAKE"
          title="Remote Project Intake"
          text="Our streamlined remote intake process makes it easy to kick off your project from anywhere."
          imageLeft={true}
          image1="/assets/img/new/1.png"
          image2="/assets/img/new/8.png"
          points={[
            { icon: "flaticon-computer", text: "Photo submissions" },
            { icon: "flaticon-plan", text: "Measurement submissions" },
            { icon: "flaticon-interior-design", text: "Video walkthroughs" },
            { icon: "flaticon-computer", text: "Online consultations" }
          ]}
        />
      </div>

      <NextProject 
        title="START YOUR PLANNING"
        text="Send your project information and our team will guide you to the right service path."
        btn1Text="Get Quote"
        btn2Text="Submit Project"
      />
    </LightLayout>
  );
};

export default Services3Page;
