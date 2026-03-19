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
              <h6 className="custom-font wow fadeInDown" data-wow-delay=".3s">
                How We Do It
              </h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                How Our Online Quoting System Works
              </h4>
            </div>
          </div>
        </div>
        <div className=" row">
          <div
            className="col-lg-2-4 col-md-6 coulmn wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="item">
              <div
                className="bg-img"
                style={{ backgroundImage: `url(/assets/img/process/01.jpg)` }}
              >
                <h3 className="numb custom-font">01</h3>
              </div>
              <div className="cont">
                <h6 className="mb-10">STEP 1</h6>
                <p>Send photos, measurements, plans, or a live video walkthrough.</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-2-4 col-md-6 coulmn wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="item">
              <div
                className="bg-img"
                style={{ backgroundImage: `url(/assets/img/process/02.jpg)` }}
              >
                <h3 className="numb custom-font">02</h3>
              </div>
              <div className="cont">
                <h6 className="mb-10">STEP 2</h6>
                <p>Our team reviews the project and clarifies scope.</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-2-4 col-md-6 coulmn wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="item">
              <div
                className="bg-img"
                style={{ backgroundImage: `url(/assets/img/process/03.jpg)` }}
              >
                <h3 className="numb custom-font">03</h3>
              </div>
              <div className="cont">
                <h6 className="mb-10">STEP 3</h6>
                <p>We prepare a material quote and recommended options.</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-2-4 col-md-6 coulmn wow fadeInUp"
            data-wow-delay=".6s"
          >
            <div className="item">
              <div
                className="bg-img"
                style={{ backgroundImage: `url(/assets/img/process/04.jpg)` }}
              >
                <h3 className="numb custom-font">04</h3>
              </div>
              <div className="cont">
                <h6 className="mb-10">STEP 4</h6>
                <p>If needed, we help connect you with a local installer.</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-2-4 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="item">
              <div
                 className="bg-img"
                 style={{ backgroundImage: `url(/assets/img/process/04.jpg)` }}
               >
                 <h3 className="numb custom-font">05</h3>
               </div>
              <div className="cont">
                <h6 className="mb-10">STEP 5</h6>
                <p>You move forward with confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
