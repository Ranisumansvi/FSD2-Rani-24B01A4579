import React from "react";
import "./Plant.css";

function Plant(props) {
  return (
    <div className="plant">

      <h3>🌱 Plant: {props.plantName}</h3>

      <p>
        Water Status: {props.waterStatus}
      </p>

    </div>
  );
}

export default Plant;