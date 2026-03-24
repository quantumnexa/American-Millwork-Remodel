/* eslint-disable @next/next/no-img-element */
import React from "react";
import LightLayout from "../../layouts/light";
import IntroWithVerticalTwo from "../../components/Intro-with-vertical-2";
import { WorkTwoColumn } from "../../components/Work-Two-Column";

const BathroomsGallery = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);

  return (
    <LightLayout>
      <IntroWithVerticalTwo
        customData={[
          {
            id: 1,
            title: { first: "BATHROOM", second: "GALLERY" },
            content: {
              first: "Modern bathrooms, spa bathrooms, compact designs, and hotel-style bathrooms.",
            },
            image: "/assets/img/hero/2.png",
          },
        ]}
      />
      <div className="bg-white">
        <WorkTwoColumn lightTheme={true} />
      </div>
    </LightLayout>
  );
};

export default BathroomsGallery;

