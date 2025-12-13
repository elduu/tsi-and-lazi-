import React, { useEffect } from "react";
import Swiper from "swiper";
import ScrollReveal from "scrollreveal";

import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";
import Locations from "./components/Locations";
import GiftRegistry from "./components/GiftRegistry";
import Countdown from "./components/Countdown";
import SaveTheDate from "./components/SaveTheDate";
import "./App.css";
 // Keep your JS intact



function App() {
  useEffect(() => {
    // MENU TOGGLE
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const menuBtnIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    });

    navLinks.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    });

    // SCROLLREVEAL
    const scrollRevealOption = { distance: "50px", origin: "bottom", duration: 1000 };

    ScrollReveal().reveal(".about__container .section__header", scrollRevealOption);
    ScrollReveal().reveal(".about__container .section__description", { ...scrollRevealOption, delay: 500, interval: 500 });
    ScrollReveal().reveal(".about__container img", { ...scrollRevealOption, delay: 1500 });

    // ScrollReveal().reveal(".service__container .section__header", scrollRevealOption);
    // ScrollReveal().reveal(".service__container .section__description", { ...scrollRevealOption, delay: 500 });
    // ScrollReveal().reveal(".service__card", { duration: 1000, delay: 1000, interval: 500 });

    ScrollReveal().reveal(".blog__content .section__header", scrollRevealOption);
    ScrollReveal().reveal(".blog__content h4", { ...scrollRevealOption, delay: 500 });
    ScrollReveal().reveal(".blog__content p", { ...scrollRevealOption, delay: 1000 });
    ScrollReveal().reveal(".blog__content .blog__btn", { ...scrollRevealOption, delay: 1500 });

    // SWIPER
    new Swiper(".swiper", {
      loop: true,
      pagination: { el: ".swiper-pagination" },
    });

    // INSTAGRAM SCROLL DUPLICATE
    const instagram = document.querySelector(".instagram__flex");
    Array.from(instagram.children).forEach((item) => {
      const duplicateNode = item.cloneNode(true);
      duplicateNode.setAttribute("aria-hidden", true);
      instagram.appendChild(duplicateNode);
    });
  }, []); // runs once after mount

  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Services />
      <Countdown />
        <Locations />
      <Testimonials />
      <Gallery />
      <Blog />
      <Instagram />
      <Footer />
    <GiftRegistry />
    <SaveTheDate/>
    </div>
  );
}

export default App;


