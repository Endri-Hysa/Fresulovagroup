import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import logo from "./assets/logojobc.png";

import punim1 from "./assets/punim1.jpg";
import punim2 from "./assets/punim2.jpg";
import punim3 from "./assets/punim3.jpg";
import punim4 from "./assets/punim4.jpg";
import punim5 from "./assets/punim5.jpg";
import punim6 from "./assets/punim6.jpg";
import punim7 from "./assets/punim7.jpg";
import punim8 from "./assets/punim8.jpg";
import punim9 from "./assets/punim9.jpg";
import punim10 from "./assets/punim10.jpg";
import punim11 from "./assets/punim11.jpg";
import punim12 from "./assets/punim12.jpg";
import punim13 from "./assets/punim13.jpg";

function MeShume() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const punime = [
    punim1, punim2, punim3, punim4, punim5, punim6, punim7,
    punim8, punim9, punim10, punim11, punim12, punim13,
  ];

  return (
    <div
      style={{
        backgroundColor: "var(--light-mint)",
        color: "var(--dark-navy)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "var(--dark-navy)",
          padding: isMobile ? "15px 5%" : "20px 8%",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: isMobile ? "10px" : "15px",
          cursor: "pointer",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
        onClick={() => navigate("/")}
      >
        <img
          src={logo}
          alt="FRE Sulova logo"
          style={{
            height: isMobile ? "40px" : "55px",
            width: isMobile ? "40px" : "55px",
          }}
        />
        <h2 style={{ 
          fontSize: isMobile ? "16px" : "22px", 
          fontWeight: "600", 
          letterSpacing: "0.5px" 
        }}>
          FRE SULOVA Group
        </h2>
      </nav>

      {/* Services Section */}
      <section style={{ padding: isMobile ? "50px 5%" : "80px 8%", textAlign: "center" }}>
        <div style={{ marginBottom: isMobile ? "35px" : "50px" }}>
          <h2
            style={{
              fontSize: isMobile ? "1.75rem" : "2.5rem",
              color: "var(--dark-navy)",
              fontWeight: "700",
            }}
          >
            Our Services
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
            gap: isMobile ? "20px" : "30px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <div style={cardStyle}>
            <h3 style={titleStyle}>
              Facade Insulation
            </h3>
            <p style={textStyle}>
              Use of the capot system for maximum energy efficiency in every building,
              while maintaining aesthetics and durability.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={titleStyle}>
              Exterior Works
            </h3>
            <p style={textStyle}>
              Insulation, plastering, and decorative finishes for a modern look and
              protection against weather conditions.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={titleStyle}>
              Material Consulting
            </h3>
            <p style={textStyle}>
              Selection of the highest quality materials for long-term durability
              and energy savings for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section style={{ padding: isMobile ? "50px 5%" : "80px 8%", textAlign: "center" }}>
        <div style={{ marginBottom: isMobile ? "35px" : "50px" }}>
          <h2
            style={{
              fontSize: isMobile ? "1.75rem" : "2.5rem",
              color: "var(--dark-navy)",
              fontWeight: "700",
            }}
          >
            Some of Our Projects
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
            gap: isMobile ? "20px" : "30px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {punime.map((src, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: isMobile ? "12px" : "15px",
                overflow: "hidden",
                boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onClick={() => setSelectedImage(src)}
              onMouseOver={(e) => !isMobile && (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <img
                src={src}
                alt={`Project ${i + 1}`}
                style={{
                  width: "100%",
                  height: isMobile ? "220px" : "280px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Image popup */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            cursor: "pointer",
            padding: isMobile ? "20px" : "40px",
          }}
        >
          <img
            src={selectedImage}
            alt="Selected project"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              borderRadius: isMobile ? "10px" : "15px",
              boxShadow: "0 0 30px rgba(255,255,255,0.2)",
              objectFit: "contain",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default MeShume;