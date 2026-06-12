import React from "react";

export default function Locations() {
  return (
    <section className="map-section" id="locations">
      <div className="section__container">
        <h2 className="section__header">IMPORTANT LOCATIONS</h2>

        <p className="section__description">
          Find the important locations for our special day. Click any location
          below to open it directly in Google Maps.
        </p>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d504256.91379971115!2d38.7330455!3d9.1085816!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2set!4v1774871582407!5m2!1sen!2set"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding Locations Map"
          />
        </div>

        <div className="map-labels">
          <a
            href="https://maps.google.com/maps?q=8.956942,38.691850&ll=8.956942,38.691850&z=16"
            target="_blank"
            rel="noopener noreferrer"
            className="label icon-groom"
          >
            Groom's House
          </a>

          <a
            href="https://maps.google.com/maps?q=9.000472,38.694680&ll=9.000472,38.694680&z=16"
            target="_blank"
            rel="noopener noreferrer"
            className="label icon-bride"
          >
            Bride's House
          </a>

          <a
            href="https://maps.app.goo.gl/47hwQkDJmd5erfTB9?g_st=it"
            target="_blank"
            rel="noopener noreferrer"
            className="label icon-church"
          >
            Church
          </a>
        </div>
      </div>
    </section>
  );
}