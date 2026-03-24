/* eslint-disable @next/next/no-img-element */
import React from "react";
import LightLayout from "../../layouts/light";
import IntroWithVerticalTwo from "../../components/Intro-with-vertical-2";
import { WorkTwoColumn } from "../../components/Work-Two-Column";

const CountertopsGallery = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);

  return (
    <LightLayout>
      <IntroWithVerticalTwo
        customData={[
          {
            id: 1,
            title: { first: "COUNTERTOP", second: "GALLERY" },
            content: {
              first: "Quartz, granite, marble, and porcelain slab applications.",
            },
            image: "/assets/img/hero/4.png",
          },
        ]}
      />
      <div className="bg-white">
        <WorkTwoColumn lightTheme={true} />
      </div>
    </LightLayout>
  );
};

export default CountertopsGallery;

