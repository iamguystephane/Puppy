import React from 'react'
import './App.css'
import './media.css'

export default function HeaderCard(props){
    return(
        <section class = "info-card">
            <img src = {props.Img} width = "60px" height = "60px" />
            <span style = {{textAlign: 'center', width: '100%'}}> {props.name} </span>
            <p style = {{textAlign: 'center'}}> {props.characteristic} </p>
        </section>
    )
}