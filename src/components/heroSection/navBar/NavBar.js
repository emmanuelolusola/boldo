import React from "react";

import "./navBar.css";

import logoShape from "../../../assets/logoShape.svg";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logoShape} alt="My Logo" />
          <h1>Boldo</h1>
        </div>
        <div className="right-side">
          <ul>
            <li>Products</li>
            <li>Services</li>
            <li>About</li>
          </ul>
          <button>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
