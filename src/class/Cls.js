import React, { Component } from 'react'

export default class Cls extends Component {
  clickMe(){
    alert('event clicked');
  }
  render() {
    return (
      <div>
        <h2>Class Components</h2>
        <button onClick={this.clickMe}>click me</button>
      </div>
    )
  }
}
