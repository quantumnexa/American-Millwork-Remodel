/* eslint-disable @next/next/no-img-element */
import React from "react";
import LightLayout from "../../layouts/light";
import IntroWithVerticalTwo from "../../components/Intro-with-vertical-2";
import { WorkTwoColumn } from "../../components/Work-Two-Column";
import NextProject from "../../components/Next-Project";
import AboutUs8 from "../../components/About-Us8";

const PortfolioPage = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);

  return (
    <LightLayout>
      <IntroWithVerticalTwo
        customData={[
          {
            id: 1,
            title: { first: "PROJECT", second: "GALLERY" },
            content: {
              first:
                "Explore examples of kitchens, bathrooms, flooring projects, and commercial millwork installations.",
            },
            image: "/assets/img/hero/6.png",
          },
        ]}
      />

      <div className="bg-white pt-80">
        <AboutUs8
          subTitle="PROJECT"
          title="Modern Kitchen Transformation"
          text="Example of a modern kitchen remodel including cabinetry, island, countertop, and flooring upgrades."
          imageLeft={true}
          image1="/assets/img/new/1.png"
          image2=""
          points={[]}
          singleImage={true}
        />
      </div>

      <div className="bg-gray">
        <AboutUs8
          subTitle="PROJECT"
          title="Spa Style Bathroom"
          text="Elegant bathroom featuring custom vanity, stone countertop, and modern shower."
          imageLeft={false}
          image1="/assets/img/hero/2.png"
          image2=""
          points={[]}
          singleImage={true}
        />
      </div>

      <div className="bg-white">
        <AboutUs8
          subTitle="PROJECT"
          title="Restaurant Millwork"
          text="Custom restaurant seating, bar millwork, and wall paneling."
          imageLeft={true}
          image1="/assets/img/new/4.png"
          image2=""
          points={[]}
          singleImage={true}
        />
      </div>

      {/* <div className="bg-white">
        <WorkTwoColumn lightTheme={true} />
      </div> */}

      <NextProject
        title="YOUR PROJECT COULD BE NEXT"
        text="Send your project details and receive a free 3D concept and quote."
        btn1Text="Submit Project"
        btn2Text="Get Online Quote"
      />
    </LightLayout>
  );
};

export default PortfolioPage;
