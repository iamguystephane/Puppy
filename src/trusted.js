import React from 'react'
import './App.css'
import './JS/all'
import './media.css'
import trustStar from './images/trust-star.png'
import trustpilotlogo from './images/trustpilotlogo.png'
export default function Trusted(){
    return(
        <section className = "trusted-section">
            <p> We are trusted by </p>
            <div className = "trusted-logos">
                <img src = {trustpilotlogo} width = "150px" height = "150px" style={{marginTop: '-10px'}} alt = "" className = "trusted-logo"/>
                <img src = {trustStar} width = "150px" height = "30px" alt = "" className = "start"/>
            </div>
            <p> <span style = {{fontWeight: '600'}}> 4,100+ </span> reviews </p>
        </section>
    )
}