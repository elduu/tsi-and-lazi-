import React from "react";

const Header = () => {
  return (
    <header className="header" id="home">
      <nav>
        <div className="nav__header">
          <div className="nav__logo">
            <a href="#">
              <img src="assets/ring (1).png" alt="logo" />
            </a>
          </div>
          <div className="nav__menu__btn" id="menu-btn">
            <i className="ri-menu-line"></i>
          </div>
        </div>
        <ul className="nav__links" id="nav-links">
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">CALANDER</a></li>
          <li><a href="#service">LOCATION</a></li>
          <li className="nav__logo">
            <a href="#">
              <img src="assets/ring (1).png" alt="logo" />
            </a>
          </li>
          <li><a href="#client">GIFTS</a></li>
          <li><a href="#blog">OUTLINE</a></li>
          <li><a href="#contact">PHOTOS</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
