import React from "react";
import IntroWithVerticalTwo from "../../components/Intro-with-vertical-2";
import LightLayout from "../../layouts/light";
import ContactInfo from "../../components/Contact-info";
import ContactWithMap from "../../components/Contact-with-map";
import NextProject from "../../components/Next-Project";

const Contact = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout>
      <IntroWithVerticalTwo
        customData={[
          {
            id: 1,
            title: {
              first: "CONTACT",
              second: "American Millwork & Remodel",
            },
            content: {
              first:
                "Have questions about your project? Contact our team and we will guide you through the next steps.",
            },
            image: "/assets/img/new/16.png",
          },
        ]}
      />

      <div className="bg-white">
        <section className="contact">
          <ContactInfo />
          <ContactWithMap />
        </section>
      </div>

      <NextProject
        title="START YOUR PROJECT TODAY"
        text="Send us a message and our team will guide you through the next steps."
        btn1Text="Send"
      />
    </LightLayout>
  );
};

export default Contact;
