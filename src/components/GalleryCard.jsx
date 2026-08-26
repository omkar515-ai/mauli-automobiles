import React from "react";

// Memoized so opening/closing the lightbox or typing in search doesn't
// force all 15 gallery tiles to re-render.
function GalleryCard({ image, index, onSelect }) {
  return (
    <div
      className={`gallery-card gallery-card-${index + 1}`}
      onClick={() => onSelect(image)}
    >
      <img src={image.src} alt={image.title} loading="lazy" />

      <div className="gallery-overlay">
        <div>
          <span>{image.category}</span>
          <h3>{image.title}</h3>
        </div>

        <div className="gallery-view">↗</div>
      </div>
    </div>
  );
}

export default React.memo(GalleryCard);
