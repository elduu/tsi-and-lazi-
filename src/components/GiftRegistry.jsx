// src/components/GiftRegistry.jsx
import { useRef, useState } from "react";
import { GiPresent } from "react-icons/gi";

const initialGifts = [
  { id: 1, name: "Dinnerware Set",              qty: 1,  taken: 0, reservedBy: "" },
  { id: 2, name: "Toaster",                     qty: 2,  taken: 1, reservedBy: "Aunt Linda" },
  { id: 3, name: "Champagne Flutes",            qty: 6,  taken: 4, reservedBy: "Sarah, Mike, John, Emma" },
  { id: 4, name: "Bedding Set (King)",          qty: 1,  taken: 0, reservedBy: "" },
  { id: 5, name: "Nespresso Machine",           qty: 1,  taken: 1, reservedBy: "Uncle Tom" },
  { id: 6, name: "Dutch Oven",                  qty: 1,  taken: 0, reservedBy: "" },
  { id: 7, name: "Robot Vacuum",                qty: 1,  taken: 0, reservedBy: "" },
  { id: 8, name: "Honeymoon Fund",              qty: 999, taken: 12, reservedBy: "Many loving friends" },
];

export default function GiftRegistry() {
  const [gifts, setGifts] = useState(initialGifts);
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const cardWidth = 400;
    const distance = dir === "left" ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: distance, behavior: "smooth" });
  };

  const reserveGift = (id) => {
    const name = prompt("Your name (so we can thank you!)");
    if (!name?.trim()) return;

    setGifts(gifts.map(gift =>
      gift.id === id && gift.taken < gift.qty
        ? {
            ...gift,
            taken: gift.taken + 1,
            reservedBy: gift.reservedBy ? `${gift.reservedBy}, ${name.trim()}` : name.trim()
          }
        : gift
    ));
  };

  const isFullyTaken = (gift) => gift.taken >= gift.qty;

  return (
    <section className="gift-registry" id="registry">
      <div className="section__container">
        <h2 className="section__header">~ GIFT REGISTRY ~</h2>
        <p className="section__description">
          Your presence is the best gift. If you'd like to contribute to our home,
          just tap "I'll Bring This" on any item.
        </p>

        {/* Arrows */}
        <button onClick={() => scroll("left")}  className="gift-arrow left"></button>
        <button onClick={() => scroll("right")} className="gift-arrow right"></button>

        <div className="gifts-scroll" ref={scrollRef}>
          <div className="gifts-grid">
            {gifts.map((gift) => (
              <div
                key={gift.id}
                className={`gift-card ${isFullyTaken(gift) ? "taken" : "available"}`}
              >
                <GiPresent className="gift-icon" />

                <h3>{gift.name}</h3>

                {/* Only show quantity badge */}
                <div className="qty-badge">
                  {gift.taken} / {gift.qty}
                </div>

                {isFullyTaken(gift) ? (
                  <div className="reserved">
                    Reserved by<br />
                    <strong>{gift.reservedBy}</strong>
                  </div>
                ) : (
                  <button
                    onClick={() => reserveGift(gift.id)}
                    className="bring-btn"
                  >
                    I’ll Bring This
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="thank-you">
          Thank you from the bottom of our hearts
        </p>
      </div>
    </section>
  );
}