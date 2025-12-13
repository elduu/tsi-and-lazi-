import React from "react";

const Testimonials = () => {
  const clients = [
    { img: "assets/client-1.jpg", text: "Capturer exceeded all our expectations! Their attention to detail...", name: "Sarah and Michael" },
    { img: "assets/client-2.jpg", text: "We couldn't be happier with our family portrait session with Capturer...", name: "The Johnson Family" },
    { img: "assets/client-3.jpg", text: "Capturer's maternity and newborn sessions captured the most precious moments...", name: "Emily and David" },
  ];

  return (
    <section className="section__container client__container" id="client">
      <h2 className="section__header">~ TESTIMONIALS ~</h2>
      <div className="swiper">
        <div className="swiper-wrapper">
          {clients.map((client, idx) => (
            <div key={idx} className="swiper-slide">
              <div className="client__card">
                <img src={client.img} alt="client" />
                <p>{client.text}</p>
                <h4>{client.name}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Testimonials;
