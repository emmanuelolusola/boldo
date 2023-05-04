import React from "react";

import "./connect.css";

import arrowLeft from "../../assets/round-arrow-left.svg";
import arrowRight from "../../assets/round-arrow-right.svg";
import albus from "../../assets/albus.png";
import severus from "../../assets/severus.png";
import harry from "../../assets/harry.png";

const Connect = () => {
  return (
    <div className="connect-main">
      <div className="connect-container">
        <div className="top">
          <p className="connect-p">
            An enterprise template to ramp up your company website
          </p>
          <div className="connect-nav">
            <img src={arrowLeft} alt="arrow" className="connect-arrow" />
            <img src={arrowRight} alt="arrow" />
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-container">
            <p className="bottom-p">
              “Buyer buzz partner network disruptive non-disclosure agreement
              business”
            </p>
            <div className="bottom-profile">
              <img src={albus} alt="profile" />
              <div className="bottom-profile-sec">
                <p className="bottom-profile-name">Albus Dumbledore</p>
                <p className="bottom-profile-position">Manager @ Howarts</p>
              </div>
            </div>
          </div>
          <div className="bottom-container">
            <p className="bottom-p">
              “Learning curve infrastructure value proposition advisor strategy
              user experience hypotheses investor.”
            </p>
            <div className="bottom-profile">
              <img src={severus} alt="profile" />
              <div className="bottom-profile-sec">
                <p className="bottom-profile-name">Severus Snape</p>
                <p className="bottom-profile-position">Manager @ Slytherin</p>
              </div>
            </div>
          </div>
          <div className="bottom-container">
            <p className="bottom-p">
              “Release facebook responsive web design business model canvas seed
              money monetization.”
            </p>
            <div className="bottom-profile">
              <img src={harry} alt="profile" />
              <div className="bottom-profile-sec">
                <p className="bottom-profile-name">Harry Potter</p>
                <p className="bottom-profile-position">
                  Team Leader @ Gryffindor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
