import React from "react";
import "../../assets/styles/main.css";
import CardInfo from "../../data/CardInfo/CardInfo";

const Main = () => {
  return (
    <section class="features-main my-2">
      <div class="container grid grid-3">
        <CardInfo
          icon="fas fa-server fa-3x"
          value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
            officiis reprehenderit dicta, incidunt id asperiores dolores? Earum
            tenetur ducimus enim, est, exercitationem dolore consectetur veniam
            fugiat iste delectus, aut recusandae?"
        />

        <CardInfo
          icon="fas fa-network-wired fa-3x"
          value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            commodi quam. Sit debitis adipisci, dolores iste, nam minima
            corrupti error possimus delectus dignissimos magnam perspiciatis
            itaque natus obcaecati."
        />

        <CardInfo
          icon="fas fa-laptop-code fa-3x"
          value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            magni. Placeat est, eligendi culpa distinctio consequuntur impedit,
            officia odit assumenda repellat ratione deserunt explicabo maxime?"
        />

        <CardInfo
          icon="fas fa-database fa-3x"
          value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. A pariatur
            modi eveniet praesentium nesciunt at esse dolorum quae illum. Id!"
        />

        <CardInfo
          icon="fas fa-power-off fa-3x"
          value="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            porro ut, eaque rem veritatis maxime!"
        />

        <CardInfo
          icon="fas fa-upload fa-3x"
          value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            magnam."
        />
      </div>
    </section>
  );
};

export default Main;
