import React from "react";
import NavBar from "../navBar/NavBar";

import "./mainSection.css";

import img1 from "../../../assets/img1.svg";
import img2 from "../../../assets/img2.svg";
import img3 from "../../../assets/img3.svg";
import boldo from "../../../assets/boldo.svg";
import presto from "../../../assets/presto.svg";

const mainSection = () => {
  return (
    <div className="main-section">
      <div className="circle"></div>
      <NavBar />
      <div className="main-container">
        <div className="bold-section">
          <div className="left">
            <h1 className="h1-main">
              Save time by building fast with Boldo Template
            </h1>
            <p className="p-main">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
            <div className="main-button">
              <button className="buy-template">Buy template</button>
              <button className="explore">Explore</button>
            </div>
          </div>
          <div className="right">
            <img src={img1} alt="image1" className="hero-image" />
            <div className="right-down">
              <img src={img2} alt="image2" className="hero-image" />
              <img src={img3} alt="image3" className="hero-image" />
            </div>
          </div>
        </div>
        <div className="logo-white">
          <div className="each">
            <img src={boldo} alt="boldo" />
            <h1 className="h1">Boldo</h1>
          </div>
          <div className="each">
            <img src={presto} alt="presto" />
            <h1 className="h1">Presto</h1>
          </div>
          <div className="each">
            <img src={boldo} alt="boldo" />
            <h1 className="h1">Boldo</h1>
          </div>
          <div className="each">
            <img src={presto} alt="presto" />
            <h1 className="h1">Presto</h1>
          </div>
          <div className="each">
            <img src={boldo} alt="boldo" />
            <h1 className="h1">Boldo</h1>
          </div>
          <div className="each">
            <img src={presto} alt="presto" />
            <h1 className="h1">Presto</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mainSection;
