/* eslint-disable @next/next/no-img-element */
import React from "react";
import LightLayout from "../../layouts/light";
import dynamic from "next/dynamic";
const IntroWithVerticalTwo = dynamic(() => import("../../components/Intro-with-vertical-2"), { ssr: false });
import AboutUs8 from "../../components/About-Us8";
import NextProject from "../../components/Next-Project";

const MeasurementsPage = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);

  return (
    <LightLayout>
      <IntroWithVerticalTwo
        customData={[
          {
            id: 1,
            title: { first: "HOW TO MEASURE", second: "YOUR SPACE" },
            content: {
              first:
                "Accurate measurements help us create better designs and faster quotes. Clients can send simple measurements, photos, or videos.",
            },
            image: "/assets/img/hero/3.png",
          },
        ]}
      />

      <div className="bg-white pt-80">
        <AboutUs8
          subTitle="GUIDE"
          title="Kitchen Measurements"
          text="Follow these basics to capture the information needed for a kitchen quote."
          imageLeft={true}
          image1="/assets/img/new/13.png"
          image2="/assets/img/new/14.png"
          points={[
            { icon: "flaticon-house-plan", text: "Measure wall length" },
            { icon: "flaticon-house-plan", text: "Measure ceiling height" },
            { icon: "flaticon-house-plan", text: "Measure cabinet depth" },
            { icon: "flaticon-house-plan", text: "Measure island dimensions" },
            { icon: "flaticon-house-plan", text: "Measure window and door locations" },
          ]}
        />
      </div>

      <div className="bg-gray">
        <AboutUs8
          subTitle="GUIDE"
          title="Bathroom Measurements"
          text="Use this checklist to document bathroom dimensions for vanities, showers, and flooring."
          imageLeft={false}
          image1="/assets/img/new/15.png"
          image2="/assets/img/new/16.png"
          points={[
            { icon: "flaticon-house-plan", text: "Measure vanity width" },
            { icon: "flaticon-house-plan", text: "Measure wall height" },
            { icon: "flaticon-house-plan", text: "Measure shower area" },
            { icon: "flaticon-house-plan", text: "Measure floor dimensions" },
            { icon: "flaticon-house-plan", text: "Measure door clearance" },
          ]}
        />
      </div>

      <div className="bg-white">
        <AboutUs8
          subTitle="OPTION"
          title="Video Walkthrough Option"
          text="Clients can also send a short video showing the space while explaining dimensions and layout."
          imageLeft={true}
          image1="/assets/img/new-images/process/1.png"
          image2="/assets/img/new/18.png"
          points={[]}
        />
      </div>

      <NextProject
        title="SEND YOUR MEASUREMENTS"
        text="Upload your measurements or schedule a video walkthrough with our team."
        btn1Text="Upload Measurements"
        btn2Text="Schedule Video Call"
      />
    </LightLayout>
  );
};

export default MeasurementsPage;
