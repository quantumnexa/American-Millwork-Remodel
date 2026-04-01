import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const KitchenVideoReels = () => {
  // Sample video data - Replace these URLs with your actual reel videos
  const videos = [
    {
      id: 1,
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      poster: "/assets/img/portfolio/1.jpg",
      title: "Modern Kitchen Design"
    },
    {
      id: 2,
      url: "https://www.w3schools.com/html/movie.mp4",
      poster: "/assets/img/portfolio/2.jpg",
      title: "Elegant Cabinetry"
    },
    {
      id: 3,
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      poster: "/assets/img/portfolio/3.jpg",
      title: "Smart Lighting Solutions"
    },
    {
      id: 4,
      url: "https://www.w3schools.com/html/movie.mp4",
      poster: "/assets/img/portfolio/4.jpg",
      title: "Custom Island Features"
    },
    {
      id: 5,
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      poster: "/assets/img/portfolio/5.jpg",
      title: "Premium Countertops"
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
                Transforming Spaces, <br /> One Kitchen at a Time
              </h2>
              <p className="text-gray mb-40">
                Take a closer look at our recent kitchen transformations. From custom cabinetry to modern islands, see how we bring high-quality craftsmanship to every home.
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
                  480: { slidesPerView: 1.5, spaceBetween: 20 },
                  768: { slidesPerView: 2.2, spaceBetween: 30 },
                  1200: { slidesPerView: 3.2, spaceBetween: 40 },
                }}
              >
                {videos.map((video) => (
                  <SwiperSlide key={video.id}>
                    <div className="reel-item">
                      <div className="video-wrapper">
                        <video 
                          loop 
                          muted 
                          playsInline 
                          poster={video.poster}
                          className="reel-video"
                          controls
                        >
                          <source src={video.url} type="video/mp4" />
                        </video>
                        <div className="reel-content-overlay">
                          <h5 className="playfont text-white">{video.title}</h5>
                        </div>
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
        .reel-content-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 40px 15px 15px;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
          pointer-events: none;
        }
        .reel-content-overlay h5 {
          font-size: 18px;
          font-weight: 500;
          letter-spacing: 0.5px;
          font-family: 'Playfair Display', serif;
          text-align: center;
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
          .reels-slider-wrapper {
            padding-left: 0;
            margin-top: 50px;
          }
          .reels-nav-custom {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default KitchenVideoReels;