import { useNavigate } from "react-router-dom";
import foto1 from "./assets/foto1.jpg";
import foto2 from "./assets/foto2.jpg";
import foto3 from "./assets/foto3.jpg";
import foto4 from "./assets/foto4.jpg";
import foto5 from "./assets/foto5.jpg";
import foto6 from "./assets/foto6.jpg";

function Punimet(){
    const navigate = useNavigate();

    return(
        <section id="works">
        <h2>Our Projects</h2>

        <div className="works-grid">
          {[foto1, foto2, foto3, foto4, foto5, foto6].map((img, i) => (
            <div key={i} className="work-card">
              <div style={{ position: "relative" }}>
                <img src={img} alt={`Project ${i + 1}`} />

                <div className="overlay">
                  <span>Project {i + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div style={{ marginTop: "40px" }}>
          <button onClick={() => navigate("/meshome")}>
            View All Projects
          </button>
        </div>

      </section>
    );
}

export default Punimet;