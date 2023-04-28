import React from "react";

import "./ourServices.css";

import rec1 from "../../assets/rec1.svg";
import rec2 from "../../assets/rec2.svg";
import rec3 from "../../assets/rec3.svg";
import arrow from "../../assets/arrow-right.svg";

const OurServices = () => {
  return (
    <div className="services-container">
      <div className="services-main">
        <div className="services-header">
          <p className="p-services-top">Our Services</p>
          <p className="p-services-bottom">
            Handshake infographic boldo mass market crowdfunding iteration.
          </p>
        </div>
        <div className="services-grid">
          <div className="services-grid-container">
            <img src={rec1} alt="illustration" />
            <p className="services-grid-title">Cool feature title</p>
            <p className="services-grid-paragraph">
              Learning curve network effects return on investment.
            </p>
            <div className="explore-page">
              <p className="explore-p">Explore page</p>
              <img src={arrow} alt="arrow-right" />
            </div>
          </div>
          <div className="services-grid-container">
            <img src={rec2} alt="illustration" />
            <p className="services-grid-title">Even cooler feature</p>
            <p className="services-grid-paragraph">
              Learning curve network effects return on investment.
            </p>
            <div className="explore-page">
              <p className="explore-p">Explore page</p>
              <img src={arrow} alt="arrow-right" />
            </div>
          </div>
          <div className="services-grid-container">
            <img src={rec3} alt="illustration" />
            <p className="services-grid-title">Cool feature title</p>
            <p className="services-grid-paragraph">
              Learning curve network effects return on investment.
            </p>
            <div className="explore-page">
              <p className="explore-p">Explore page</p>
              <img src={arrow} alt="arrow-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
