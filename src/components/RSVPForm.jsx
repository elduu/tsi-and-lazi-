import React, { useState } from "react";
import axios from "axios";

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    attending: "yes",
    wish: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://laziandtsi-wed-cddlds-eff60a-68-183-172-126.traefik.me/rsvp", formData);
      alert(response.data.message);
      setFormData({ name: "", attending: "yes", wish: "" });
    } catch (error) {
      console.error(error);
      alert("Error submitting RSVP");
    }
  };

  return (
    <div style={{
      backgroundColor: "#ffffff",
      padding: "3rem",
      borderRadius: "12px",
      maxWidth: "600px",
      margin: "3rem auto",
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <h2 style={{
        textAlign: "center",
        marginBottom: "2rem",
        fontSize: "2rem",
        color: "#333333",
        letterSpacing: "1px"
      }}>RSVP</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            padding: "0.75rem 1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            outline: "none",
            transition: "0.3s",
          }}
        />
        <div style={{ display: "flex", gap: "2rem", fontSize: "1rem", color: "#555555" }}>
          <label>
            <input
              type="radio"
              name="attending"
              value="yes"
              checked={formData.attending === "yes"}
              onChange={handleChange}
              style={{ marginRight: "0.5rem" }}
            />
            Yes, I will come
          </label>
          <label>
            <input
              type="radio"
              name="attending"
              value="no"
              checked={formData.attending === "no"}
              onChange={handleChange}
              style={{ marginRight: "0.5rem" }}
            />
            No, I won’t
          </label>
        </div>
        <textarea
          name="wish"
          placeholder="Leave your wishes or thoughts..."
          value={formData.wish}
          onChange={handleChange}
          rows={6} // bigger space for comments
          style={{
            padding: "1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            resize: "vertical",
            outline: "none",
            transition: "0.3s",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#000000", // black button
            color: "white",
            padding: "0.85rem",
            border: "none",
            borderRadius: "8px",
            fontSize: "1.1rem",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "0.3s",
          }}
          onMouseEnter={e => e.target.style.backgroundColor = "#333333"}
          onMouseLeave={e => e.target.style.backgroundColor = "#000000"}
        >
          Submit RSVP
        </button>
      </form>
    </div>
  );
};

export default RSVPForm;
