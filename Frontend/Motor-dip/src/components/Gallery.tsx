import React, { useState } from "react";

interface Image {
  src: string;
  width: number;
  height: number;
  caption?: string;
}

interface GalleryProps {
  images: Image[];
}

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selected, setSelected] = useState<number[]>([]);

  const toggleSelect = (index: number) => {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      <style>{`
        /* Masonry container */
        .masonry {
          column-width: 320px;       /* auto-fit columns around this width */
          column-gap: 8px;
        }
        @media (max-width: 1024px) { .masonry { column-width: 280px; } }
        @media (max-width: 768px)  { .masonry { column-width: 220px; } }
        @media (max-width: 500px)  { .masonry { column-width: 100%;   } }

        /* Prevent items from splitting across columns */
        .masonry-item {
          display: inline-block;      /* required for multi-column masonry */
          width: 100%;
          margin: 0 0 8px;
          break-inside: avoid;
          -webkit-column-break-inside: avoid;
          -moz-column-break-inside: avoid;
          page-break-inside: avoid;   /* extra safety */
        }

        .masonry-item img {
          display: block;
          width: 100%;
          height: auto;               /* no cropping */
        }
      `}</style>

      <div className="masonry">
        {images.map((img, idx) => (
          <div
            key={img.src}
            className={`masonry-item relative cursor-pointer border-2 ${
              selected.includes(idx) ? "border-transparent" : "border-transparent"
            }`}
            onClick={() => toggleSelect(idx)}
          >
            <img src={img.src} alt={img.caption || `Image ${idx + 1}`} />
            {img.caption && (
              <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-sm p-1">
                {img.caption}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
