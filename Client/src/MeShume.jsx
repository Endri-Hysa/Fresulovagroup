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

      {/* Seksioni Shërbimet tona */}
      <section style={{ padding: isMobile ? "50px 5%" : "80px 8%", textAlign: "center" }}>
        <div style={{ marginBottom: isMobile ? "35px" : "50px" }}>
          <h2
            style={{
              fontSize: isMobile ? "1.75rem" : "2.5rem",
              color: "var(--dark-navy)",
              fontWeight: "700",
            }}
          >
            Shërbimet tona
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
              borderRadius: isMobile ? "12px" : "15px",
              padding: isMobile ? "20px" : "30px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => !isMobile && (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <h3 style={{ 
              color: "var(--dark-navy)", 
              fontSize: isMobile ? "1.2rem" : "1.4rem", 
              marginBottom: "15px" 
            }}>
              Izolim fasade
            </h3>
            <p style={{ 
              color: "rgb(60,60,60)", 
              lineHeight: "1.7",
              fontSize: isMobile ? "0.95rem" : "1rem"
            }}>
              Përdorim i sistemit kapot për efikasitet maksimal energjetik në
              çdo objekt, duke ruajtur estetikën dhe qëndrueshmërinë.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: isMobile ? "12px" : "15px",
              padding: isMobile ? "20px" : "30px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => !isMobile && (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <h3 style={{ 
              color: "var(--dark-navy)", 
              fontSize: isMobile ? "1.2rem" : "1.4rem", 
              marginBottom: "15px" 
            }}>
              Punime të jashtme
            </h3>
            <p style={{ 
              color: "rgb(60,60,60)", 
              lineHeight: "1.7",
              fontSize: isMobile ? "0.95rem" : "1rem"
            }}>
              Izolim, suvaje dhe përfundime dekorative për pamje moderne dhe
              mbrojtje ndaj kushteve atmosferike.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: isMobile ? "12px" : "15px",
              padding: isMobile ? "20px" : "30px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => !isMobile && (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <h3 style={{ 
              color: "var(--dark-navy)", 
              fontSize: isMobile ? "1.2rem" : "1.4rem", 
              marginBottom: "15px" 
            }}>
              Konsulencë materiale
            </h3>
            <p style={{ 
              color: "rgb(60,60,60)", 
              lineHeight: "1.7",
              fontSize: isMobile ? "0.95rem" : "1rem"
            }}>
              Zgjedhja e materialeve më cilësore për qëndrueshmëri afatgjatë dhe
              kursim energjie për klientët tanë.
            </p>
          </div>
        </div>
      </section>

      {/* Seksioni Punimet */}
      <section style={{ padding: isMobile ? "50px 5%" : "80px 8%", textAlign: "center" }}>
        <div style={{ marginBottom: isMobile ? "35px" : "50px" }}>
          <h2
            style={{
              fontSize: isMobile ? "1.75rem" : "2.5rem",
              color: "var(--dark-navy)",
              fontWeight: "700",
            }}
          >
            Disa nga punimet tona
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
                alt={`Punim ${i + 1}`}
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

      {/* Popup për foton e zgjedhur */}
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
            alt="Punim i zgjedhur"
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