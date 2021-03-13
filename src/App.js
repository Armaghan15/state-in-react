import React, { Component } from "react";
import "./App.css";
import Car from "./Car/Car";

class App extends Component {
  // State for the Instances of the Car Conponent
  state = {
    cars: [
      { name: "AMG63", company: "Mercedes" },
      { name: "M88", company: "BMW" },
    ],
  };

  // For changing the state of the car component when the Switch Name button is clicked
  switchNameHandler = () => {
    this.setState({
      cars: [
        { name: "AM23", company: "Mercedes" },
        { name: "i8", company: "BMW" },
      ],
    });
  };

  // For changing the state of the car component when the Switch Company button is clicked
  switchCompanyHandler = () => {
    this.setState({
      cars: [
        { name: "AMG63", company: "Volks Wagon" },
        { name: "M8", company: "Buggati" },
      ],
    });
  };

  // Method for uppercasing mercedez
  uppercaseMercdes = () => {
    this.setState({
      cars: [
        { name: " AMG63", company: "MERCEDES" },
        { name: "M88", company: "BMW" },
      ],
    });
  };

  // Method for lowercasing BMW
  lowercaseBMW = () => {
    this.setState({
      cars: [
        { name: "AMG63", company: "Mercedes" },
        { name: "M88", company: "bmw" },
      ],
    });
  };

  // method for changing the name of the BMW M88 when a responce is entered
  nameChangeHandler = (event) => {
    this.setState({
      cars: [
        { name: "AMG63", company: "Mercedes" },
        { name: event.target.value, company: "BMW" },
      ],
    });
  };

  render() {
    const buttonStyle1 = {
      backgroundColor: "#3e83d6",
      color: "white",
      font: "inherit",
      border: "3px solid #3e83d6",
      borderRadius: "30px",
      padding: "15px",
      margin: "10px",
      cursor: "pointer",
    };

    const buttonStyle2 = {
      backgroundColor: "#d63e46",
      color: "white",
      font: "inherit",
      border: "3px solid #d63e46",
      borderRadius: "30px",
      padding: "15px",
      margin: "10px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <Car
          name={this.state.cars[0].name}
          company={this.state.cars[0].company}
          click={this.uppercaseMercdes}
        ></Car>

        <Car
          name={this.state.cars[1].name}
          company={this.state.cars[1].company}
          changed={this.nameChangeHandler}
          click={this.lowercaseBMW}
        ></Car>

        <button
          className="btn1"
          style={buttonStyle1}
          onClick={this.switchNameHandler}
        >
          Switch Name
        </button>
        <button
          className="btn2"
          style={buttonStyle2}
          onClick={this.switchCompanyHandler}
        >
          Switch Company
        </button>
      </div>
    );
  }
}

export default App;
