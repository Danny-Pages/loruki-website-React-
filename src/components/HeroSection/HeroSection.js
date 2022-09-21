import React from "react";
import "../../assets/styles/herosection.css";
import InputField from "../../data/InputField/InputField";

const HeroSection = () => {
  return (
    <section className="showcase">
      <div className="container grid">
        <div className="showcase-text">
          <h1>Easier Deployment</h1>
          <p>
            Deploy web apps of all kinds, from large scale enterprise APIs to
            static websites for individuals. Fill out the form to try a demo of
            our platform
          </p>
          <a href="features.html" className="btn btn-outline">
            Read More
          </a>
        </div>

        <div className="showcase-form card">
          <h2>Request a Demo</h2>
          <form name="request" method="POST" data-netlify="true">
            <InputField type="text" name="name" placeholder="Name" />

            <InputField type="text" name="company" placeholder="Company Name" />

            <InputField type="email" name="email" placeholder="Email" />

            <input type="submit" value="Send" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
