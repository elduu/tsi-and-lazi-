import React from 'react';
 // ← make sure this file exists

export default function Locations() {
  return (
    <section className="map-section" id="locations">
      <div className="section__container">
        <h2 className="section__header">~ IMPORTANT LOCATIONS ~</h2>
        <p className="section__description">
          Groom’s House • Bride’s House • Ceremony Church
        </p>

        <div className="map-container">
         <iframe
  title="Wedding Locations"
  width="100%"
  height="550"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/d/u/0/embed?mid=1nyA_e-StfqP_BEXT9YbetVcnJTw9TuU&ehbc=2E312F" >
</iframe>

          {/* Optional: Custom labels below the map */}
          <div className="map-labels">
            <div className="label">
              icon-groom"Groom’s House</div>
            <div className="label               icon-bride">Bride’s House</div>
            <div className="label                icon-church">Ceremony Church</div>
          </div>
        </div>
      </div>
    </section>
  );
}