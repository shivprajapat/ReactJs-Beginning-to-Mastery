import React, { Fragment, useState } from 'react'

const Fun = ({ name }) => {
    const [count, setCount] = useState(0)
    const clickMe=()=>{
        setCount(count + 1)
    }
    return (
        <Fragment>
            <h2>{name}</h2>
            <p style={{color:"red"}}>{count}</p>
            <button onClick={clickMe}>Click Me</button>
        </Fragment>
    )
}

export default Fun