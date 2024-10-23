import React from 'react'
import './App.css'

export default function AboutLeadership(props){
    return(
        <div className = "about-leadership-section">
            <img src={props.lead.image} width="200px" height="200px" alt="" />
            <div className="about-leadership-vr"></div>
            <div className="about-leadership-infosection">
                <h2> {props.lead.name} </h2>
                <h4> {props.lead.title} </h4>
                <p> {props.lead.description} </p>
            </div>
        </div>
    )
}