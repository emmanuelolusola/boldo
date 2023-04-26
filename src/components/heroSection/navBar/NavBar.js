import React from "react";

import "./navBar.css";

import logoShape from "../../../assets/logoShape.svg";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logoShape} alt="My Logo" />
          <h1 className="h1-navbar">Boldo</h1>
        </div>
        <div className="right-side">
          <ul className="ul-navbar">
            <li>Products</li>
            <li>Services</li>
            <li>About</li>
          </ul>
          <button className="button-navbar">Log In</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
