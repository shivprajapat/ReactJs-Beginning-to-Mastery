import React, { Component } from 'react'
import Parent from './Parent';

export default class Cls extends Component {
  constructor() {
    super()
    this.state = {
      name: "Hello"
    }
  }

  clickMe() {
    this.setState({ name: "World" })
    console.log(this);
  }
  render() {
    return (
      <div>
        <h2>Class Components</h2>
        <p>{this.state.name}</p>
        <button onClick={this.clickMe.bind(this)}>click me</button>
        <Parent/>
      </div>
    )
  }
}
