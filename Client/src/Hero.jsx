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
      }}
    >
      <h1>
        Warm in winter, cool in summer – with premium facade insulation by FRE SULOVA Group
      </h1>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", justifyContent: "center" }}>
        <button onClick={() => navigate("/meshome")}>
          Learn More
        </button>

        <button
          style={{
            background: "transparent",
            color: "white",
            border: "2px solid white",
          }}
          onClick={() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}

export default Hero;