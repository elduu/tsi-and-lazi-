
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { useNavigate } from "react-router-dom";
import { GiHeartInside } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";

export default function AllMessagesPage() {
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

  const RSVPCard = ({ name, wish }) => {
    return (
      <div className="rsvp-card-wedding">
        <div className="card-inner">
          <div className="rsvp-header">
            <FaHeart className="heart-icon" />
            <span className="rsvp-name">{name}</span>
          </div>

          <p className="rsvp-wish">
            "{wish}"
          </p>

          <div className="card-decoration">
            <GiHeartInside className="small-heart" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="all-messages-page">
      <div className="page-header">
        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>

        <h1>All Love Messages</h1>
      </div>

      <div className="messages-grid">
        {rsvps.length === 0 ? (
          <p className="loading-text">Loading love messages...</p>
        ) : (
          rsvps.map((r, index) => (
            <RSVPCard
              key={r.id || index}
              name={r.name}
              wish={r.wish}
            />
          ))
        )}
      </div>
    </section>
  );
}
