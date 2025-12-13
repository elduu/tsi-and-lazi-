import React from "react";

const Gallery = () => {
  return (
    <section className="section__container gallery__container">
      <h2 className="section__header">~ GALLERY ~</h2>
      <div className="gallery__grid">
        {[1,2,3,4,5,6,7,8].map((num) => (
          <img key={num} src={`assets/image-${num}.jpg`} alt="gallery" />
        ))}
      </div>
      <div className="gallery__btn">
        <button className="btn">VIEW GALLERY</button>
      </div>
    </section>
  );
};

export default Gallery;
