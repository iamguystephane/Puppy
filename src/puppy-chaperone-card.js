import React from 'react'
import './App.css'
import './media.css'

export default function ChaperoneCard(props){
    return(
        <div className = "puppy-chaperone-card">
            <img src = {props.img} width = "90px" height = "80px" alt = ""/>
            <h3 style = {{marginTop: '20px'}}> {props.heading} </h3>
            <p style = {{textAlign: 'center', lineHeight: '30px', marginTop: '10px'}}> {props.text}</p>
        </div>
    )
}