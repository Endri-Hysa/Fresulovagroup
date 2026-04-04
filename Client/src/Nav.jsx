import React from "react";
import logo from "./assets/logojobc.png";

function Nav() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <div className="logo" onClick={scrollToTop}>
        <img src={logo} alt="FRE Sulova Logo" />
        <span>FRE SULOVA Group</span>
      </div>

      <div>
        <a onClick={() => scrollToSection("works")}>Projects</a>
        <a onClick={() => scrollToSection("about")}>About Us</a>
        <a onClick={() => scrollToSection("contact")}>Contact</a>
      </div>
    </nav>
  );
}

export default Nav;