import React from "react";

const Card = ({ text, logo }) => {
  return (
    <div className="card">
      <h4>{text}</h4>
      <img src={logo} alt="" />
    </div>
  );
};

export default Card;
