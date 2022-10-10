import React, { Fragment } from 'react'
import Div from '../Div'

const Fun = (props) => {
    return (
        <Fragment>
            <Div>
                <p>passing the children components</p>
            </Div>
            <h2>{props.name}</h2>
        </Fragment>
    )
}

export default Fun