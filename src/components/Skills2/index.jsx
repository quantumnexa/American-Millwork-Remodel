import React from 'react'
import skillsProgress from '../../common/skillsProgress';
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
                <h6 className="sub-title main-color mb-10 ls10" style={{ color: '#B68C4A', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: '500' }}>OUR EXPERTISE</h6>
                <h2 className="playfont mb-20">
                  Crafting Excellence in <span className="text-highlight">Millwork</span> and <span className="text-highlight">Remodeling</span>.
                </h2>
                <p className="mb-10">
                  At American Millwork & Remodel, we pride ourselves on delivering superior craftsmanship and attention to detail. Our team brings decades of experience to every project, ensuring that your vision is brought to life with precision and quality.
                </p>
                <p>
                  From large-scale commercial build-outs to custom residential transformations, we handle every step of the process with a focus on speed, quality, and client satisfaction.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="skills-box full-width">
                <div className="skill-item mb-30">
                  <div className="d-flex justify-content-between align-items-center mb-10">
                    <h6 className="fz-14 mb-0">Commercial Millwork</h6>
                    <span className="fz-14 main-color fw-600">95%</span>
                  </div>
                  <div className="skill-progress" style={{ height: '4px', background: 'rgba(182, 140, 74, 0.1)', position: 'relative' }}>
                    <div className="progres custom-font" data-value="95%" style={{ width: '0%', height: '100%', background: '#B68C4A', transition: 'width 1.5s ease' }}></div>
                  </div>
                </div>
                <div className="skill-item mb-30">
                  <div className="d-flex justify-content-between align-items-center mb-10">
                    <h6 className="fz-14 mb-0">Residential Remodeling</h6>
                    <span className="fz-14 main-color fw-600">90%</span>
                  </div>
                  <div className="skill-progress" style={{ height: '4px', background: 'rgba(182, 140, 74, 0.1)', position: 'relative' }}>
                    <div className="progres custom-font" data-value="90%" style={{ width: '0%', height: '100%', background: '#B68C4A', transition: 'width 1.5s ease' }}></div>
                  </div>
                </div>
                <div className="skill-item mb-30">
                  <div className="d-flex justify-content-between align-items-center mb-10">
                    <h6 className="fz-14 mb-0">Design & Shop Drawings</h6>
                    <span className="fz-14 main-color fw-600">85%</span>
                  </div>
                  <div className="skill-progress" style={{ height: '4px', background: 'rgba(182, 140, 74, 0.1)', position: 'relative' }}>
                    <div className="progres custom-font" data-value="85%" style={{ width: '0%', height: '100%', background: '#B68C4A', transition: 'width 1.5s ease' }}></div>
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