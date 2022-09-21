import React from "react";
import { SERVER2 } from "../../assets/images/images";
import "../../assets/styles/subhead.css";

const SubHead = () => {
  return (
    <section class="features-sub-head bg-light py-3">
      <div class="container grid">
        <div>
          <h2 class="md">The Loruki Platform</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            facilis saepe aspernatur suscipit, repellendus labore adipisci
            excepturi rerum neque architecto dolore voluptatibus soluta minima
            ea quo necessitatibus. Commodi, nostrum temporibus!
          </p>
        </div>
        <img src={SERVER2} alt="" />
      </div>
    </section>
  );
};

export default SubHead;
