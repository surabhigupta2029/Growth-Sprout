import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./MyForm.css";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      USstate: "",
      city: "",
      zipcode: null
    };
  }
  mySubmitHandler = event => {
    event.preventDefault();
    let zipcode = this.state.zipcode;
    if (!Number(zipcode)) {
      alert("Your zipcode must be a number");
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
    );
  }
}
