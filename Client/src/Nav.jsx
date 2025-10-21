import React from "react";
import logo from "./assets/logojobc.png";
function Nav(){
    return(
        <nav >
        <div className="logo">
          <img src={logo} alt="FRE Sulova Logo" />
          <span>FRE SULOVA Group</span>
        </div>
        <div>
          <a href="#works">Punimet</a>
          <a href="#about">Rreth Nesh</a>
          <a href="#contact">Kontakt</a>
        </div>
      </nav>
    );
}
export default Nav