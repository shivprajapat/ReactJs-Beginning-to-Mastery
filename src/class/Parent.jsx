import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  clickMe(message) {
    alert(`Click to ${message}`);
  }
  render() {
    return (
      <div>
        <h5>Parent</h5>
        <Child clickMe={this.clickMe} />
      </div>
    );
  }
}

export default Parent;
