import React, { useState, useEffect } from "react";

const GuestPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/wedding-photos")
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

  return (
    <section className="section__container guest__photos__container" style={{ padding: "4rem 1rem", minHeight: "100vh" ,id:"guest-photo"}}>
      <h2 className="section__header">~ Guest Photos ~</h2>
      <p style={{ textAlign: "center", fontStyle: "italic", margin: "1rem 0 3rem" }}>
        Beautiful moments captured by our loved ones ❤️
      </p>

      {loading ? (
        <p style={{ textAlign: "center", fontSize: "1.2rem" }}>Loading photos...</p>
      ) : photos.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "1.2rem", padding: "4rem" }}>
          No guest photos yet — be the first to share via our Telegram bot! 📸
        </p>
      ) : (
        <div className="guest__photos__grid">
          {photos.map((photo) => (
            <div key={photo.url} className="guest__photo__item">
              <img
                src={`http://localhost:5000${photo.url}`}
                alt="Guest photo"
                style={{ width: "100%", height: "320px", objectFit: "cover", borderRadius: "12px" }}
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

// ← ADD THIS LINE!
export default GuestPhotos;