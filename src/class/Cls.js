import React,{Component, Fragment} from 'react'

export default class Cls extends Component {
  render() {
    return (
        <Fragment>
          <div>
            <>
            <h2>{this.props.name}</h2>
            </>
          </div>
        </Fragment>
    )
  }
}
