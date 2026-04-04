import foto7 from "./assets/foto7.jpg";

function Rreth(){
    return(
        <section id="about" className="about-section">
        <div className="about-content">
          <img src={foto7} alt="About Us" />

          <div>
            <h2>Who We Are</h2>

            <p>
              FRE Sulova Group is a company specialized in high-quality facade insulation,
              using modern capot systems to deliver energy-efficient and long-lasting results.
              Our solutions are designed to improve comfort, reduce energy consumption,
              and enhance the overall performance of every building.
            </p>

            {/* small highlights */}
            <div style={{
              marginTop: "20px",
              display: "flex",
              gap: "20px",
              flexWrap: "wrap"
            }}>
              <span>✔ Energy Efficiency</span>
              <span>✔ Long-term Durability</span>
              <span>✔ Modern Finishes</span>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Rreth;