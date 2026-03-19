import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const PageHeader = ({ title, fullPath, image, text }) => {
  const router = useRouter();
  return (
    <header
      className="pages-header bg-img valign parallaxie cta__slider-item"
      style={{
        backgroundImage: `url(${!image ? "/assets/img/pg1.jpg" : image})`,
      }}
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="caption" style={{ padding: '60px 40px', position: 'relative' }}>
              <span className="top-corn"></span>
              <span className="bottom-corn"></span>
              
              <div className="custom-font text-center">
                <h1 
                  className="words chars splitting" 
                  style={{ 
                    opacity: 1, 
                    visibility: 'visible', 
                    fontSize: '50px',
                    color: '#fff',
                    marginBottom: '20px'
                  }}
                >
                  {title}
                </h1>
              </div>

              {text && (
                <p 
                  className="mt-10 text-center" 
                  style={{ 
                    opacity: 1, 
                    transform: 'none', 
                    maxWidth: '800px', 
                    margin: '0 auto 20px', 
                    fontSize: '16px', 
                    lineHeight: '1.8',
                    color: '#eee'
                  }}
                >
                  {text}
                </p>
              )}

              <div className="path text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                {fullPath.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <Link href={item.url}>
                      <a
                        className={router.pathname == item.url ? "active" : ""}
                        style={{ 
                          color: router.pathname == item.url ? '#B68C4A' : '#fff', 
                          fontSize: '12px', 
                          fontWeight: '500', 
                          letterSpacing: '2px', 
                          textTransform: 'uppercase' 
                        }}
                      >
                        {item.name}
                      </a>
                    </Link>
                    {index != fullPath.length - 1 ? <span style={{ margin: '0 15px', fontSize: '12px', color: '#fff' }}>/</span> : ""}
                  </React.Fragment>
                ))}
              </div>

              <div className="buttons-row valign justify-content-center" style={{ display: 'flex', gap: '30px', marginTop: '40px' }}>
                <Link href="/work1">
                  <a className="btn-curve btn-color">
                    <span>Get My Quote</span>
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="btn-curve btn-lit">
                    <span>Contact Us</span>
                  </a>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
