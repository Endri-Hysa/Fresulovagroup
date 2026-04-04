import React, { useState } from "react";
import "./index.css";

function Kontakt() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");
  const [fade, setFade] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email && !formData.phone) {
      setStatus("Please provide an email address or phone number.");
      setFade(false);
      return;
    }

    try {
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

      setStatus(data.message || "Your message has been sent successfully!");

      setFormData({ name: "", email: "", phone: "", message: "" });
      setFade(false);

      setTimeout(() => setFade(true), 3000);
      setTimeout(() => {
        setStatus("");
        setFade(false);
      }, 7000);
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
      setFade(false);
    }
  };

  return (
    <section id="contact">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Get in Touch</h2>
        <p style={{ marginBottom: "10px", color: "rgb(90,90,90)", lineHeight: "1.7" }}>
          Tell us about your project and we will get back to you as soon as possible.
        </p>

        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email address"
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
          placeholder="Tell us more about your project"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>

        {status && <p className={`status-message ${fade ? "fade" : ""}`}>{status}</p>}
      </form>
    </section>
  );
}

export default Kontakt;