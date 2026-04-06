/* eslint-disable @next/next/no-img-element */
import React from "react";
import LightLayout from "../../layouts/light";
import IntroWithVerticalTwo from "../../components/Intro-with-vertical-2";

const FAQPage = () => {
  const items = [
    {
      q: "How do I Get A Free Quote?",
      a:
        "Send photos, measurements, drawings, or schedule a video consultation. Our team reviews the information and prepares a quote.",
    },
    {
      q: "How long does it take to receive a quote?",
      a:
        "Most projects receive a free 3D design and material quote within approximately 48 business hours.",
    },
    {
      q: "Do you install the materials?",
      a:
        "Installation may be performed by local installers or contractors while we coordinate design, materials, and specifications.",
    },
    {
      q: "Do you work nationwide?",
      a:
        "Yes. Clients across the United States can submit projects online and receive designs and quotes.",
    },
    {
      q: "What projects do you support?",
      a:
        "Kitchen remodeling, bathroom remodeling, countertops, flooring, commercial millwork, restaurant interiors, office interiors, and finish carpentry.",
    },
  ];
  const [active, setActive] = React.useState(0);
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
              <div className="faq-accordion">
                {items.map((it, idx) => (
                  <div
                    key={idx}
                    className={`faq-item ${active === idx ? "open" : ""}`}
                  >
                    <button
                      className="faq-q"
                      aria-expanded={active === idx}
                      onClick={() =>
                        setActive(active === idx ? -1 : idx)
                      }
                    >
                      <span>{it.q}</span>
                      <i className={`fas ${active === idx ? "fa-minus" : "fa-plus"}`} />
                    </button>
                    <div className="faq-a">
                      <p>{it.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </LightLayout>
  );
};

export default FAQPage;
