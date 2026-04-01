/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = ({ classText }) => {
  return (
    <footer className={`${classText ? classText : ""}`}>
      <div className="container-fluid padding5">
        <div className="row footer-grid">
          <div className="col-lg-4 col-md-12 mb-50 footer-col">
            <div className="item">
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

          <div className="col-lg-2 col-md-6 mb-50 footer-col">
            <div className="item">
              <div className="title">
                <h5>Discover</h5>
              </div>
              <ul>
                <li><Link href="/portfolio"><a>Portfolio</a></Link></li>
                <li><Link href="/about"><a>About</a></Link></li>
                <li><Link href="/services"><a>Services</a></Link></li>
                <li><Link href="/contact"><a>Contact</a></Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-50 footer-col">
            <div className="item">
              <div className="title">
                <h5>Services</h5>
              </div>
              <ul>
                <li><Link href="/services1"><a>Commercial Millwork</a></Link></li>
                <li><Link href="/services2"><a>Residential Materials</a></Link></li>
                <li><Link href="/services3"><a>Design Support</a></Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-50 footer-col">
            <div className="item">
              <div className="title">
                <h5>Contact</h5>
              </div>
              <ul className="contact-list">
                <li>
                  <div className="cont">
                    <h6>Address</h6>
                    <p>7322 Southwest Freeway, Suite 140 Houston TX 77074</p>
                  </div>
                </li>
                <li>
                  <div className="cont">
                    <h6>Email</h6>
                    <p>info@americanmillwork.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-50 footer-col">
            <div className="item">
              <div className="title">
                <h5>Resources</h5>
              </div>
              <ul>
                <li><Link href="/materials"><a>Selection Center</a></Link></li>
                <li><Link href="/measurements"><a>Measurements</a></Link></li>
                <li><Link href="/faq"><a>FAQ</a></Link></li>
                <li><Link href="/testimonials"><a>Testimonials</a></Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom mt-50">
          <div className="row">
            <div className="col-md-6">
              <div className="left">
                <p>© 2026, American Millwork & Remodel. All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-md-6 text-right-md">
              <div className="right">
                <Link href="/privacy"><a>Privacy Policy</a></Link>
                <span className="separator">|</span>
                <Link href="/terms"><a>Terms & Conditions</a></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        footer {
          padding: 80px 0 40px;
          background: #111;
          color: #fff;
        }
        .footer-grid {
          display: flex;
          flex-wrap: wrap;
        }
        .item .title h5 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 25px;
          color: #fff;
          position: relative;
          padding-bottom: 10px;
        }
        .item .title h5:after {
          content: "";
          width: 30px;
          height: 2px;
          background: #B68C4A;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        .item ul li {
          margin-bottom: 12px;
        }
        .item ul li a {
          color: #999;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        .item ul li a:hover {
          color: #B68C4A;
          padding-left: 5px;
        }
        .contact-list h6 {
          font-size: 13px;
          color: #B68C4A;
          margin-bottom: 5px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .contact-list p {
          font-size: 14px;
          color: #999;
          line-height: 1.6;
        }
        .footer-bottom {
          padding-top: 30px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .footer-bottom p, .footer-bottom a {
          font-size: 13px;
          color: #777;
        }
        .separator {
          margin: 0 15px;
          color: #333;
        }
        @media screen and (max-width: 991px) {
            footer {
              padding: 60px 0 30px;
            }
            .logo img {
              max-width: 100% !important;
              width: 100% !important;
              height: auto !important;
            }
            .footer-col {
              width: 100% !important;
              max-width: 100% !important;
              flex: 0 0 100% !important;
              margin-bottom: 40px !important;
            }
           .text-right-md {
             text-align: left !important;
             margin-top: 15px;
           }
           .item .title h5 {
             margin-bottom: 15px;
           }
           .mb-50 {
             margin-bottom: 30px !important;
           }
         }
      `}</style>
    </footer>
  );
};

export default Footer;
