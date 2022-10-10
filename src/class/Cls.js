import React, { Component } from 'react'
import Parent from './Parent';

export default class Cls extends Component {
  render() {
    return (
      <div>
        <h2>Class Components</h2>
        <Parent />
      </div>
    )
  }
}
