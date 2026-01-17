import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GuestPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://weddingapi.newblossomequb.net/api/wedding-photos")
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const telegramBotLink = "https://t.me/LaziandTsi_bot";

  return (
    <section className="section__container guest__photos__container" id="guest-photo">
      <button
        onClick={() => navigate(-1)}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 100,
          background: "rgba(78, 62, 62, 0.5)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "36px",
          height: "36px",
          fontSize: "1.8rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          transition: "all 0.2s",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = "rgba(0, 0, 0, 0.7)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = "rgba(0, 0, 0, 0.5)";
        }}
        aria-label="Go back"
      >
        ←
      </button>

      <h2 className="section__header">~ Guest Photos ~</h2>
      <p style={{ textAlign: "center", fontStyle: "italic", margin: "1rem 0 2rem" }}>
        Beautiful moments captured by our loved ones ❤️
      </p>

      <div
        style={{
          textAlign: "center",
          margin: "0 0 2.5rem 0",
          fontSize: "1.05rem",
        }}
      >
        <a
          href={telegramBotLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 20px",
            backgroundColor: "#b742bbfd",
            color: "white",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: "500",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            transition: "all 0.2s ease",
          }}
        >
          📸 Add your photo via Telegram
        </a>
      </div>

      {loading ? (
        <p style={{ textAlign: "center", fontSize: "1.2rem" }}>Loading photos...</p>
      ) : photos.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "1.2rem", padding: "4rem 1rem" }}>
          No guest photos yet — be the first to share! 📸
        </p>
      ) : (
        <div className="guest__photos__grid">
          {photos.map((photo) => (
            <div key={photo.url} className="guest__photo__item">
              <img
                src={photo.url}
                alt="Guest photo"
                style={{
                  width: "100%",
                  height: "320px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
              <p style={{ textAlign: "center", padding: "1rem", color: "#555" }}>
                From <strong>@{photo.sender || "Guest"}</strong>
                <br />
                <small>{new Date(photo.timestamp).toLocaleDateString()}</small>
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default GuestPhotos;
