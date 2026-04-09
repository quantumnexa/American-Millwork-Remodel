import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const InteriorBuildOutsVideoReels = () => {
  // Sample video data - Replace these URLs with your actual reel videos
  const videos = [
    {
      id: 1,
      url: "/assets/img/videos/kitchen/1.mp4",
      poster: "/assets/img/portfolio/1.jpg",

    },
    {
      id: 2,
      url: "/assets/img/videos/kitchen/2.mp4",
      poster: "/assets/img/portfolio/2.jpg",

    },
    {
      id: 3,
      url: "/assets/img/videos/kitchen/3.mp4",
      poster: "/assets/img/portfolio/3.jpg",
    },
    {
      id: 4,
      url: "/assets/img/videos/kitchen/4.mp4",
      poster: "/assets/img/portfolio/4.jpg",

    },
    {
      id: 5,
      url: "/assets/img/videos/kitchen/5.mp4",
      poster: "/assets/img/portfolio/5.jpg",
    }
  ];

  const handleMouseEnter = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) video.play();
  };

  const handleMouseLeave = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section
      className="video-reels section-padding bg-img bg-repeat"
      style={{ backgroundImage: "url(/assets/img/dots.png)" }}
    >
      <div className="container-fluid padding5">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="section-head mb-0">
              <h6 className="sub-title main-color mb-10 ls10" style={{ color: "#B68C4A", letterSpacing: "4px", textTransform: "uppercase", fontWeight: 500, fontFamily: "'Poppins', sans-serif" }}>
                Experience Our Work
              </h6>
              <h2 className="mb-20 playfont" style={{ fontSize: "45px", fontWeight: "600", color: "#111", lineHeight: "1.2" }}>
                Where Interior Design <br/> Meets Expert Millwork
              </h2>
              <p className="text-gray mb-40">
                Take a closer look at our recent interior build-out transformations. From custom millwork to complete space renovations, see how we bring high-quality craftsmanship to every project.
              </p>
              <div className="reels-nav-custom d-flex align-items-center" style={{ gap: '30px', marginTop: '40px' }}>
                <div className="swiper-button-prev-custom">
                  <i className="fas fa-chevron-left"></i>
                </div>
                <div className="swiper-button-next-custom">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="reels-slider-wrapper">
              <Swiper
                className="reels-slider"
                grabCursor={true}
                slidesPerView={1}
                spaceBetween={40}
                loop={true}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{
                  clickable: true,
                  el: '.reels-pagination',
                  bulletClass: 'swiper-pagination-bullet',
                  bulletActiveClass: 'swiper-pagination-bullet-active'
                }}
                breakpoints={{
                  480: { slidesPerView: 1.2, spaceBetween: 10 },
                  768: { slidesPerView: 1.8, spaceBetween: 20 },
                  1200: { slidesPerView: 2.2, spaceBetween: 30 },
                }}
                style={{ padding: '40px 10px' }}
              >
                {videos.map((video) => (
                  <SwiperSlide key={video.id} style={{ overflow: 'visible' }}>
                    <div
                      className="reel-item"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="video-wrapper">
                        <video
                          loop
                          muted
                          playsInline
                          preload="none"
                          poster={video.poster}
                          className="reel-video"
                          controls
                        >
                          <source src={video.url} type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="reels-pagination text-left mt-30"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .video-reels {
          background: #ffffff;
          overflow: hidden;
          padding: 120px 0;
          font-family: 'Poppins', sans-serif;
          position: relative;
        }
        .sub-title {
          display: inline-block;
          padding: 0 35px !important;
          position: relative;
        }
        .sub-title:before,
        .sub-title:after {
          content: "";
          width: 25px;
          height: 1px;
          background: #B68C4A;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
        .sub-title:before {
          left: 0;
        }
        .sub-title:after {
          right: 0;
        }
        .reels-slider-wrapper {
          position: relative;
        }
        .reel-item {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .reel-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 80px rgba(0,0,0,0.15);
        }
        .video-wrapper {
          position: relative;
          width: 100%;
          height: 400px;
          overflow: hidden;
        }
        .reel-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
        }
        .reels-nav-custom {
          justify-content: flex-start;
        }
        .swiper-button-prev-custom,
        .swiper-button-next-custom {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #B68C4A;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          font-size: 16px;
        }
        .swiper-button-prev-custom:hover,
        .swiper-button-next-custom:hover {
          background: #a07a3d;
          transform: scale(1.1);
        }
        .reels-pagination {
          display: flex;
          justify-content: center;
          gap: 10px;
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(182, 140, 74, 0.3);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #B68C4A;
          transform: scale(1.2);
        }
        @media screen and (max-width: 991px) {
          .video-reels {
            padding: 80px 0;
          }
          .section-head h2 {
            font-size: 35px !important;
          }
          .row {
            flex-direction: column;
          }
          .col-lg-4 {
            margin-bottom: 50px;
          }
        }
        @media screen and (max-width: 767px) {
          .section-head h2 {
            font-size: 28px !important;
          }
          .sub-title {
            font-size: 12px !important;
            padding: 0 25px !important;
          }
          .sub-title:before, .sub-title:after {
            width: 15px;
          }
          .video-wrapper {
            height: 300px;
          }
          .reels-nav-custom {
            gap: 20px;
          }
          .swiper-button-prev-custom,
          .swiper-button-next-custom {
            width: 40px;
            height: 40px;
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default InteriorBuildOutsVideoReels;