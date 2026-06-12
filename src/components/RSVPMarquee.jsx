import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { GiHeartInside } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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

        <p className="rsvp-wish truncate-wish">
          "{wish}"
        </p>

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
  const navigate = useNavigate();

  useEffect(() => {
    Papa.parse("/rsvps.csv", {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setRsvps(results.data);
      },
      error: (err) => {
        console.error("Error loading RSVP CSV:", err);
      },
    });
  }, []);

  const firstRow = rsvps.slice(0, Math.ceil(rsvps.length / 2));
  const secondRow = rsvps.slice(Math.ceil(rsvps.length / 2));

  return (
    <section className="rsvp-section-wedding">
      <h2 className="rsvp-title-wedding">
        Messages from Our Loved Ones
      </h2>

      <div className="marquee-wrapper">
        <Marquee duration="38s">
          {firstRow.map((r, index) => (
            <RSVPCard key={r.id || index} name={r.name} wish={r.wish} />
          ))}
        </Marquee>

        <Marquee reverse duration="42s">
          {secondRow.map((r, index) => (
            <RSVPCard key={r.id || index} name={r.name} wish={r.wish} />
          ))}
        </Marquee>

        <div className="fade-left-wedding" />
        <div className="fade-right-wedding" />
      </div>

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

      {/* ---------- ONLY ADDITION (3-LINE CUT CSS) ---------- */}
      <style>{`
        .truncate-wish {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}