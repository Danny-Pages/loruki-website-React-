import React from "react";
import "../../assets/styles/languages.css";
import {
  Clojure,
  CSharp,
  Node,
  PHP,
  Python,
  Ruby,
  Scala,
} from "../../assets/logos/logos";
import Card from "../../data/Card/Card";

const Languages = () => {
  return (
    <section className="languages">
      <h2 className="md text-center my-2">Supported Languages</h2>
      <div className="container flex">
        <Card text="Node.js" logo={Node} />

        <Card text="Python" logo={Python} />

        <Card text="C#" logo={CSharp} />

        <Card text="Ruby" logo={Ruby} />

        <Card text="PHP" logo={PHP} />

        <Card text="Scala" logo={Scala} />

        <Card text="Clojure" logo={Clojure} />
      </div>
    </section>
  );
};

export default Languages;
