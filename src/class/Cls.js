import React, { Component, createElement } from 'react'

export default class Cls extends Component {
  render() {
    return createElement(
        "div",
        null,
        createElement('h2',null,"Class  Components")
    )
  }
}
