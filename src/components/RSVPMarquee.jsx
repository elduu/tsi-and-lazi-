import React, { useEffect, useState } from "react";
import axios from "axios";
import { GiHeartInside } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";   // ← added for redirection

/* ---------- Marquee Component ---------- */
const Marquee = ({
  children,
  reverse = false,
  pauseOnHover = true,
  duration = "40s",
}) => {
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

/* ---------- Main Component ---------- */
export default function RSVPMarquee() {
  const [rsvps, setRsvps] = useState([]);
  const navigate = useNavigate();   // ← hook for navigation

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
      <h2 className="rsvp-title-wedding">Messages from Our Loved Ones</h2>

      <div className="marquee-wrapper">
        {/* Top row */}
        <Marquee duration="38s">
          {firstRow.map((r) => (
            <RSVPCard key={r.id} name={r.name} wish={r.wish} />
          ))}
        </Marquee>

        {/* Bottom row */}
        <Marquee reverse duration="42s">
          {secondRow.map((r) => (
            <RSVPCard key={r.id} name={r.name} wish={r.wish} />
          ))}
        </Marquee>

        <div className="fade-left-wedding" />
        <div className="fade-right-wedding" />
      </div>

      {/* Redirect Button */}
      {rsvps.length > 0 && (
        <div className="view-all-container">
          <button
            className="view-all-btn"
            onClick={() => navigate("/all-messages")}
          >
            View All Messages
          </button>
        </div>
      )}
    </section>
  );
}