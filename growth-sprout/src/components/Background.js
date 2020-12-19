import React, { Component } from "react";
import logo from "../images/logo.png";
import "../components/Background.css";

export default class Background extends Component {
  render() {
    // You can use them as regular CSS styles
    return (
      <>
      <div className="homepage">
        <img src={logo} alt="Logo" className="center" />
      </div>
      <div background-color= " dark-green" className ="banner-text">
      <p className='lead text-center'>
                {' '}
                In order to be a successful gardner many variables need to be accounted for. 
                One of the most crucial things to know is what plant is most suitable for your
                geographical location in a given time of the year. Enter your location below
                and get a list of plants that will have a high chance of survival.
            </p>
      </div>
      </>
    );
  }
}
