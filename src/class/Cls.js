import React, { Component } from 'react'

export default class Cls extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
    }

  }
  isLoggedIn() {
    if (this.state.isLoggedIn) {
      return <p>Hello Shiv </p>
    } else {
      return <p>Hello Guest </p>

    }
  }
  isLoggedInTernary() {
    return (
      <>
        <b>Ternary Operator</b><p>
          Hello {this.state.isLoggedIn ? "Shiv" : "Gusest"}</p>
      </>
    )
  }
  render() {

    return (
      <div>
        <h2>Class Components</h2>
        {this.isLoggedIn()}
        {this.isLoggedInTernary()}
        {this.state.isLoggedIn && <p>Welcome Shiv</p>}
      </div>
    )
  }
}
