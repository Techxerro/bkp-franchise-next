import { useState, useRef } from "react";
import gal1 from './assets/gallery1.webp';
import gal2 from './assets/gallery2.webp';
import gal3 from './assets/gallery3.webp';
import gal4 from './assets/gallery4.webp';
import gal5 from './assets/gallery5.webp';
import Image from "next/image";

const photos = [
  {
    src: gal1,
    alt: "BKP Pizza",
    caption: "Fresh Daily",
  },
  {
    src: gal5,
    alt: "BKP Restaurant",
    caption: "Dine In",
  },
  {
    src: gal2,
    alt: "BKP Kitchen",
    caption: "Made In-House",
  },
  {
    src: gal3,
    alt: "BKP Vibe",
    caption: "The Vibe",
  },
  {
    src: gal4,
    alt: "BKP Wings",
    caption: "Wings & More",
  },
];

export default function BKPPhotoGallery() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>

      <div className="bkp-gallery-root pb-5 mb-5">
        <div className="bkp-gallery-track">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="bkp-gallery-item"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                className="bkp-gallery-img"
                src={photo.src}
                alt={photo.alt}
              />
              <div className="bkp-gallery-overlay">
                <div className="bkp-gallery-caption">{photo.caption}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}