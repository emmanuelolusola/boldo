import React from "react";

import "./contact.css";

import Image from "../../assets/Image.png";

const Contact = () => {
  return (
    <div className="contact-main">
      <div className="contact-container">
        <img src={Image} alt="contact" />
        <div className="contact-bottom"></div>
      </div>
    </div>
  );
};

export default Contact;
