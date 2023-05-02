import React from "react";

import "./comment.css";

const Comment = () => {
  return (
    <div className="comment-main">
      <div className="comment-container">
        <p className="comment-header">
          An enterprise template to ramp up your company website
        </p>
        <div className="comment-input">
          <input type="text" placeholder="Your email address" />
          <button className="comment-button">Start now</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
