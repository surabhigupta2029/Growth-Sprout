import React from "react";

import "./DisplayJson.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

var data = require("./test.json");

export default class DisplayJson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let plants = data.elements.map(plant => {
      return (
        <div className="each-slide">
          <div>
            <img className="plant-image" alt="pic" src={plant.image}></img>
            <br></br>
            <span className="plant-title">{plant.common_name}</span>
            <br></br>
            <span className="science-title">{plant.scientific_name}</span>
          </div>
        </div>
      );
    });

    return (
      <div className="slide-container slide-con">
        <h1>Best Plants For Your Location</h1>
        <Slide>{plants}</Slide>
      </div>
    );
  }
}
