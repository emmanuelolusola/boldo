import React from "react";

import "./blog.css";

import cate1 from "../../assets/cate1.png";
import cate2 from "../../assets/cate2.png";
import cate3 from "../../assets/cate3.png";
import chand from "../../assets/chand.png";
import rach from "../../assets/rach.png";
import mon from "../../assets/mon.png";

const Blog = () => {
  return (
    <div className="blog-main">
      <div className="blog-container">
        <p className="blog-p">Our blog</p>
        <p className="blog-h">
          Value proposition accelerator product <br /> management venture
        </p>
        <div className="blog-grid">
          <div className="blog-grid-container">
            <img src={cate1} alt="category" />
            <div className="blog-cate">
              <p className="blog-cate-h">Category</p>
              <p className="blog-cate-p">November 22, 2021</p>
            </div>
            <p className="blog-cate-para">
              Pitch termsheet backing validation focus release.
            </p>
            <div className="blog-profile">
              <img src={chand} alt="profile" />
              <p className="blog-profile-name">Chandler Bing</p>
            </div>
          </div>
          <div className="blog-grid-container">
            <img src={cate2} alt="category" />
            <div className="blog-cate">
              <p className="blog-cate-h">Category</p>
              <p className="blog-cate-p">November 22, 2021</p>
            </div>
            <p className="blog-cate-para">
              Seed round direct mailing non-disclosure agreement graphical user
              interface rockstar.
            </p>
            <div className="blog-profile">
              <img src={rach} alt="profile" />
              <p className="blog-profile-name">Rachel Green</p>
            </div>
          </div>
          <div className="blog-grid-container">
            <img src={cate3} alt="category" />
            <div className="blog-cate">
              <p className="blog-cate-h">Category</p>
              <p className="blog-cate-p">November 22, 2021</p>
            </div>
            <p className="blog-cate-para">
              Beta prototype sales iPad gen-z marketing network effects value
              proposition
            </p>
            <div className="blog-profile">
              <img src={mon} alt="profile" />
              <p className="blog-profile-name">Monica Geller</p>
            </div>
          </div>
        </div>
        <button className="load-button">Load more</button>
      </div>
    </div>
  );
};

export default Blog;
