import React from "react";
import "./App.css";
import Background from "./components/Background";
// import MyForm from "./components/MyForm";
import DisplayJson from "./DisplayJson";
// import * as submission from "./components/MyForm";
import { Container, Row, Col } from "reactstrap";
import "./components/MyForm.css";

// var submitted = false;

// function App() {
//   return (
//     <>
//       <Background />
//       <div className="under-logo">
//         <MyForm></MyForm>
//         {submitted ? <DisplayJson /> : <h1></h1>}
//       </div>
//     </>
//   );
// }

// export default App;

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      USstate: "",
      city: "",
      zipcode: null,
      submitted: false
    };
  }

  mySubmitHandler = event => {
    event.preventDefault();
    let zipcode = this.state.zipcode;
    this.setState({submitted: true});
    if (!Number(zipcode)) {
      alert("Your zipcode must be a number.");
    }
    alert(
      "The information you provided state: " +
        this.state.USstate +
        ", city: " +
        this.state.city +
        ", zipcode: " +
        this.state.zipcode
    );
  };

  myChangeHandler = event => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  render() {
    return (
      <div>
        <Background/>
        <div className="location-form">
          <Container>
            <form onSubmit={this.mySubmitHandler}>
              <Row>
                <Col>
                  <p className="form-label">STATE</p>
                </Col>
                <Col>
                  <input
                    type="text"
                    name="USstate"
                    placeholder="Enter state."
                    className="input-bar"
                    onChange={this.myChangeHandler}
                  />
                </Col>
              </Row>
              <Row className="per-row">
                <Col>
                  <p className="form-label">CITY</p>
                </Col>
                <Col>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter city."
                    className="input-bar"
                    onChange={this.myChangeHandler}
                  />
                </Col>
              </Row>
              <Row className="per-row">
                <Col>
                  <p className="form-label">ZIPCODE</p>
                </Col>
                <Col>
                  <input
                    type="text"
                    name="zipcode"
                    placeholder="Enter zipcode."
                    className="input-bar"
                    onChange={this.myChangeHandler}
                  />
                </Col>
              </Row>
              <Row className="per-row">
                <Col>
                  <input className="sub-but" type="submit" />
                </Col>
              </Row>
            </form>
          </Container>
        </div>
        {this.state.submitted ? <DisplayJson/> : <h1></h1>}
      </div>
    );
  }
}
