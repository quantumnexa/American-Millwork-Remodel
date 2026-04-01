/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
SwiperCore.use([Autoplay]);

const KitchenBrands = () => {
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
              <h2 className="mb-20 playfont">Brands We Have Worked With</h2>
              <p>Trusted manufacturers and suppliers we collaborate with to deliver quality kitchens and interior finishes.</p>
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
        >
          {logos.concat(logos).map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="item text-center">
                <div className="img" style={{ padding: "16px", borderRadius: "10px", background: "#fff", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
                  <img src={src} alt={`brand-${(idx % 12) + 1}`} style={{ maxWidth: "100%", height: "56px", objectFit: "contain", filter: "grayscale(0.2)" }} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style jsx>{`
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
       `}</style>
    </section>
  );
};

export default KitchenBrands;
