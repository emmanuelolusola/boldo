import React from "react";

import "./contact.css";

import Image from "../../assets/Image.png";
import Arrowdown from "../../assets/arrowdown.svg";

const Contact = () => {
  return (
    <div className="contact-main">
      <div className="contact-container">
        <img src={Image} alt="contact" />
        <div className="contact-bottom">
          <p className="contact-left">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </p>
          <div className="contact-right">
            <div className="contact-right-up">
              <p className="contact-right-up-p">
                We connect our customers with the best?
              </p>
              <img src={Arrowdown} alt="arrow" />
            </div>
            <hr />
            <div className="contact-right-down">
              <p className="contact-right-down-p">
                Android research & development rockstar?
              </p>
              <img src={Arrowdown} alt="arrow" />
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
