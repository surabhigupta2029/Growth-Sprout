import React from 'react';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      USstate: '',
      city: '',
      zipcode: null,
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let zipcode = this.state.zipcode;
    if (!Number(zipcode)) {
      alert("Your zipcode must be a number");
    }
    alert("The information you provided state: " +  this.state.USstate + " city: " + this.state.city + " zipcode: " + this.state.zipcode)
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <p>Enter your state:</p>
      <input
        type='text'
        name='USstate'
        onChange={this.myChangeHandler}
      />
      <p>Enter your city:</p>
      <input
        type='text'
        name='city'
        onChange={this.myChangeHandler}
      />
      <p>Enter your zipcode:</p>
      <input
        type='text'
        name='zipcode'
        onChange={this.myChangeHandler}
      />
      <br/>
      <br/>
      <input type='submit' />
      </form>
    );
  }
}
