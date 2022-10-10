import React, { Component } from 'react'
import Child from './Child';

 class Parent extends Component {
    clickMe(){
        alert("Click to parent component!");
    }
  render() {
    return (
      <div>
        <h5>Parent</h5>
        <Child clickMe={this.clickMe}/>
      </div>
    )
  }
}

export default Parent