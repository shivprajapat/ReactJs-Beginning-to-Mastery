import React, { Component } from 'react'

class Child extends Component {
    render() {
        const { clickMe } = this.props;
        return (
            <div>
                <h5>Child</h5>
                <button onClick={() => clickMe('child component !!')}>child button</button>
            </div>
        )
    }
}

export default Child