import React from 'react'
import skillsProgress from '../../../common/skillsProgress';
const Skills2 = () => {
  React.useEffect(() => {
    skillsProgress()
  }, [])
    return (
      <div className="skills-sec section-padding pt-80">
        <div className="container-fluid padding5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="content pr-60">
                <h6 className="sub-title main-color mb-10 ls10" style={{ color: '#B68C4A', paddingLeft: 0 }}>OUR EXPERTISE</h6>
                <h2 className="playfont mb-20">
                  Precision <span className="text-highlight">Kitchen Design</span> & Technical <span className="text-highlight">Planning</span>
                </h2>
                <p className="mb-40">
                  Our team specializes in the technical details that make a kitchen remodel successful. From precise cabinet measurements to custom island layouts, we provide the expertise needed for a perfect fit.
                </p>
              </div>
              <style jsx>{`
                .sub-title {
                   display: inline-block;
                   padding: 0 35px !important;
                   position: relative;
                   letter-spacing: 4px;
                   text-transform: uppercase;
                   font-weight: 500;
                   font-style: normal !important;
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
            </div>
            <div className="col-lg-6">
              <div className="skills-box">
                <div className="skill-item mb-30">
                  <h6 className="fz-14 mb-10">Custom Cabinetry Design</h6>
                  <div className="skill-progress">
                    <div className="progres" data-value="95%"></div>
                  </div>
                </div>
                <div className="skill-item mb-30">
                  <h6 className="fz-14 mb-10">Space Optimization</h6>
                  <div className="skill-progress">
                    <div className="progres" data-value="90%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h6 className="fz-14 mb-10">Material Coordination</h6>
                  <div className="skill-progress">
                    <div className="progres" data-value="85%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Skills2
