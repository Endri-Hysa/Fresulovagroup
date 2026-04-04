import foto7 from "./assets/foto7.jpg";

function Rreth() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <img src={foto7} alt="About FRE Sulova Group" />

        <div>
          <p style={{
            fontSize: "11px", fontWeight: 700, letterSpacing: "3px",
            textTransform: "uppercase", color: "var(--teal-bright)",
            marginBottom: "14px", opacity: 0.9,
          }}>
            Who We Are
          </p>

          <h2>Built on expertise,<br />driven by quality</h2>

          <p>
            FRE Sulova Group is a company specialized in high-quality facade insulation,
            using modern capot systems to deliver energy-efficient and long-lasting results.
            Our solutions improve comfort, reduce energy consumption,
            and enhance the performance of every building we work on.
          </p>

          <div className="about-badges">
            <span className="about-badge">✓ Energy Efficiency</span>
            <span className="about-badge">✓ Long-term Durability</span>
            <span className="about-badge">✓ Modern Finishes</span>
            <span className="about-badge">✓ Expert Team</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rreth;
