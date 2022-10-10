import React from 'react'
import Div from '../Div'

const Fun = (props) => {
    return (
        <>
            <Div>
                <p>passing the children components</p>
            </Div>
            <h2>{props.name}</h2>
        </>
    )
}

export default Fun