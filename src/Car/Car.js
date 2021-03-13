import React from "react";
import "./Car.css";

function Car(props) {
  return (
    <div className="Car">
      <h2>Name: {props.name}</h2>
      <h4 onClick={props.click}>Company: {props.company}</h4>
      <label for="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="New name for M88"
        onChange={props.changed}
        value={props.name}
      />
    </div>
  );
}

export default Car;
