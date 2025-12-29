export default function HeroSaveTheDate() {
  return (
    <section className="hero-save-the-date">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-names">
          {/* Alazar */}
          <div className="handwriting-text">
            <svg viewBox="0 0 900 220" className="handwriting-svg">
              <text
                x="50%"
                y="65%"
                textAnchor="middle"
                className="handwriting-name"
              >
                Alazar
              </text>
            </svg>
          </div>

          <span className="hero-and">&amp;</span>

          {/* Tsion */}
          <div className="handwriting-text delay">
            <svg viewBox="0 0 900 220" className="handwriting-svg">
              <text
                x="50%"
                y="65%"
                textAnchor="middle"
                className="handwriting-name"
              >
                Tsion
              </text>
            </svg>
          </div>
        </div>

        <h2 className="hero-title">SAVE THE DATE</h2>

        <div className="hero-divider">
          <span className="hero-ornament">❦</span>
          <span className="hero-line"></span>
          <span className="hero-ornament">❦</span>
        </div>

        <p className="hero-date">JANUARY 31ST | AT 8:00 LTE</p>
        <p className="hero-venue">AT KERANIO BETHEL KALE HIWOT CHURCH</p>
      </div>
    </section>
  );
}
