import React from "react";
import { useNavigate } from "react-router-dom";
import foto5 from "./assets/foto5.jpg";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url("${foto5}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        padding: "0 20px",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          maxWidth: "900px",
          lineHeight: "1.4",
          textShadow: "0px 2px 8px rgba(0, 0, 0, 0.5)",
        }}
      >
        Ngrohtë në dimër, freskët në verë – me sistemin kapot nga FRE SULOVA Group
      </h1>

      <button onClick={() => navigate("/meshome")}>
        Më shumë
      </button>
    </section>
  );
}

export default Hero;