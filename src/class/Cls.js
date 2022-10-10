import React, { Component, Fragment } from 'react'

export default class Cls extends Component {
  render() {
    const { name } = this.props
    return (
      <Fragment>
        <h2>{name}</h2>
      </Fragment>
    )
  }
}
