import './App.css'
import React from 'react'
import './media.css'
import { Link } from 'react-router-dom'

export default function Puppyslider(props){
    return(
        <div className = "puppy-slider-card" key={props.pup.id}>
            <Link to = {`/puppies-for-sale/${props.pup.id}`}>
                <img src = {props.pup.image} width = "230px" height = "250px" alt = "" />
                <div className = "puppy-slider-card-info" style = {{display: 'flex', flexDirection: 'column', alignItems: 'left', padding: '0 10px', marginTop: '5px'}}>
                    <h2> {props.pup.name} </h2>
                    <p> Available for delivery </p>
                    <p style = {{display: 'flex', alignItems: 'center', gap: '6px'}}>{props.pup.gender} <span style = {{fontSize: '25px', fontWeight: '600', marginTop: '-10px', textAlign: 'center'}}>.</span><span> {props.pup.age} </span></p>
                </div>
            </Link>
        </div>
    )
}