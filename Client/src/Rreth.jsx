import foto7 from "./assets/foto7.jpg";

function Rreth(){
    return(
        <section id="about" className="about-section">
        <div className="about-content">
          <img src={foto7} alt="About Us" />
          <div>
            <h2>About Us</h2>
            <p>
              FRE Sulova Group is a company specialized in building thermal insulation
              using the capot system, offering sustainable and efficient solutions
              for energy savings. We believe that a well-insulated building is not only
              more comfortable for its occupants, but also more environmentally friendly,
              as it significantly reduces energy consumption.
            </p>
          </div>
        </div>
      </section>
    );
}

export default Rreth;