import React from "react";
import "./style.css";

function boxingCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt={props.name}
          src={props.image}
          onClick={() => props.cardClick(props.id)}
        />
      </div>
    </div>
  );
}

export default boxingCard;
