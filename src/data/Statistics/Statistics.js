import React from "react";

const Statistics = ({ icon, value, text }) => {
  return (
    <div>
      <i className={icon}></i>
      <h3>{value}</h3>
      <p className="text-secondary">{text}</p>
    </div>
  );
};

export default Statistics;
