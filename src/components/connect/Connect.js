import React from "react";

import arrowLeft from "../../assets/round-arrow-left.svg";
import arrowRight from "../../assets/round-arrow-right.svg";

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
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default Connect;
