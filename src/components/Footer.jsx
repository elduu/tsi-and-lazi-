import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="section__container footer__container">
        {/* Compact Layout: Centered Couple Info + Links + Message */}
        <div className="footer__compact">
          <div className="couple__info">
            <h3 className="couple__names">Alazar & Tsion</h3>
            <p className="wedding__date">January 31, 2026</p>
          </div>

          <ul className="footer__links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Our Story</a></li>
            <li><a href="#service">The Day</a></li>
            <li><a href="/guest-photos">Guest Photos</a></li>
            <li><a href="#rsvp">RSVP</a></li>
            <li><a href="#registry">Gift Registry</a></li>
          </ul>

          <div className="footer__message">
            <p>Thank you for celebrating with us ♡</p>
          </div>
        </div>

        {/* Social Icons (small) */}
        <div className="footer__socials">
          <a href="#" aria-label="Instagram"><i className="ri-instagram-line"></i></a>
          <a href="#" aria-label="Facebook"><i className="ri-facebook-fill"></i></a>
          <a href="#" aria-label="Pinterest"><i className="ri-pinterest-line"></i></a>
        </div>
      </div>

      {/* Minimal Bottom Bar */}
      <div className="footer__bar">
        © {new Date().getFullYear()} Bride & Groom • With love, always
      </div>
    </footer>
  );
};

export default Footer;