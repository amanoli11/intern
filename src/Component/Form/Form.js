import React, { useState } from 'react'
import Card from '../Card/Card'
import './Form.css'
function Form() {

    const [state, setstate] = useState('Title')
    const [desc, setdesc] = useState('Description')
    const [data, setdata] = useState([])

    const listItems = () => {
        setdata((oldData) => {  
            return(
                [...oldData, ({id: Date.now(), state,desc})]
            )
        })
        setstate('')
        setdesc('')
    }

    const eventHandler = (e) => {
        setstate(e.target.value)
    }

    const removeItem = () => {
        console.log('deleted')
    }
    
    const post = data.map((datas) => {
        return(
            <div key={datas.id}>
                <Card title={datas.state} description={datas.desc} onClick={removeItem} />
            </div>
        )
    })

    
    console.log(data)


    return (
        <div>
        <div className='Form'>
            <h1>Enter details here</h1>
            <div className='submit'>
            <input type="text" onChange={eventHandler} value={state} placeholder='Title' ></input>
            <textarea onChange={e => setdesc(e.target.value)} value={desc} placeholder="Description" rows='4' cols='30' ></textarea>
            <button onClick={listItems}>Submit</button>
            <br />

            </div>
        </div>
        <div className='displayCard'>
            {post}
        </div>
        </div>

    )
}

export default Form
