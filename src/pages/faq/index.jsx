/* eslint-disable @next/next/no-img-element */
import React from "react";
import LightLayout from "../../layouts/light";
import IntroWithVerticalTwo from "../../components/Intro-with-vertical-2";

const FAQPage = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);

  return (
    <LightLayout>
      <IntroWithVerticalTwo
        customData={[
          {
            id: 1,
            title: { first: "FREQUENTLY ASKED", second: "QUESTIONS" },
            content: {
              first:
                "Below are answers to common questions about our process, design services, material supply, and installation coordination.",
            },
            image: "/assets/img/hero/4.png",
          },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="mb-40">
                <h5 className="mb-20">How do I get a quote?</h5>
                <p>Send photos, measurements, drawings, or schedule a video consultation. Our team reviews the information and prepares a quote.</p>
              </div>
              <div className="mb-40">
                <h5 className="mb-20">How long does it take to receive a quote?</h5>
                <p>Most projects receive a free 3D design and material quote within approximately 48 business hours.</p>
              </div>
              <div className="mb-40">
                <h5 className="mb-20">Do you install the materials?</h5>
                <p>Installation may be performed by local installers or contractors while we coordinate design, materials, and specifications.</p>
              </div>
              <div className="mb-40">
                <h5 className="mb-20">Do you work nationwide?</h5>
                <p>Yes. Clients across the United States can submit projects online and receive designs and quotes.</p>
              </div>
              <div className="mb-0">
                <h5 className="mb-20">What projects do you support?</h5>
                <p>Kitchen remodeling, bathroom remodeling, countertops, flooring, commercial millwork, restaurant interiors, office interiors, and finish carpentry.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LightLayout>
  );
};

export default FAQPage;

