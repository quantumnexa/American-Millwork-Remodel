import React from "react";

const Process = () => {
  return (
    <section
      className="process section-padding bg-img bg-repeat"
      style={{ backgroundImage: `url(/assets/img/dots.png)` }}
    >
      <div className="container-fluid padding5">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <h6 className="sub-title main-color mb-10 ls10 wow fadeInDown" data-wow-delay=".3s" style={{ color: '#B68C4A', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: '500', paddingLeft: 0 }}>
                HOW WE DO IT
              </h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                Simple, Flexible, Done Right
              </h4>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-lg-2-4 col-md-6 coulmn wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="item">
              <div style={{ overflow: 'hidden', borderRadius: '50%', width: '150px', height: '150px', margin: '0 auto 30px' }}>
                <div
                  className="bg-img"
                  style={{ backgroundImage: `url(/assets/img/new-images/process/1.png)`, width: '100%', height: '100%' }}
                >
                </div>
              </div>
              <div className="cont">
                <h6 className="mb-10">STEP 1</h6>
                <p>Tell us about your space and requirements</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-2-4 col-md-6 coulmn wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="item">
              <div style={{ overflow: 'hidden', borderRadius: '50%', width: '150px', height: '150px', margin: '0 auto 30px' }}>
                <div
                  className="bg-img"
                  style={{ backgroundImage: `url(/assets/img/new-images/process/2.png)`, width: '100%', height: '100%' }}
                >
                </div>
              </div>
              <div className="cont">
                <h6 className="mb-10">STEP 2</h6>
                <p>Choose stock or customize your countertop</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-2-4 col-md-6 coulmn wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="item">
              <div style={{ overflow: 'hidden', borderRadius: '50%', width: '150px', height: '150px', margin: '0 auto 30px' }}>
                <div
                  className="bg-img"
                  style={{ backgroundImage: `url(/assets/img/new-images/process/3.png)`, width: '100%', height: '100%' }}
                >
                </div>
              </div>
              <div className="cont">
                <h6 className="mb-10">STEP 3</h6>
                <p>Get a clear, upfront quote</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-2-4 col-md-6 coulmn wow fadeInUp"
            data-wow-delay=".6s"
          >
            <div className="item">
              <div style={{ overflow: 'hidden', borderRadius: '50%', width: '150px', height: '150px', margin: '0 auto 30px' }}>
                <div
                  className="bg-img"
                  style={{ backgroundImage: `url(/assets/img/new-images/process/4.png)`, width: '100%', height: '100%' }}
                >
                </div>
              </div>
              <div className="cont">
                <h6 className="mb-10">STEP 4</h6>
                <p>We fabricate and prepare your materials</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-2-4 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="item">
              <div style={{ overflow: 'hidden', borderRadius: '50%', width: '150px', height: '150px', margin: '0 auto 30px' }}>
                <div
                   className="bg-img"
                   style={{ backgroundImage: `url(/assets/img/new-images/process/5.png)`, width: '100%', height: '100%' }}
                 >
                 </div>
               </div>
              <div className="cont">
                <h6 className="mb-10">STEP 5</h6>
                <p>Professional installation at your space</p>
              </div>
            </div>
          </div>
        </div>
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
        @media screen and (max-width: 991px) {
          .process {
            padding: 60px 0;
          }
          .section-head h4 {
            font-size: 24px !important;
          }
          .coulmn {
            margin-bottom: 40px;
          }
        }
        @media screen and (max-width: 767px) {
          .section-head h4 {
            font-size: 20px !important;
          }
          .sub-title {
            font-size: 12px !important;
            padding: 0 25px !important;
          }
          .sub-title:before, .sub-title:after {
            width: 15px;
          }
          .item div[style*="width: 150px"] {
            width: 120px !important;
            height: 120px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Process;
