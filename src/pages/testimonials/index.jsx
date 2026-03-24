/* eslint-disable @next/next/no-img-element */
import React from "react";
import LightLayout from "../../layouts/light";
import IntroWithVertical from "../../components/Intro-with-vertical-2";

const TestimonialsPage = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);

  return (
    <LightLayout>
      <IntroWithVertical
        customData={[
          {
            id: 1,
            title: { first: "WHAT OUR", second: "CLIENTS SAY" },
            content: {
              first:
                "Our clients include homeowners, restaurant owners, developers, and business operators who trusted us with their interior projects.",
            },
            image: "/assets/img/hero/5.png",
          },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="mb-40">
                <p className="fz-18">“The design concept helped us understand exactly what our kitchen would look like before we started.”</p>
              </div>
              <div className="mb-40">
                <p className="fz-18">“The process was smooth and the materials were excellent quality.”</p>
              </div>
              <div className="mb-0">
                <p className="fz-18">“The custom millwork in our restaurant completely transformed the space.”</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LightLayout>
  );
};

export default TestimonialsPage;

