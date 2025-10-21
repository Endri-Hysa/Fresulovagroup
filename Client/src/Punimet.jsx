import foto1 from "./assets/foto1.jpg";
import foto2 from "./assets/foto2.jpg";
import foto3 from "./assets/foto3.jpg";
import foto4 from "./assets/foto4.jpg";
import foto5 from "./assets/foto5.jpg";
import foto6 from "./assets/foto6.jpg";
function Punimet(){
    return(
        <section id="works">
        <h2>Punimet</h2>
        <div className="works-grid">
          {[foto1, foto2, foto3, foto4, foto5, foto6].map((img, i) => (
            <div key={i} className="work-card">
              <img src={img} alt={`Projekt ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>
    );
}
export default Punimet