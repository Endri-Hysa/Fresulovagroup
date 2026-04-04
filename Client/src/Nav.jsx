import React from "react";
import logo from "./assets/logojobc.png";

function Nav(){
    return(
        <nav>
        <div className="logo">
          <img src={logo} alt="FRE Sulova Logo" />
          <span>FRE SULOVA Group</span>
        </div>
        <div>
          <a href="#works">Projects</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    );
}

export default Nav;