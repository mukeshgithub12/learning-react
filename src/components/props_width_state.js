import React, { Component } from "react";

export default class Props_Width_State extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: "green",
      name: "Mukesh Kumar Verma",
      address: "Balrampur",
    };
  }
  render() {
    return (
      <div>
        <h1>My Favorite color {this.state.color}</h1>
        <h1>My Name is {this.state.name}</h1>
        <h1>I am from {this.state.address}</h1>
      </div>
    );
  }
}
