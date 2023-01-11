import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Vacationarea</span>

        <div className="navItems">
          <button className="navButton">Qeydiyyat</button>
          <button className="navButton">Giriş</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
