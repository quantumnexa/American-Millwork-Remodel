/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = ({ classText }) => {
  return (
    <footer className={`${classText ? classText : ""}`}>
      <div className="container-fluid padding5">
        <div className="row footer-grid">
          <div className="footer-col-40">
            <div className="item md-mb50">
              <div className="logo">
                <img src="/assets/img/logo-light.png" alt="logo" />
              </div>
              <div className="text-left mt-30">
                <p>A modern system for millwork, remodeling, and interior finishes. We combine commercial millwork expertise with residential material supply and remote project coordination to simplify the entire building and remodeling process.</p>
              </div>
              <div className="social mt-30">
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
            </div>
          </div>
          <div className="footer-col-15">
            <div className="item md-mb50">
              <div className="title">
                <h5>Discover</h5>
              </div>
              <ul>
                
                <li>
                  <div className="cont">
                    <Link href="/portfolio"><a>Portfolio</a></Link>
                  </div>
                </li>
                <li>
                  <div className="cont">
                    <Link href="/about"><a>About</a></Link>
                  </div>
                </li>
                <li>
                  <div className="cont">
                    <Link href="/services"><a>Services</a></Link>
                  </div>
                </li>
                <li>
                  <div className="cont">
                    <Link href="/contact"><a>Contact</a></Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
         
          <div className="footer-col-15">
            <div className="item md-mb50">
              <div className="title">
                <h5>Services</h5>
              </div>
              <ul>
                <li>
                  <div className="cont">
                    <Link href="/services1"><a>Commercial Millwork & Interiors</a></Link>
                  </div>
                </li>
                <li>
                  <div className="cont">
                    <Link href="/services2"><a>Residential Remodeling Materials</a></Link>
                  </div>
                </li>
                <li>
                  <div className="cont">
                    <Link href="/services3"><a>Technical & Design Support</a></Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
           <div className="footer-col-15">
            <div className="item md-mb50">
              <div className="title">
                <h5>About</h5>
              </div>
              <ul>
                <li>
                  <div className="cont">
                    <h6>Official Address</h6>
                    <p>504 White St. Dawsonville, GA 30534</p>
                  </div>
                </li>
                <li>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>info@americanmillwork.com</p>
                  </div>
                </li>
                <li>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>(706) 555-0123</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-col-15">
            <div className="item md-mb50">
              <div className="title">
                <h5>Resources</h5>
              </div>
              <ul>
                <li>
                  <div className="cont">
                    <Link href="/materials"><a>Material Selection Center</a></Link>
                  </div>
                </li>
                <li>
                  <div className="cont">
                    <Link href="/measurements"><a>Measurements Guide</a></Link>
                  </div>
                </li>
                <li>
                  <div className="cont">
                    <Link href="/faq"><a>FAQ</a></Link>
                  </div>
                </li>
                <li>
                  <div className="cont">
                    <Link href="/testimonials"><a>Client Testimonials</a></Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-50">
          <div className="left">
            <p>© 2026, American Millwork & Remodel. All Rights Reserved.</p>
          </div>
          <div className="right">
            <Link href="/privacy"><a>Privacy Policy</a></Link>
           
            <Link href="/terms"><a>Terms & Conditions</a></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
