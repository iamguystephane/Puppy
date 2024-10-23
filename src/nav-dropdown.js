import './App.css'
import React from 'react'
import './media.css'
import { Link } from 'react-router-dom'
export default function DropDownMenu( {onMouseEnter, onMouseLeave} ){
    return (
        <ul className = "our-promise-drop-down" onMouseEnter = {() => onMouseEnter("promise")} onMouseLeave = {onMouseLeave}>
            <li><Link to = "/promise">Sarah Puppy Promise</Link></li>
            <li><Link to = "/breeder-standards">Breeder Standards</Link></li>
            <li><Link to = "/puppy-travel">Puppy Travel</Link></li>
            <li><Link to = "/health-check">Health Check</Link></li>
            <li><Link to = "/customer-reviews">Customer Reviews</Link></li>
            <li><Link to = "/puppy-gives">Sarah Puppy Gives Back</Link></li>
        </ul>
    )
}