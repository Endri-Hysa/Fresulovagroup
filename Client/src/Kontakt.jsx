import React, { useState } from "react";
import "./index.css"; // CSS i fade-out do të jetë këtu

function Kontakt() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");
  const [fade, setFade] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kontrollo që të paktën email ose telefoni të jetë futur
    if (!formData.email && !formData.phone) {
      setStatus("Ju lutem jepni email ose numrin e telefonit.");
      setFade(false);
      return;
    }

    try {
      const res = await fetch("https://fresulovagroup.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      
      // Ndryshimi këtu - mesazhi i ri
      setStatus(data.message || "Mesazhi u dërgua me sukses!");
      
      setFormData({ name: "", email: "", phone: "", message: "" }); // Fshij formën
      setFade(false);

      // Aktivizo fade-out pas 3 sekondash
      setTimeout(() => setFade(true), 3000);

      // Pastro mesazhin pas 7 sekondash
      setTimeout(() => {
        setStatus("");
        setFade(false);
      }, 7000);
    } catch (error) {
      setStatus("Ka ndodhur një gabim. Ju lutem provoni përsëri.");
      setFade(false);
    }
  };

  return (
    <section id="contact">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Puno me ne</h2>

        <input
          type="text"
          name="name"
          placeholder="Emri juaj"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Numri i telefonit"
          value={formData.phone}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Informacion shtesë"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Dërgo</button>

        {status && <p className={`status-message ${fade ? "fade" : ""}`}>{status}</p>}
      </form>
    </section>
  );
}

export default Kontakt;
