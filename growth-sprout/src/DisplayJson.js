import React, { Component } from "react";
import { Container, Grid, Header, List } from "semantic-ui-react";
//import contacts from './test';

// fetch(`${fileName}.json`)
//   .then(response => response.json())
//   .then(data => console.log(data))

var data = require('./test.json');
//console.log(data)
//console.log(data.elements.common_name)
export default class DisplayJson extends React.Component {


  // function printJson =>{
  //   console.log(data)

  //   for (var i = 0; i < data.length; i++) {
  //     var obj = data[i];
  //     console.log(`Name: ${obj.common_name}, ${obj.scientific_name}`);
  //   }
  //   }
  render() {
    let plants = data.elements.map((plant) => {
      return (
        <div>
          <li>
            <h1>{plant.common_name}</h1>
            {console.log(plant.common_name)}
            <p>{plant.scientific_name}</p>
            <img alt="pic" src={plant.image} />
          </li>
        </div>
      );
    })
    return (
      <div>
        <ul>
          {plants}
        </ul>
      </div>
    );
  }
}

