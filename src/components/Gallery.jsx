import React from "react";
import { useNavigate } from "react-router-dom"; // ← Add this import

const Gallery = () => {
  const navigate = useNavigate(); // ← Hook to navigate programmatically

  const handleViewGallery = () => {
    navigate("/guest-photos"); // ← Change this to your desired route
  };

  return (
    <section className="section__container gallery__container">
      <h2 className="section__header">~ GALLERY ~</h2>
      <div className="gallery__grid">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <img
            key={num}
            src={`/assets/image-${num}.jpg`} // ← Use /assets if in public folder
            alt={`Bride and groom gallery ${num}`}
            className="gallery__img"
          />
        ))}
      </div>
      <div className="gallery__btn">
        <button className="btn" onClick={handleViewGallery}>
          VIEW GUEST PHOTOS
        </button>
      </div>
    </section>
  );
};

export default Gallery;