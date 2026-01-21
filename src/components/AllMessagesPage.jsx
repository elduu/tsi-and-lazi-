import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GiHeartInside } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";

export default function AllMessagesPage() {
  const [rsvps, setRsvps] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://weddingapi.newblossomequb.net/rsvp")
      .then((res) => setRsvps(res.data))
      .catch((err) => console.error("Error fetching RSVPs:", err));
  }, []);

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

  return (
    <section className="all-messages-page">
      <div className="page-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back to Home
        </button>
        <h1>All Love Messages</h1>
      </div>

      <div className="messages-grid">
        {rsvps.length === 0 ? (
          <p className="loading-text">Loading love messages...</p>
        ) : (
          rsvps.map((r) => (
            <RSVPCard key={r.id} name={r.name} wish={r.wish} />
          ))
        )}
      </div>
    </section>
  );
}