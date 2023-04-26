import React from "react";
import NavBar from "../navBar/NavBar";

import "./mainSection.css";

const mainSection = () => {
  return (
    <div className="main-section">
      <div className="circle"></div>
      <NavBar />
      <div>MainSection</div>
    </div>
  );
};

export default mainSection;
