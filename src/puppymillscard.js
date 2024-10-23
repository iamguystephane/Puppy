import './App.css'
import React from 'react'
import puppyMills from './images/puppy-mills.png'
export default function PuppyMillsSection(){
    return(
        <div className="puppy-mill-img-div">
            <div className="puppy-mill-div">
                <img src = {puppyMills} width="120px" height="80px" alt=""/>
                <h2 style={{marginTop: '1em'}}> No puppy Mills </h2>
                <p style={{marginTop: '1.5em'}}> SarrahPuppy mandates a <span style={{fontWeight: '600'}}> comprehensive, proprietary screening process </span> that all breeders must pass at time of onboarding, and again annually. </p>
                <br/>
                <p style={{marginTop: '1em'}}>Our screening process was developed by our independent <a href="index.js">Scientific Advisory Board </a> to exceed all state and federal standards.</p>
                <div className = "mills-btns" style={{marginTop: '2em'}}>
                    <button type = "button" className = "left-btn"> Learn More </button>
                    <button type = "button" className = "right-btn"> Browse all puppies </button>
                </div>
            </div>
        </div>  
    )
}