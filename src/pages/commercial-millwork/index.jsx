import React from "react";
import Hero from "../../components/CommercialMillwork/Hero";
import AboutUs2 from "../../components/CommercialMillwork/About-Us2";
import Process from "../../components/CommercialMillwork/Process";
import LightLayout from "../../layouts/light";
import Services3 from "../../components/CommercialMillwork/Services3";
import AboutUs8 from "../../components/About-Us8";
import NextProject from "../../components/CommercialMillwork/Next-Project";
import Brands from "../../components/CommercialMillwork/Brands";
import VideoReels from "../../components/CommercialMillwork/VideoReels";

const CommercialMillwork = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout isKitchen={true}>
      <section id="home">
        <Hero />
      </section>
      <Brands />
      <section id="reels">
        <VideoReels />
      </section>
      <div id="about" className="bg-white">
        <AboutUs2 />
        <Services3 />
      </div>
      <div id="why-us" className="bg-gray">
        <AboutUs8
          subTitle="WHY CHOOSE US"
          title="Why Choose Us"
          points={[
            { icon: "flaticon-furniture", text: "Durable materials and expert construction designed to withstand daily commercial use." },
            { icon: "flaticon-home-1", text: "Every detail is aligned with your business identity and customer experience goals." },
            { icon: "flaticon-computer", text: "Clean lines, flawless finishes, and consistent quality across every project." },
            { icon: "flaticon-sketch", text: "We understand commercial timelines—your project is completed with efficiency and reliability." },
          ]}
        />
      </div>
      {/* <div className="bg-gray">
        <Services5Light />
      </div>
      <div className="bg-white">
        <AboutUs8 />
      </div>
      <div className="bg-gray">
        <Skills2 />
      </div> */}
      <div id="process" className="bg-white">
        <Process />
      </div>
      <section id="contact">
        <NextProject
          title="Upgrade Your Commercial Space Today"
          text="Let’s build millwork that strengthens your brand and enhances every customer interaction."
          btn1Text="Get Started Now"
          btn2Text="Contact Our Designers"
        />
      </section>
    </LightLayout>
  );
};

export default CommercialMillwork;