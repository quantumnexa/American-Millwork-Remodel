/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = ({ classText }) => {
  return (
    <footer className={`${classText ? classText : ""}`}>
      <div className="container-fluid padding5">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Official Address</h6>
                    <p>504 White St. Dawsonville, GA 30534</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>info@americanmillwork.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>(706) 555-0123</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Our Services</h5>
              </div>
              <ul>
                <li>
                  <div className="cont">
                    <Link href="/"><a>Commercial Millwork</a></Link>
                  </div>
                </li>
                <li>
                  <div className="cont">
                    <Link href="/"><a>Residential Remodeling</a></Link>
                  </div>
                </li>
                <li>
                  <div className="cont">
                    <Link href="/"><a>Custom Finish Carpentry</a></Link>
                  </div>
                </li>
                <li>
                  <div className="cont">
                    <Link href="/"><a>Kitchen & Bath Renovation</a></Link>
                  </div>
                </li>
                <li>
                  <div className="cont">
                    <Link href="/"><a>Shop Drawings & Design</a></Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src="/assets/img/logo.png" alt="logo" />
              </div>
              <div className="title mb-30 mt-30">
                <h5 className="playfont fw-600 text-highlight" style={{ fontSize: '24px' }}>American Millwork & Remodel</h5>
              </div>
              <div className="social">
                <Link href="#">
                  <a>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <i className="fab fa-instagram"></i>
                  </a>
                </Link>
              </div>
              <div className="copy-right">
                <p>
                  © 2026, American Millwork & Remodel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
