import React from 'react'

const Child = ({clickMe}) => {
    return (
        <div>
            <h5>Child</h5>
            <button onClick={() => clickMe('child component !!')}>child button</button>
        </div>
    )
}

export default Child