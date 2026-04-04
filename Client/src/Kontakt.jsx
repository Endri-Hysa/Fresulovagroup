import React, { useState } from "react";
import "./index.css"; // The fade-out CSS will be here

function Kontakt() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");
  const [fade, setFade] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check that at least email or phone has been entered
    if (!formData.email && !formData.phone) {
      setStatus("Please provide an email or phone number.");
      setFade(false);
      return;
    }

    try {
      // Use environment variable (Vite: import.meta.env.VITE_API_URL) so the
      // deployed client can point to the Render server URL without changing code.
      const API_BASE = import.meta.env.VITE_API_URL || "https://fresulovagroup.onrender.com";

      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errText = await res.text().catch(() => "");
        throw new Error(errText || `Request failed with status ${res.status}`);
      }

      const data = await res.json();

      // Show server message (or a default)
      setStatus(data.message || "Message sent successfully!");

      setFormData({ name: "", email: "", phone: "", message: "" });
      setFade(false);

      // Fade-out after 3s, clear after 7s
      setTimeout(() => setFade(true), 3000);
      setTimeout(() => {
        setStatus("");
        setFade(false);
      }, 7000);
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again.");
      setFade(false);
    }
  };

  return (
    <section id="contact">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Work with us</h2>

        <input
          type="text"
          name="name"
          placeholder="Your name"
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
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Additional information"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send</button>

        {status && <p className={`status-message ${fade ? "fade" : ""}`}>{status}</p>}
      </form>
    </section>
  );
}

export default Kontakt;