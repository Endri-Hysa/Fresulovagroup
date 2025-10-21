import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Hero from "./Hero";
import Punimet from "./Punimet";
import Rreth from "./Rreth";
import Kontakt from "./Kontakt";
import Footer from "./Footer";
import MeShume from "./MeShume";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Hero />
              <Punimet />
              <Rreth />
              <Kontakt />
            </>
          }
        />
        <Route path="/meshome" element={<MeShume />} />
      </Routes>
      <Footer />
      
      <button
        className={`scroll-to-top ${showScrollTop ? "show" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>

      <button
        className={`scroll-to-bottom ${showScrollBottom ? "show" : ""}`}
        onClick={scrollToBottom}
        aria-label="Scroll to bottom"
      >
        <FaArrowDown />
      </button>
    </Router>
  );
}

export default App;