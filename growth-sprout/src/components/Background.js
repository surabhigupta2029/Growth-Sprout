import React, { Component } from "react";
import logo from "../images/logo.png";
import "../components/Background.css";

export default class Background extends Component {
  render() {
    // You can use them as regular CSS styles
    return (
      <div className="homepage">
        <img src={logo} alt="Logo" className="center" />
      </div>
    );
  }
}
