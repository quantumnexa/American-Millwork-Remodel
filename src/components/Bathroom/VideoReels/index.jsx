import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const BathroomVideoReels = () => {
  // Sample video data - Replace these URLs with your actual reel videos
  const videos = [
    {
      id: 1,
      url: "/assets/img/videos/bathroom/1.mp4",
      poster: "/assets/img/portfolio/1.jpg",
      
    },
    {
      id: 2,
      url: "/assets/img/videos/bathroom/2.mp4",
      poster: "/assets/img/portfolio/2.jpg",
      
    },
    {
      id: 3,
      url: "/assets/img/videos/bathroom/3.mp4",
      poster: "/assets/img/portfolio/3.jpg",
    },
    {
      id: 4,
      url: "/assets/img/videos/bathroom/4.mp4",
      poster: "/assets/img/portfolio/4.jpg",
      
    },
    {
      id: 5,
      url: "/assets/img/videos/bathroom/5.mp4",
      poster: "/assets/img/portfolio/5.jpg",
    }
  ];

  const handleMouseEnter = (e) => {
    const video = e.currentTarget.querySelector("video");
    if (!video) return;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
  };

  const handleMouseLeave = (e) => {
    const video = e.currentTarget.querySelector("video");
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
                Transforming Spaces, <br /> One Bathroom at a Time
              </h2>
              <p className="text-gray mb-40">
                Take a closer look at our recent bathroom transformations. From luxury spa-like retreats to modern functional designs, see how we bring quality craftsmanship to every home.
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
        .text-gray {
          color: #777;
          font-size: 16px;
          line-height: 1.8;
        }
        .reels-slider-wrapper {
          position: relative;
          padding-left: 20px;
        }
        .reel-item {
          width: 100%;
          cursor: pointer;
        }
        .video-wrapper {
          position: relative;
          width: 100%;
          max-width: 350px;
          margin: 0 auto;
          aspect-ratio: 9 / 16;
          border-radius: 12px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          border: 1px solid #eee;
          transition: transform 0.3s ease;
        }
        .reel-item:hover .video-wrapper {
          transform: translateY(-5px);
        }
        .reel-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .reel-info h5 {
          font-size: 18px;
          font-weight: 500;
          letter-spacing: 0.5px;
          font-family: 'Playfair Display', serif;
          color: #111;
        }
        .swiper-button-next-custom,
        .swiper-button-prev-custom {
          width: 50px;
          height: 50px;
          border: 1px solid #B68C4A;
          color: #B68C4A;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 50%;
        }
        .swiper-button-next-custom:hover,
        .swiper-button-prev-custom:hover {
          background: #B68C4A;
          color: #fff;
        }
        .reels-pagination {
          margin-top: 30px;
        }
        :global(.reels-pagination .swiper-pagination-bullet) {
          background: #ccc;
          width: 8px;
          height: 8px;
          margin: 0 5px !important;
          opacity: 1;
          display: inline-block;
          cursor: pointer;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        :global(.reels-pagination .swiper-pagination-bullet-active) {
          background: #B68C4A;
          transform: scale(1.3);
        }
        @media screen and (max-width: 991px) {
          .video-reels {
            padding: 80px 0;
          }
          .section-head h2 {
            font-size: 32px !important;
          }
          .reels-slider-wrapper {
            padding-left: 0;
            margin-top: 40px;
          }
          .reels-nav-custom {
            display: none !important;
          }
          .video-wrapper {
            max-width: 280px;
          }
        }
        @media screen and (max-width: 767px) {
          .video-reels {
            padding: 60px 0;
          }
          .section-head h2 {
            font-size: 28px !important;
          }
          .section-head p {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default BathroomVideoReels;
