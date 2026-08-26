import React from "react";

function GalleryLightbox({ image, onClose }) {
  return (
    <div className="gallery-lightbox" onClick={onClose}>
      <button className="gallery-close" onClick={onClose} aria-label="Close image">
        ×
      </button>

      <img
        src={image.src}
        alt={image.title}
        onClick={(e) => e.stopPropagation()}
      />

      <div className="lightbox-title">
        <span>{image.category}</span>
        <h3>{image.title}</h3>
      </div>
    </div>
  );
}

export default GalleryLightbox;
