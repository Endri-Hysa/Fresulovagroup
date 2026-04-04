import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Nav from "./Nav";
import Hero from "./Hero";
import Punimet from "./Punimet";
import Rreth from "./Rreth";
import Kontakt from "./Kontakt";
import Footer from "./Footer";
import MeShume from "./MeShume";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function RouteEffects() {
  const location = useLocation();
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    if (!elements.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => { el.classList.remove("show"); observer.observe(el); });
    return () => { elements.forEach((el) => observer.unobserve(el)); observer.disconnect(); };
  }, [location.pathname]);
  return null;
}

function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stat-item">
        <h3>200+</h3>
        <p>Projects Completed</p>
      </div>
      <div className="stat-item">
        <h3>12+</h3>
        <p>Years of Experience</p>
      </div>
      <div className="stat-item">
        <h3>98%</h3>
        <p>Client Satisfaction</p>
      </div>
      <div className="stat-item">
        <h3>50+</h3>
        <p>Expert Team Members</p>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <StatsBar />
      <div className="fade-in">
        <Punimet />
      </div>
      <div className="fade-in">
        <Rreth />
      </div>
      <div className="fade-in">
        <Kontakt />
      </div>
    </>
  );
}

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      setShowScrollTop(scrollPosition > 300);
      setShowScrollBottom(scrollPosition + windowHeight < documentHeight - 100);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <RouteEffects />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meshome" element={<MeShume />} />
      </Routes>

      <Footer />

      <button
        className={`scroll-to-top ${showScrollTop ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>

      <button
        className={`scroll-to-bottom ${showScrollBottom ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })}
        aria-label="Scroll to bottom"
      >
        <FaArrowDown />
      </button>
    </Router>
  );
}

export default App;
