import React, { useState } from 'react'
import './Card.css'

function Card( props ) {

    const [more, setmore] = useState(false)

    return (
        <div className='Card'>
            <h2>{props.title}</h2>
            <hr />
            {
                more?
                <p className='text'>{props.description}</p>:
                <p className='text'>{props.description.slice(0,10)}...</p>
            }
            <br />
            <button onClick={() => setmore(!more)}>Expand</button>
            <button onClick={props.onClick}>Remove</button>
        </div>
    )
}

export default Card
