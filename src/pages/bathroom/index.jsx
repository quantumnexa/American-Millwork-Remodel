import React from "react";
import LightLayout from "../../layouts/light";
import BathroomHero from "../../components/Bathroom/Hero";
import BathroomAboutUs2 from "../../components/Bathroom/About-Us2";
import BathroomAboutUs8 from "../../components/Bathroom/About-Us8";
import BathroomProcess from "../../components/Bathroom/Process";
import BathroomNextProject from "../../components/Bathroom/Next-Project";
import BathroomBrands from "../../components/Bathroom/Brands";
import BathroomVideoReels from "../../components/Bathroom/VideoReels";

const Bathroom = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout isBathroom={true}>
      <section id="home">
        <BathroomHero />
      </section>
      <BathroomBrands />
      <section id="reels">
        <BathroomVideoReels />
      </section>
      <div id="about" className="bg-white">
        <BathroomAboutUs2 />
      </div>
      <div id="why-us" className="bg-gray">
        <BathroomAboutUs8 />
      </div>
      <div id="process" className="bg-white">
        <BathroomProcess />
      </div>
      <section id="contact">
        <BathroomNextProject
          title="START YOUR BATHROOM TRANSFORMATION"
          text="Ready to design your dream bathroom? From custom vanities to complete spa-like remodels, send us your project details and our experts will guide you through the process."
          btn1Text="Get My Quote"
          btn2Text="Contact Our Designers"
        />
      </section>
    </LightLayout>
  );
};

export default Bathroom;
