import './App.css'
import React from 'react'
import './media.css'
import { Link } from 'react-router-dom'

export default function ContactUsDropdown({onMouseEnter, onMouseLeave}){
    return(
        <ul className = "contact-dropdown" onMouseEnter = {() => onMouseEnter("about")} onMouseLeave = {onMouseLeave}>
            <li><Link to = "/about"> About Us </Link></li>
            <li><Link to = "/resource-center"> Resource Center </Link></li>
            <li><Link to = "/contact"> Contact Us </Link></li>
        </ul>
    )
}