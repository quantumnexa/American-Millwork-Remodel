import React from "react";
import services2Data from "../../data/services2.json";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Services2 = () => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setLoad(false);
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <section className="services">
      <div className="feat-top full-width pt-0">
        <div className="notfull wow animated"></div>
        <div className="container-fluid padding5">
          <div className="row">
            <div className="col-lg-12">
              {!load ? (
                <Swiper
                  speed={1000}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                  pagination={{
                    clickable: true,
                    el: paginationRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.params.pagination.el = paginationRef.current;
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    767: {
                      slidesPerView: 2,
                      spaceBetween: 0,
                    },
                    991: {
                      slidesPerView: 5,
                      spaceBetween: 0,
                    },
                  }}
                  className="swiper-wrapper services-grid-10"
                >
                  {services2Data.map((item, index) => (
                    <SwiperSlide key={item.id} className="swiper-slide">
                      <div className="item-sm">
                        <div className="box">
                          <h6 className="mb-20">
                            <span className="custom-font numb">{item.id}</span>
                            {item.title}
                          </h6>
                          <p>{item.content}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : null}
              
              {/* Custom Navigation & Pagination */}
              <div className="swiper-controls mt-30 valign">
                <div ref={paginationRef} className="swiper-pagination custom-font"></div>
                <div className="swiper-nav-ctrls ml-auto">
                  <div ref={navigationPrevRef} className="swiper-button-prev">
                    <i className="fas fa-chevron-left"></i>
                  </div>
                  <div ref={navigationNextRef} className="swiper-button-next">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-40">
            <div className="col-lg-12 text-center">
              <Link href="/work1">
                <a className="btn-curve btn-color wow fadeInUp" data-wow-delay=".5s">
                  <span>Get My Quote</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services2;
