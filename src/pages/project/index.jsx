/* eslint-disable @next/next/no-img-element */
import React from "react";
import LightLayout from "../../layouts/light";
import IntroWithVerticalTwo from "../../components/Intro-with-vertical-2";
import NextProject from "../../components/Next-Project";

const ProjectGallery = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);

  // Generate image paths
  const images = [];
  for (let i = 1; i <= 31; i++) {
    images.push(`/assets/img/gallery/1.1(${i}).png`);
  }

  const chunkImages = (items, size) => {
    const chunks = [];
    for (let i = 0; i < items.length; i += size) {
      chunks.push(items.slice(i, i + size));
    }
    return chunks;
  };

  const imageGroups = chunkImages(images, 5);

  return (
    <LightLayout>
      <IntroWithVerticalTwo
        customData={[
          {
            id: 1,
            title: { first: "PROJECT", second: "GALLERY" },
            content: {
              first: "Explore our completed projects and transformations.",
            },
            image: "/assets/img/hero/6.png",
          },
        ]}
      />

      <div className="bg-white pt-80 pb-80">
        <div className="container">
          {imageGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`gallery-layout ${group.length < 5 ? "gallery-remainder" : ""}`}
            >
              {group.map((img, index) => (
                <div key={index} className={`gallery-item item-${index + 1}`}>
                  <img src={img} alt={`Project ${groupIndex * 5 + index + 1}`} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <NextProject
        title="START YOUR PROJECT TODAY"
        text="Ready to transform your space? Contact our team for a consultation."
        btn1Text="Get Started"
      />

      <style jsx>{`
        .gallery-layout {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          grid-auto-rows: minmax(220px, auto);
          gap: 20px;
          margin-bottom: 40px;
        }

        .gallery-item {
          overflow: hidden;
          border-radius: 20px;
          position: relative;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.35s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.05);
        }

        .item-1 {
          grid-column: 1 / span 4;
          grid-row: 1 / span 2;
        }

        .item-2 {
          grid-column: 5 / span 2;
          grid-row: 1 / span 2;
        }

        .item-3 {
          grid-column: 1 / span 2;
          grid-row: 3 / span 1;
        }

        .item-4 {
          grid-column: 3 / span 2;
          grid-row: 3 / span 1;
        }

        .item-5 {
          grid-column: 5 / span 2;
          grid-row: 3 / span 1;
        }

        .gallery-list {
          display: none;
        }

        .gallery-remainder {
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          grid-auto-rows: minmax(240px, auto);
        }

        .gallery-remainder .gallery-item {
          grid-column: span 1 !important;
          grid-row: span 1 !important;
        }

        @media (max-width: 992px) {
          .gallery-layout {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            grid-auto-rows: minmax(220px, auto);
          }

          .item-1,
          .item-2,
          .item-5 {
            grid-column: span 4;
          }

          .item-3,
          .item-4 {
            grid-column: span 2;
          }
        }

        @media (max-width: 768px) {
          .gallery-layout,
          .gallery-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .item-1,
          .item-2,
          .item-3,
          .item-4,
          .item-5 {
            grid-column: span 2;
          }

          .gallery-thumb {
            min-height: 180px;
          }
        }
      `}</style>
    </LightLayout>
  );
};

export default ProjectGallery;