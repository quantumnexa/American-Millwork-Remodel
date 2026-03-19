import React from "react";
import Split from "../Split";
import Link from "next/link";

const NextProject = ({
  title = "LET'S PRICE YOUR PROJECT",
  text = "Send us your project details and let our team guide you through the next step.",
  btn1Text = "Submit Measurements",
  btn2Text = "Schedule Video Call"
}) => {
  return (
    <section className="call-action nogif next">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="content text-center">
              <Split>
                <h6
                  className="wow txt words chars splitting text-highlight mb-10"
                  data-splitting
                  style={{ color: '#B68C4A', letterSpacing: '4px', textTransform: 'uppercase' }}
                >
                  {title}
                </h6>
              </Split>

              <Split>
                <h2
                  className="wow txt words chars splitting"
                  data-splitting
                  style={{ fontSize: '32px', lineHeight: '1.6', marginBottom: '20px', textTransform: 'none', letterSpacing: 'normal', maxWidth: '1000px', margin: '0 auto', fontWeight: '500' }}
                >
                  {text}
                </h2>
              </Split>

              <div className="buttons-row mt-40" style={{ display: 'flex', gap: '20px', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
                <Link href="/contact">
                  <a className="btn-curve btn-color wow fadeInUp" data-wow-delay=".5s">
                    <span>{btn1Text}</span>
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="btn-curve btn-lit wow fadeInUp" data-wow-delay=".6s" style={{ borderColor: '#fff', color: '#fff' }}>
                    <span>{btn2Text}</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="nxt-img bg-img"
        style={{ backgroundImage: 'url(/assets/img/portfolio/project1/bg.jpg)' }}
      ></div>
    </section>
  );
};

export default NextProject;
