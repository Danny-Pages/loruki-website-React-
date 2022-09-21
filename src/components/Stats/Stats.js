import React from "react";
import "../../assets/styles/stats.css";
import Statistics from "../../data/Statistics/Statistics";

const Stats = () => {
  return (
    <section className="stats">
      <div className="container">
        <h3 className="stats-heading text-center my-1">
          Welcome to the best platform for building applications of all types
          with modern architecture and scaling
        </h3>

        <div className="grid grid-3 text-center my-4">
          <Statistics
            icon="fas fa-server fa-3x"
            value="10,349,405"
            text="Deployments"
          />
          <Statistics
            icon="fas fa-upload fa-3x"
            value="987 TB"
            text="Published"
          />
          <Statistics
            icon="fas fa-project-diagram fa-3x"
            value="2,343,265"
            text="Projects"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
