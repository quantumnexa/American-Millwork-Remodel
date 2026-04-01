/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import getSiblings from '../../common/getSiblings'
import { useRouter } from "next/router";

const Navbar = ({ navbarRef, logoRef, logoClass, isKitchen }) => {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;
  const isServicesActive = () => router.pathname.startsWith("/services");
  
  const handleScroll = (e, targetId) => {
     if (isKitchen) {
       e.preventDefault();
       const element = document.getElementById(targetId);
       if (element) {
         window.scrollTo({
           top: element.offsetTop - 80, // Adjust for navbar height
           behavior: "smooth",
         });
       }
       // Close mobile menu if open
       const navbarCollapse = document.getElementById("navbarSupportedContent");
       if (navbarCollapse.classList.contains("show-with-trans")) {
         navbarCollapse.classList.remove("show-with-trans");
       }
     }
   };

  const handleDropdown = (e) => {
    getSiblings(e.target.parentElement)
      .filter((item) => item.classList.contains("show"))
      .map((item) => {
        item.classList.remove("show");
        if (item.childNodes[0]) {
          item.childNodes[0].setAttribute("aria-expanded", false);
        }
        if (item.childNodes[1]) {
          item.childNodes[1].classList.remove("show");
        }
      });
    e.target.parentElement.classList.toggle("show");
    e.target.setAttribute("aria-expanded", true);
    e.target.parentElement.childNodes[1].classList.toggle("show");
  };

  const handleMobileDropdown = (e) => {
    document
      .getElementById("navbarSupportedContent")
      .classList.toggle("show-with-trans");
  };

  return (
    <>
      <nav className="navbar change navbar-expand-lg" ref={navbarRef}>
        <div className="container">
          <Link href="/">
            <a className={`logo ${logoClass && logoClass}`}>
              <img src={appData.lightLogo} alt="logo" ref={logoRef} />
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            onClick={handleMobileDropdown}
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href={isKitchen ? "#home" : "/"}>
                  <a 
                    className={`nav-link ${isActive("/") ? "active" : ""}`}
                    onClick={(e) => handleScroll(e, "home")}
                  >
                    Home
                  </a>
                </Link>
              </li>
              {isKitchen && (
                <li className="nav-item">
                  <Link href="#reels">
                    <a className="nav-link" onClick={(e) => handleScroll(e, "reels")}>Our Projects</a>
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link href={isKitchen ? "#about" : "/about"}>
                  <a 
                    className={`nav-link ${isActive("/about") ? "active" : ""}`}
                    onClick={(e) => handleScroll(e, "about")}
                  >
                    About
                  </a>
                </Link>
              </li>
              {isKitchen ? (
                <>
                  <li className="nav-item">
                    <Link href="#why-us">
                      <a className="nav-link" onClick={(e) => handleScroll(e, "why-us")}>Why Us</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#process">
                      <a className="nav-link" onClick={(e) => handleScroll(e, "process")}>Process</a>
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item dropdown">
                  <Link href="/services">
                    <a
                      className={`nav-link dropdown-toggle ${isServicesActive() ? "active" : ""}`}
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Services
                    </a>
                  </Link>
                  <div className="dropdown-menu">
                    <Link href="/services1">
                      <a className={`dropdown-item ${isActive("/services1") ? "active" : ""}`}>Commercial Millwork & Interiors</a>
                    </Link>
                    <Link href="/services2">
                      <a className={`dropdown-item ${isActive("/services2") ? "active" : ""}`}>Residential Remodeling Materials</a>
                    </Link>
                    <Link href="/services3">
                      <a className={`dropdown-item ${isActive("/services3") ? "active" : ""}`}>Technical & Design Support</a>
                    </Link>
                  </div>
                </li>
              )}

              <li className="nav-item">
                <Link href={isKitchen ? "#contact" : "/contact"}>
                  <a 
                    className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                    onClick={(e) => handleScroll(e, "contact")}
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <style jsx>{`
        @media screen and (max-width: 991px) {
          .navbar-collapse {
            background: #fff;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }
          :global(.show-with-trans) {
            max-height: 500px !important;
          }
          .nav-link {
            color: #111 !important;
            padding: 15px 20px !important;
            border-bottom: 1px solid #eee;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
