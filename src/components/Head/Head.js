import React from "react";
import "../../assets/styles/head.css";

const Head = ({ h1, p, img }) => {
  return (
    <section className="head bg-primary py-3">
      <div className="container grid">
        <div>
          <h1 className="xl">{h1}</h1>
          <p className="lead">{p}</p>
        </div>
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default Head;
