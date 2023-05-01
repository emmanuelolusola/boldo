import React from "react";

import "./remark.css";

import pic1 from "../../assets/pic1.svg";
import pic2 from "../../assets/pic2.svg";
import leaf from "../../assets/leaf.svg";
import eye from "../../assets/eye.svg";
import sun from "../../assets/sun.svg";
import check from "../../assets/check.svg";

const Remark = () => {
  return (
    <div className="remark-container">
      <div className="remark-top">
        <div className="r-left">
          <img src={pic1} alt="remark" />
        </div>
        <div className="r-right">
          <p className="r-header">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </p>
          <div className="r-paragraph">
            <img src={check} alt="check" />
            <p className="r-p">We connect our customers with the best.</p>
          </div>
          <div className="r-paragraph">
            <img src={check} alt="check" />
            <p className="r-p">Advisor success customer launch party.</p>
          </div>
          <div className="r-paragraph">
            <img src={check} alt="check" />
            <p className="r-p">Business-to-consumer long tail.</p>
          </div>
          <button className="r-button">Start now</button>
        </div>
      </div>
      <div className="remark-bottom">
        <div className="r-right">
          <p className="r-header">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </p>
          <div className="r-paragraph-2">
            <img src={leaf} alt="check" />
            <p className="r-p">We connect our customers with the best.</p>
          </div>
          <div className="r-paragraph-2">
            <img src={eye} alt="check" />
            <p className="r-p">Advisor success customer launch party.</p>
          </div>
          <div className="r-paragraph-2">
            <img src={sun} alt="check" />
            <p className="r-p">Business-to-consumer long tail.</p>
          </div>
          <button className="r-button">Start now</button>
        </div>
        <div className="r-left">
          <img src={pic2} alt="remark" />
        </div>
      </div>
      <div className="remark-bottom"></div>
    </div>
  );
};

export default Remark;
