import React from "react";
import { useNavigate } from "react-router-dom";
import foto5 from "./assets/foto5.jpg";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url("${foto5}")` }}
    >
      <p style={{
        fontSize: "11px",
        fontWeight: 700,
        letterSpacing: "3.5px",
        textTransform: "uppercase",
        color: "rgb(90, 178, 160)",
        marginBottom: "20px",
        opacity: 0.95,
        animation: "fadeUp 0.8s ease forwards",
      }}>
        Premium Facade Insulation · Albania
      </p>

      <h1>
        Warm in winter, cool in summer —<br />with FRE SULOVA Group
      </h1>

      <p style={{
        fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
        color: "rgba(255,255,255,0.72)",
        maxWidth: "540px",
        marginBottom: "44px",
        lineHeight: "1.75",
        fontWeight: 300,
        animation: "fadeUp 1.1s ease forwards",
      }}>
        Energy-efficient facade insulation that reduces costs, improves comfort,
        and adds lasting value to every building.
      </p>

      <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center", animation: "fadeUp 1.25s ease forwards" }}>
        <button onClick={() => navigate("/meshome")}>
          View Our Work
        </button>

        <button
          style={{
            background: "transparent",
            color: "white",
            border: "1.5px solid rgba(255,255,255,0.55)",
            backdropFilter: "blur(6px)",
          }}
          onClick={() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Get a Quote
        </button>
      </div>
    </section>
  );
}

export default Hero;
