import React, { Component, Fragment } from 'react'

export default class Cls extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "Hooks use Class Components" }
  }
  clickMe() {
    this.setState({ message: "Click messages" })
  }
  render() {
    const { name } = this.props
    return (
      <Fragment>
        <h2>{name}</h2>
        <p>{this.state.message}</p>
        <button onClick={() => this.clickMe()}>Click Me</button>
      </Fragment>
    )
  }
}
