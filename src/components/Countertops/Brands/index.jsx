/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
SwiperCore.use([Autoplay]);

const CountertopsBrands = () => {
  const logos = Array.from({ length: 12 }).map((_, i) => `/assets/img/brand/brand-1-${i + 1}.png`);
  return (
    <section className="brands section-padding bg-light-section">
      <div className="container-fluid padding5">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <h6 className="sub-title main-color mb-10 ls10" style={{ color: "#B68C4A", letterSpacing: "4px", textTransform: "uppercase", fontWeight: 500, paddingLeft: 0 }}>
                Our Partners
              </h6>
              <h2 className="mb-20 playfont">Materials & Brands You Can Trust</h2>
              <p>We work with top-quality materials and trusted suppliers to ensure your countertops deliver lasting performance, durability, and style.</p>
            </div>
          </div>
        </div>
        <Swiper
          className="brands-slider"
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3500}
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            576: { slidesPerView: 3, spaceBetween: 24 },
            768: { slidesPerView: 4, spaceBetween: 28 },
            992: { slidesPerView: 5, spaceBetween: 32 },
            1200: { slidesPerView: 6, spaceBetween: 36 },
          }}
          style={{ padding: "30px 10px" }}
        >
          {logos.concat(logos).map((src, idx) => (
            <SwiperSlide key={idx} style={{ overflow: 'visible' }}>
              <div className="item text-center">
                <div className="img-container">
                  <img src={src} alt={`brand-${(idx % 12) + 1}`} loading="lazy" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style jsx>{`
         .brands-slider {
            overflow: visible !important;
         }
         .img-container {
            padding: 20px;
            border-radius: 12px;
            background: #fff;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100px;
            transition: transform 0.3s ease;
            border: 1px solid rgba(0,0,0,0.03);
         }
         .img-container:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.08);
         }
         .img-container img {
            max-width: 100%;
            max-height: 50px;
            object-fit: contain;
            filter: grayscale(0);
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
         @media screen and (max-width: 991px) {
           .brands {
             padding: 60px 0;
           }
           h2 {
             font-size: 28px !important;
           }
           .item .img {
             padding: 10px !important;
           }
           .item .img img {
             height: 40px !important;
           }
         }
         @media screen and (max-width: 767px) {
            .sub-title {
              font-size: 12px !important;
              padding: 0 25px !important;
            }
            .sub-title:before, .sub-title:after {
              width: 15px;
            }
         }
       `}</style>
    </section>
  );
};

export default CountertopsBrands;
