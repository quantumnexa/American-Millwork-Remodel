/* eslint-disable @next/next/no-img-element */
import React from "react";
import LightLayout from "../../layouts/light";
import dynamic from "next/dynamic";
const IntroWithVerticalTwo = dynamic(() => import("../../components/Intro-with-vertical-2"), { ssr: false });
import { WorkTwoColumn } from "../../components/Work-Two-Column";
import NextProject from "../../components/Next-Project";

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

      <div className="bg-white">
        <WorkTwoColumn lightTheme={true} />
      </div>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-30">
              <h5 className="mb-15">Modern Kitchen Transformation</h5>
              <p>
                Example of a modern kitchen remodel including cabinetry, island,
                countertop, and flooring upgrades.
              </p>
            </div>
            <div className="col-lg-4 mb-30">
              <h5 className="mb-15">Spa Style Bathroom</h5>
              <p>
                Elegant bathroom featuring custom vanity, stone countertop, and
                modern shower.
              </p>
            </div>
            <div className="col-lg-4 mb-0">
              <h5 className="mb-15">Restaurant Millwork</h5>
              <p>
                Custom restaurant seating, bar millwork, and wall paneling.
              </p>
            </div>
          </div>
        </div>
      </section>

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
