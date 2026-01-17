import React, { useEffect, useState } from "react";
import axios from "axios";
import { GiHeartInside } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";

/* ---------- Marquee Component ---------- */
const Marquee = ({
  children,
  reverse = false,
  pauseOnHover = true,
  duration = "40s",
}) => {
  // Duplicate content 3 times for perfect seamless loop
  const repeatedChildren = [...children, ...children, ...children];

  return (
    <div
      className={`marquee ${pauseOnHover ? "pause-on-hover" : ""}`}
      style={{ "--duration": duration }}
    >
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {repeatedChildren}
      </div>
    </div>
  );
};

/* ---------- RSVP Card Component ---------- */
const RSVPCard = ({ name, wish }) => {
  return (
    <div className="rsvp-card-wedding">
      <div className="card-inner">
        <div className="rsvp-header">
          <FaHeart className="heart-icon" />
          <span className="rsvp-name">{name}</span>
        </div>
        <p className="rsvp-wish">"{wish}"</p>
        <div className="card-decoration">
          <GiHeartInside className="small-heart" />
        </div>
      </div>
    </div>
  );
};

/* ---------- Main RSVPMarquee Component ---------- */
export default function RSVPMarquee() {
  const [rsvps, setRsvps] = useState([]);

  useEffect(() => {
    axios
      .get("https://weddingapi.newblossomequb.net/rsvp")
      .then((res) => setRsvps(res.data))
      .catch((err) => console.error("Error fetching RSVPs:", err));
  }, []);

  const firstRow = rsvps.slice(0, Math.ceil(rsvps.length / 2));
  const secondRow = rsvps.slice(Math.ceil(rsvps.length / 2));

  return (
    <section className="rsvp-section-wedding">
      <h2 className="rsvp-title-wedding">
        Messages from Our Loved Ones
      </h2>

      <div className="marquee-wrapper">
        {/* Top row — left to right */}
        <Marquee duration="45s">
          {firstRow.map((r) => (
            <RSVPCard key={r.id} name={r.name} wish={r.wish} />
          ))}
        </Marquee>

        {/* Bottom row — right to left */}
        <Marquee reverse duration="50s">
          {secondRow.map((r) => (
            <RSVPCard key={r.id} name={r.name} wish={r.wish} />
          ))}
        </Marquee>

        {/* Fade overlays */}
        <div className="fade-left-wedding" />
        <div className="fade-right-wedding" />
      </div>
    </section>
  );
}