import React, { Component, Fragment } from 'react'

export default class Cls extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }
  clickMe() {
    this.setState({ count: this.state.count+ 1})
  }
  render() {
    const { name } = this.props
    return (
      <Fragment>
        <h2>{name}</h2>
        <p style={{color:"red"}}>{this.state.count}</p>
        <button onClick={() => this.clickMe()}>Click Me</button>
      </Fragment>
    )
  }
}
