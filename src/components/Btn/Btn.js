import React from 'react'
import { Link } from 'react-router-dom'
import './Btn.css'

const Btn = (props) => {
    if (props.to) {
        return <Link to={props.to} ><button disabled={props.disabled} className="poll-btn">{props.children}</button></Link>
    } else {
        return <button disabled={props.disabled} className="poll-btn">{props.children}</button>
    }
}

export default Btn
