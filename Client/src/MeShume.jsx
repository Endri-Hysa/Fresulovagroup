import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
        minHeight: "100vh",
      }}
    >
      <nav
  style={{
    background: "rgba(25, 24, 59, 0.88)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: isMobile ? "14px 18px" : "18px 8%",
    boxShadow: "0 6px 24px rgba(0, 0, 0, 0.12)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    margin: 0,
    border: "none",
  }}
>
        <div
          onClick={() => navigate("/")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: isMobile ? "10px" : "14px",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          <img
            src={logo}
            alt="FRE Sulova Logo"
            style={{
              height: isMobile ? "44px" : "54px",
            }}
          />
          <span
            style={{
              fontSize: isMobile ? "18px" : "21px",
              fontWeight: "700",
              letterSpacing: "0.4px",
              color: "white",
            }}
          >
            FRE SULOVA Group
          </span>
        </div>
      </nav>

      <div style={{ paddingTop: isMobile ? "120px" : "100px" }}>
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
            <div
              style={{
                backgroundColor: "white",
                borderRadius: isMobile ? "14px" : "20px",
                padding: isMobile ? "22px" : "30px",
                boxShadow: "0 14px 36px rgba(0,0,0,0.12)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 24px 60px rgba(0,0,0,0.18)";
                }
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,0.12)";
              }}
            >
              <h3
                style={{
                  color: "var(--dark-navy)",
                  fontSize: isMobile ? "1.2rem" : "1.4rem",
                  marginBottom: "15px",
                }}
              >
                Facade Insulation
              </h3>
              <p
                style={{
                  color: "rgb(60,60,60)",
                  lineHeight: "1.8",
                  fontSize: isMobile ? "0.95rem" : "1rem",
                }}
              >
                High-performance facade insulation using modern capot systems,
                designed to improve comfort, energy efficiency, and long-term durability.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "white",
                borderRadius: isMobile ? "14px" : "20px",
                padding: isMobile ? "22px" : "30px",
                boxShadow: "0 14px 36px rgba(0,0,0,0.12)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 24px 60px rgba(0,0,0,0.18)";
                }
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,0.12)";
              }}
            >
              <h3
                style={{
                  color: "var(--dark-navy)",
                  fontSize: isMobile ? "1.2rem" : "1.4rem",
                  marginBottom: "15px",
                }}
              >
                Exterior Works
              </h3>
              <p
                style={{
                  color: "rgb(60,60,60)",
                  lineHeight: "1.8",
                  fontSize: isMobile ? "0.95rem" : "1rem",
                }}
              >
                Exterior insulation, plastering, and decorative finishes for a modern appearance
                and reliable protection against weather conditions.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "white",
                borderRadius: isMobile ? "14px" : "20px",
                padding: isMobile ? "22px" : "30px",
                boxShadow: "0 14px 36px rgba(0,0,0,0.12)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 24px 60px rgba(0,0,0,0.18)";
                }
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,0.12)";
              }}
            >
              <h3
                style={{
                  color: "var(--dark-navy)",
                  fontSize: isMobile ? "1.2rem" : "1.4rem",
                  marginBottom: "15px",
                }}
              >
                Material Consulting
              </h3>
              <p
                style={{
                  color: "rgb(60,60,60)",
                  lineHeight: "1.8",
                  fontSize: isMobile ? "0.95rem" : "1rem",
                }}
              >
                Guidance in selecting high-quality materials for better durability,
                better finishes, and greater energy savings.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: isMobile ? "50px 5% 80px" : "80px 8% 100px", textAlign: "center" }}>
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
                  borderRadius: isMobile ? "14px" : "20px",
                  overflow: "hidden",
                  boxShadow: "0 14px 36px rgba(0,0,0,0.12)",
                  cursor: "pointer",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                }}
                onClick={() => setSelectedImage(src)}
                onMouseOver={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 24px 60px rgba(0,0,0,0.18)";
                  }
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,0.12)";
                }}
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
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.92)",
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
              borderRadius: isMobile ? "12px" : "18px",
              boxShadow: "0 0 40px rgba(255,255,255,0.15)",
              objectFit: "contain",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default MeShume;