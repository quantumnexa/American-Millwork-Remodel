/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import getSiblings from '../../common/getSiblings'
import { useRouter } from "next/router";

const Navbar = ({ navbarRef, logoRef, logoClass }) => {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;
  const isServicesActive = () => router.pathname.startsWith("/services");
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
                <Link href="/">
                  <a className={`nav-link ${isActive("/") ? "active" : ""}`}>Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className={`nav-link ${isActive("/about") ? "active" : ""}`}>About</a>
                </Link>
              </li>
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

              <li className="nav-item">
                <Link href="/contact">
                  <a className={`nav-link ${isActive("/contact") ? "active" : ""}`}>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
