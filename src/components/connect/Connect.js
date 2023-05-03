import React from "react";

import arrowLeft from "../../assets/round-arrow-left.svg";
import arrowRight from "../../assets/round-arrow-right.svg";
import albus from "../../assets/albus.png";

const Connect = () => {
  return (
    <div className="connect-main">
      <div className="connect-container">
        <div className="top">
          <p className="connect-p">
            An enterprise template to ramp up your company website
          </p>
          <div className="connect-nav">
            <img src={arrowLeft} alt="arrow" />
            <img src={arrowRight} alt="arrow" />
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-container">
            <h1 className="bottom-p">
              “Buyer buzz partner network disruptive non-disclosure agreement
              business”
            </h1>
            <div className="bottom-profile">
              <img src={albus} alt="profile" />
              <div className="bottom-profile-sec">
                <p className="bottom-profile-name">Albus Dumbledore</p>
                <p className="bottom-profile-position">Manager @ Howarts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
