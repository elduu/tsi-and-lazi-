import React from "react";

export default function Locations() {
  return (
    <section className="map-section" id="locations">
      <div className="section__container">
        <h2 className="section__header">IMPORTANT LOCATIONS</h2>
        <p className="section__description">
        </p>
        <div className="map-container">
          <iframe
            title="Wedding Locations"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/d/u/0/embed?mid=1nyA_e-StfqP_BEXT9YbetVcnJTw9TuU"
          />
        </div>

        {/* Clickable location buttons */}
        <div className="map-labels">
          <a
            href="https://maps.app.goo.gl/pmQ9Y3CnbZFzoQKo6?g_st=atm"
            target="_blank"
            rel="noopener noreferrer"
            className="label icon-groom"
          >
            Groom’s House
          </a>

          <a
            href="https://maps.google.com/maps?q=9.000472,38.694680&ll=9.000472,38.694680&z=16"
            target="_blank"
            rel="noopener noreferrer"
            className="label icon-bride"
          >
            Bride’s House
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
