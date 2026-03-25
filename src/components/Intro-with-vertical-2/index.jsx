import React from "react";
import intro2Data from "../../data/Intro2.json";
import { Swiper, SwiperSlide } from "swiper/react";
import Split from "../Split";

import SwiperCore, { Navigation, Pagination, Parallax, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";
SwiperCore.use([Navigation, Pagination, Parallax, Autoplay]);

const IntroWithVertical = ({ customData }) => {
  const [load, setLoad] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(false);
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
                    <div
                      className="bg-img"
                      style={{ backgroundImage: `url(${slide.image})` }}
                      data-overlay-dark="5"
                    ></div>
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
                                  style={{ whiteSpace: 'nowrap', fontSize: '55px' }}
                                >
                                  <Link href="#">{slide.title.second}</Link>
                                </h1>
                              </Split>
                            </div>
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
    </>
  );
};

export default IntroWithVertical;
