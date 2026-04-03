import React from "react";
import intro2Data from "../../data/Intro2.json";
import { Swiper, SwiperSlide } from "swiper/react";
import Split from "../Split";
import Image from "next/image";

import SwiperCore, { Navigation, Pagination, Parallax, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";
SwiperCore.use([Navigation, Pagination, Parallax, Autoplay]);

const IntroWithVertical = ({ customData, withForm }) => {
  const [load, setLoad] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(false);
  const [status, setStatus] = React.useState(null);
  const isHome = !customData;
  const sliderData = customData || intro2Data;
  const hasSingle = Array.isArray(sliderData) && sliderData.length <= 1;
  React.useEffect(() => {
    setTimeout(() => {
      if (!hasSingle) removeSlashFromPagination();
    }, 1000);
    setTimeout(() => {
      setLoad(false);
    });
    const updateIsMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 991);
      }
    };
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, [hasSingle]);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!withForm) return;
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const service_type = formData.get("service_type");
    const hear = formData.get("hear");
    const message = formData.get("message");
    const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
    const utm_source = params.get("utm_source") || null;
    const custom = { page: "hero", utm_source, hear, message };
    setStatus("pending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          service_type,
          source: "website",
          custom,
        }),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus(data.error || "error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <>
      <header className="slid-half">
        <div
          id="js-cta-slider"
          className="cta__slider-wrapper nofull swiper-container"
        >
          {!load ? (
            <Swiper
              speed={800}
              parallax={true}
              autoplay={
                hasSingle
                  ? false
                  : {
                      delay: 4000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }
              }
              navigation={
                hasSingle
                  ? false
                  : {
                      prevEl: navigationPrevRef.current,
                      nextEl: navigationNextRef.current,
                    }
              }
              pagination={
                hasSingle
                  ? false
                  : {
                      type: "fraction",
                      clickable: true,
                      el: paginationRef.current,
                    }
              }
              slidesPerView={1}
              direction="vertical"
              loop={!hasSingle}
              grabCursor={isHome ? false : (!isMobile && !hasSingle)}
              allowTouchMove={isHome ? false : (!isMobile && !hasSingle)}
              simulateTouch={isHome ? false : (!isMobile && !hasSingle)}
              watchSlidesProgress={true}
              onBeforeInit={(swiper) => {
                if (!hasSingle) {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                  swiper.params.pagination.el = paginationRef.current;
                }
              }}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].childNodes[0].setAttribute(
                      "data-swiper-parallax",
                      0.75 * swiper.height
                    );
                  }

                  if (!hasSingle) {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;

                    swiper.params.pagination.el = paginationRef.current;

                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();

                    swiper.pagination.destroy();
                    swiper.pagination.init();
                    swiper.pagination.update();
                  }
                });
              }}
              className="swiper-wrapper cta__slider"
            >
              {sliderData.map((slide) => (
                <SwiperSlide
                  key={slide.id}
                  className="cta__slider-item swiper-slide"
                >
                  <div className="media-wrapper slide-inner valign">
                    <div className="bg-img" data-overlay-dark="5">
                      <Image
                        src={slide.image}
                        alt={slide.title.second}
                        layout="fill"
                        objectFit="cover"
                        priority={slide.id === 1}
                      />
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                          <div className="caption">
                            <span className="top-corn"></span>
                            <span className="bottom-corn"></span>
                            <div className="custom-font">
                              <h5 className="thin custom-font text-highlight" style={{ color: '#B68C4A', letterSpacing: '4px', fontWeight: '500' }}>
                                {slide.title.first}
                              </h5>
                              <Split>
                                <h1
                                  data-splitting
                                  className="words chars splitting"
                                  style={{ whiteSpace: withForm ? 'normal' : 'nowrap', fontSize: '55px' }}
                                >
                                  <Link href="#">{slide.title.second}</Link>
                                </h1>
                              </Split>
                            </div>
                            {withForm ? (
                              <div className="hero-row">
                                <div className="hero-col">
                                  {slide?.content && (
                                    <p className="mt-10">
                                      {slide.content.first} <br />
                                      {slide.content.second}
                                    </p>
                                  )}
                                </div>
                                <div className="hero-form">
                                  <h3 className="form-title">Get a Free Quote</h3>
                                  <form onSubmit={handleSubmit}>
                                    <div className="row-2">
                                      <input className="hf-input" name="name" type="text" placeholder="Name" required />
                                      <input className="hf-input" name="phone" type="tel" placeholder="Phone" required />
                                    </div>
                                    <div className="row-2">
                                      <input className="hf-input" name="email" type="email" placeholder="Email" required />
                                      <div className="select-wrap">
                                        <select className="hf-select" name="service_type" required defaultValue="">
                                          <option value="" disabled>Service Type</option>
                                          <option value="Kitchens">Kitchens</option>
                                          <option value="Bathrooms">Bathrooms</option>
                                          <option value="Flooring">Flooring</option>
                                          <option value="Millwork">Millwork</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row-2">
                                      <div className="select-wrap">
                                        <select className="hf-select" name="hear" defaultValue="">
                                          <option value="" disabled>How did you hear about us?</option>
                                          <option value="Google">Google</option>
                                          <option value="Facebook">Facebook</option>
                                          <option value="Instagram">Instagram</option>
                                          <option value="Referral">Referral</option>
                                        </select>
                                      </div>
                                      <div />
                                    </div>
                                    <textarea className="hf-textarea" name="message" rows="3" placeholder="Project Description" required />
                                    <button className="btn-curve btn-color hf-btn" type="submit" disabled={status === "pending"}>
                                      <span>{status === "pending" ? "Submitting..." : "Get A Quote"}</span>
                                    </button>
                                    <div className="hf-messages">
                                      {status === "success" && <p>Thank you! We have received your request.</p>}
                                      {status && status !== "pending" && status !== "success" && status !== "error" && <p>{status}</p>}
                                      {status === "error" && <p>Something went wrong.</p>}
                                    </div>
                                  </form>
                                </div>
                              </div>
                            ) : (
                              <>
                                {slide?.content && (
                                  <p className="mt-10">
                                    {slide.content.first} <br />
                                    {slide.content.second}
                                  </p>
                                )}
                                {customData ? (
                                  <Link href="/about">
                                    <a className="btn-curve btn-color mt-30">
                                      <span>Read More</span>
                                    </a>
                                  </Link>
                                ) : (
                                  <div className="buttons-row valign" style={{display: 'flex', gap: '30px'}}>
                                    <Link href="/work1">
                                      <a className="btn-curve btn-color mt-30">
                                        <span>Get My Quote</span>
                                      </a>
                                    </Link>
                                    <Link href="/contact">
                                      <a className="btn-curve btn-lit mt-30">
                                        <span>Contact Us</span>
                                      </a>
                                    </Link>
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : null}
          {!hasSingle && (
            <div className="cta__slider-arrows">
              <i
                id="js-cta-slider-next"
                ref={navigationNextRef}
                className="cta__slider-arrow cta__slider-arrow--next"
              >
                <i className="fas fa-chevron-up"></i>
              </i>
              <i
                id="js-cta-slider-previous"
                ref={navigationPrevRef}
                className="cta__slider-arrow cta__slider-arrow--previous"
              >
                <i className="fas fa-chevron-down"></i>
              </i>
            </div>
          )}
        </div>
        {!hasSingle && (
          <div
            ref={paginationRef}
            className="swiper-pagination top custom-font"
          ></div>
        )}
      </header>
      {withForm && (
        <style jsx>{`
          .hero-row {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            gap: 40px;
            align-items: start;
            width: 100%;
          }
          .caption { width: 100% !important; max-width: none; }
          .hero-col, .hero-form { justify-self: stretch; }
          .hero-col,
          .hero-form { min-width: 0; width: 100%; align-self: start; }
          .hero-form {
            background: rgba(12,12,12,0.78);
            border: 1px solid #B68C4A;
            border-radius: 12px;
            padding: 24px;
            backdrop-filter: saturate(120%) blur(2px);
            margin: 0;
          }
          .form-title {
            margin: 0 0 14px 0;
            font-size: 24px;
            color: #fff;
            text-align: left;
          }
          .row-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin-bottom: 12px;
          }
          .hero-col p {
            color: #fff;
            opacity: 0.9;
            margin-bottom: 0;
            max-width: none;
          }
          .hero-col .custom-font { max-width: none; }
          .hf-input, .hf-select, .hf-textarea {
            width: 100%;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.12);
            color: #fff;
            border-radius: 8px;
            padding: 12px 14px;
            box-sizing: border-box;
          }
          .hf-input, .hf-select { height: 48px; }
          .hf-input::placeholder, .hf-textarea::placeholder {
            color: rgba(255,255,255,0.6);
          }
          .hf-input:focus, .hf-select:focus, .hf-textarea:focus {
            outline: none;
            border-color: #B68C4A;
            box-shadow: 0 0 0 2px rgba(182,140,74,0.35);
          }
          .select-wrap {
            position: relative;
          }
          .select-wrap:after {
            content: "";
            position: absolute;
            right: 14px;
            top: 50%;
            transform: translateY(-50%);
            width: 0;
            height: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 8px solid #B68C4A;
            pointer-events: none;
          }
          .hf-select {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            padding-right: 40px;
          }
          .hf-textarea {
            margin-bottom: 12px;
            resize: vertical;
            min-height: 120px;
          }
          .hf-btn { width: 100%; margin-top: 6px; }
          .hf-messages { margin-top: 10px; color: #fff; }
          @media (max-width: 991px) {
            .hero-row { grid-template-columns: 1fr; }
            .row-2 { grid-template-columns: 1fr; }
          }
        `}</style>
      )}
    </>
  );
};

export default IntroWithVertical;
