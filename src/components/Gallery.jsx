import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const images = [1, 2, 3, 4, 5, 6, 7, 8].map(
  (num) => `/assets/image-${num}.jpg`
);

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleViewGallery = () => {
    navigate("/guest-photos");
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const minSwipe = 50;

    if (distance > minSwipe) nextImage();     // swipe left
    if (distance < -minSwipe) prevImage();    // swipe right
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = images[selectedIndex];
    link.download = images[selectedIndex].split("/").pop();
    link.click();
  };

  return (
    <>
      <section className="section__container gallery__container">
        <h2 className="section__header">~ GALLERY ~</h2>

        <div className="gallery__grid">
          {images.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Gallery ${index + 1}`}
              className="gallery__img"
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>

        <div className="gallery__btn">
          <button className="btn" onClick={handleViewGallery}>
            VIEW GUEST PHOTOS
          </button>
        </div>
      </section>

      {selectedIndex !== null && (
        <div
          className="image__overlay"
          onClick={() => setSelectedIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={images[selectedIndex]}
            alt="Full screen"
            className="image__fullscreen"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Controls */}
          <button
            className="image__close"
            onClick={() => setSelectedIndex(null)}
          >
            ✕
          </button>

          <button
            className="image__nav left"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            ‹
          </button>

          <button
            className="image__nav right"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            ›
          </button>

          <button
            className="image__download"
            onClick={(e) => {
              e.stopPropagation();
              downloadImage();
            }}
          >
            ⬇ Download
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
