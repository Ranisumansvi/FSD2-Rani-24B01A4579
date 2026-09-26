import React, { Component } from "react";
import Plant from "./Plant.jsx";
import "./Garden.css";

class Garden extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plantName: "Money Plant",
      waterStatus: "Needs Water",
      waterCount: 0
    };
  }

  waterPlant = () => {
    this.setState({
      waterStatus: "Watered"
    });
  };

  increaseWaterCount = () => {
    this.setState({
      waterCount: this.state.waterCount + 1
    });
  };

  render() {
    return (
      <div className="garden">
        <h2>My Smart Garden</h2>

        <Plant
          plantName={this.state.plantName}
          waterStatus={this.state.waterStatus}
        />

        <button onClick={this.waterPlant}>
          Water Plant
        </button>

        <button onClick={this.increaseWaterCount}>
          Water Count: {this.state.waterCount}
        </button>
      </div>
    );
  }
}

export default Garden;