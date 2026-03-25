/* eslint-disable @next/next/no-img-element */
import React from "react";
import IntroWithVerticalTwo from "../../components/Intro-with-vertical-2";
import LightLayout from "../../layouts/light";
import Services5Light from "../../components/Services5-Light";
import AboutUs8 from "../../components/About-Us8";
import Team1 from "../../components/Team1";
import Services6 from "../../components/Services6";
import NextProject from "../../components/Next-Project";

const About = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []); 
  return (
    <LightLayout>
      <IntroWithVerticalTwo
        customData={[{
          id: 1,
          title: {
            first: "ABOUT",
            second: "American Millwork & Remodel"
          },
          content: {
            first: "American Millwork & Remodel was created to solve two common problems in the market: clients struggle to find reliable custom finish solutions for commercial interiors, and many homeowners want fast pricing for kitchens and bathrooms without waiting through a slow traditional process."
          },
          image: "/assets/img/new-images/hero-section/custom-kitchen-and-bath.png"
        }]}
      />
      {/* <PageHeader
        title="ABOUT AMERICAN MILLWORK & REMODEL"
        fullPath={[
          { id: 1, name: "home", url: "/home2" },
          { id: 2, name: "about us", url: "/about" },
        ]}
        text="American Millwork & Remodel was created to solve two common problems in the market: clients struggle to find reliable custom finish solutions for commercial interiors, and many homeowners want fast pricing for kitchens and bathrooms without waiting through a slow traditional process."
      /> */}
      <div className="bg-white">
        <AboutUs8 
          subTitle="OUR PURPOSE"
          title="Why This Company Exists"
          text="We built this company to make premium millwork and remodeling more accessible, more organized, and easier to quote. Commercial clients often need custom millwork details and fast coordination. Residential clients often want pricing and product options before committing to a full remodel process. We bridge both needs with a modern system."
          points={[
            { icon: "flaticon-computer", text: "Fast quoting" },
            { icon: "flaticon-sketch", text: "Better communication" },
            { icon: "flaticon-interior-design", text: "Strong design and finish focus" },
            { icon: "flaticon-house-plan", text: "Nationwide material sales" },
            { icon: "flaticon-furniture", text: "Commercial-grade coordination" },
            { icon: "flaticon-home-1", text: "Residential convenience" }
          ]}
        />
      </div>
      <div className="bg-gray">
        <AboutUs8 
          subTitle="WHAT MAKES US DIFFERENT"
          title="What Makes Our System Different"
          text="Unlike a traditional local remodeler, we are not limited to one neighborhood quoting model. Our system allows clients to send us information digitally, receive material pricing, review finish options, and move projects forward faster. For commercial interiors, we also support shop drawings and finish coordination."
          points={[
            { icon: "flaticon-computer", text: "Remote quoting" },
            { icon: "flaticon-home-1", text: "Commercial and residential crossover" },
            { icon: "flaticon-plan", text: "Material-first sales model" },
            { icon: "flaticon-furniture", text: "Custom millwork expertise" },
            { icon: "flaticon-renovation", text: "Installation coordination support" }
          ]}
          imageLeft={true}
          image1="/assets/img/new-images/what-we-do/1.png"
          image2="/assets/img/new-images/what-we-do/2.png"
          
        />
      </div>
      {/* <div className="bg-white">
        <AboutUs2 />
        <Services2 />
      </div> */}
      <div className="bg-white">
        <Services5Light 
          commercialDataOverride={{
            subtitle: "COMMERCIAL CLIENTS",
            title: "For Commercial Clients",
            text: "We support restaurants, franchise interiors, office build-outs, lobby upgrades, hospitality spaces, and branded interior finish projects requiring custom carpentry and millwork.",
            items: [
              { icon: "flaticon-kitchen-2", title: "Custom counters" },
              { icon: "flaticon-desk-lamp", title: "Reception desks" },
              { icon: "flaticon-interior-design", title: "Wall cladding" },
              { icon: "flaticon-house-plan", title: "Ceiling details" },
              { icon: "flaticon-sofa-1", title: "Banquettes" },
              { icon: "flaticon-furniture", title: "Retail displays" },
              { icon: "flaticon-sketch", title: "Decorative trim packages" },
              { icon: "flaticon-living-room", title: "Franchise finish standards" }
            ]
          }}
          residentialDataOverride={{
            subtitle: "RESIDENTIAL CLIENTS",
            title: "For Homeowners",
            text: "We help homeowners across America get kitchen, bathroom, flooring, and finish quotes through a digital-first process. Clients can send measurements, videos, and photos, and our team can help price cabinetry, vanities, finish carpentry, flooring, and other remodeling materials.",
            items: [
              { icon: "flaticon-kitchen", title: "Kitchen Cabinets" },
              { icon: "flaticon-renovation", title: "Bathroom Vanities" },
              { icon: "flaticon-house-plan", title: "Flooring Solutions" },
              { icon: "flaticon-interior-design", title: "Finish Carpentry" },
              { icon: "flaticon-furniture", title: "Interior Trim" },
              { icon: "flaticon-sketch", title: "Material Packages" },
              { icon: "flaticon-plan", title: "Layout Planning" },
              { icon: "flaticon-computer", title: "Remote Consultations" }
            ]
          }}
        />
      </div>
      
      <div className="bg-gray">
        <Services6 
          subTitle="OUR EXPERIENCE"
          title="Our Experience"
          text="Our team has experience working on commercial interiors, residential remodeling projects, and custom millwork fabrication."
          projectTypes={[
            { icon: "flaticon-kitchen-1", title: "Restaurants" },
            { icon: "flaticon-furniture", title: "Retail stores" },
            { icon: "flaticon-computer", title: "Office interiors" },
            { icon: "flaticon-home-1", title: "Luxury homes" },
            { icon: "flaticon-kitchen", title: "Kitchen and bathroom remodels" }
          ]}
        />
      </div>
      <div className="bg-white">
        <Team1 
          subtitle="ABOUT OUR TEAM"
          title="Our Employees"
          text="Our team includes designers, millwork specialists, project coordinators, and material sourcing experts who work together to help clients complete interior projects successfully."
        />
      </div>
      {/* <div className="bg-white">
        <AboutUs5 />
      </div> */}
      {/* <div className="bg-gray">
        <Skills2 />
      </div> */}
      {/* <div className="bg-white">
        <Services3 />
      </div>
      <div className="bg-gray">
        <Process />
      </div> */}
      {/* <div className="bg-white">
        <Contact />
      </div> */}
      <NextProject 
        title="LET'S PRICE YOUR PROJECT"
        text="Send us your project details and let our team guide you through the next step."
        btn1Text="Submit Measurements"
        btn2Text="Schedule Video Call"
      />
    </LightLayout>
  );
};

export default About;
