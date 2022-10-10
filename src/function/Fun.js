import React, { Fragment, useState } from 'react'

const Fun = ({ name }) => {
    const [message, setMessage] = useState("Hooks use Function Components")
    const clickMe=()=>{
        setMessage("Click messages")
    }
    return (
        <Fragment>
            <h2>{name}</h2>
            <p>{message}</p>
            <button onClick={clickMe}>Click Me</button>
        </Fragment>
    )
}

export default Fun