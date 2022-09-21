import React from "react";

const CardInfo = ({ icon, value }) => {
  return (
    <div class="card flex">
      <i class={icon}></i>
      <p>{value}</p>
    </div>
  );
};

export default CardInfo;
