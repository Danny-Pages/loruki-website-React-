import React from "react";
import { CLI } from "../../assets/images/images";

import "../../assets/styles/cli.css";

const Cli = () => {
  return (
    <section className="cli">
      <div className="container grid">
        <img src={CLI} alt="" />

        <div className="card">
          <h3>Easy to use, cross platform CLI</h3>
        </div>

        <div className="card">
          <h3>Deploy in seconds</h3>
        </div>
      </div>
    </section>
  );
};

export default Cli;
