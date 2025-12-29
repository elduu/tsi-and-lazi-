import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import RSVPForm from "./components/RSVPForm";
import RSVPMarquee from "./components/RSVPMarquee";
import GuestPhotos from "./components/GuestPhotos"; // ← Make sure this exists

import "./App.css";

function HomePage() {
  useEffect(() => {
    // MENU TOGGLE
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const menuBtnIcon = menuBtn?.querySelector("i");

    const toggleMenu = () => {
      navLinks?.classList.toggle("open");
      const isOpen = navLinks?.classList.contains("open");
      menuBtnIcon?.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    };

    menuBtn?.addEventListener("click", toggleMenu);
    navLinks?.addEventListener("click", toggleMenu);

    // SCROLLREVEAL
    const scrollRevealOption = { distance: "50px", origin: "bottom", duration: 1000 };

    ScrollReveal().reveal(".about__container .section__header", scrollRevealOption);
    ScrollReveal().reveal(".about__container .section__description", { ...scrollRevealOption, delay: 500, interval: 500 });
    ScrollReveal().reveal(".about__container img", { ...scrollRevealOption, delay: 1500 });

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
    if (instagram) {
      Array.from(instagram.children).forEach((item) => {
        const duplicateNode = item.cloneNode(true);
        duplicateNode.setAttribute("aria-hidden", true);
        instagram.appendChild(duplicateNode);
      });
    }

    // Cleanup listeners on unmount
    return () => {
      menuBtn?.removeEventListener("click", toggleMenu);
      navLinks?.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <>
      <Header />
      <About />
      <SaveTheDate />
      <Countdown />
      <Services />
      <Locations /> 
      <Gallery />
      <Blog />
      <Instagram />
      <RSVPForm />
      <RSVPMarquee />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guest-photos" element={<GuestPhotos />} />
      </Routes>
    </Router>
  );
}

export default App;