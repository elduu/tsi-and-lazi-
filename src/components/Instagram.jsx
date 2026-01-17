import React from "react";

const Instagram = () => {
  return (
    <section className="section__container instagram__container">
      <h2 className="section__header">~ photos ~</h2>
      <div className="instagram__flex">
        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((num) => (
          <img key={num} src={`assets/image-${num}.jpg`} alt="instagram" />
        ))}
      </div>
    </section>
  );
};

export default Instagram;
