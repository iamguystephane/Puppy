import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import locationImg from './images/location.png'
import './JS/all'
import visacard from './images/visacard.png'
import mastercard from './images/mastercard.png'
import discoverlogo from './images/discoverlogo.png'
import paypal from './images/paypal.png'
import biz from './images/biz.png'
import footerImg from './images/footerimg.png'
import './media.css'

export default function Footer(){
    return(
        <footer>
            <h1 style = {{marginTop: '100px', textAlign: 'center'}}> Puppies For Sale Everywhere </h1>
            <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent: 'center'}}>
                <img src = {locationImg} width = "250px" height = "180px" alt = "" style = {{marginLeft: '10%'}}/>
                <p className = "footer-delivery-text"> See all the US locations available for puppy delivery </p>
            </div>
            <div className = "location-area">
                <div className = "location-card">
                    <h3 style = {{marginTop: '10px'}}> West </h3>
                    <p> California </p>
                    <p> Colorado </p>
                    <p> Idaho </p>
                    <p> Montana </p>
                    <p> Wyoming </p>
                    <p> Nevada </p>
                    <p> Oregon </p>
                    <p> Utah </p>
                    <p> Washington </p>
                </div>
                <div className = "location-card">
                    <h3 style = {{marginTop: '10px'}}> South West </h3>
                    <p> Arizona </p>
                    <p> Oklahoma </p>
                    <p> New Mexico </p>
                    <p> Texas </p>
                </div>
                <div className = "location-card">
                    <h3 style = {{marginTop: '10px'}}> Mid West </h3>
                    <p> Illinois </p>
                    <p> Indiana </p>
                    <p> Iowa </p>
                    <p> Kansas </p>
                    <p> Michigan </p>
                    <p> Minnesota </p>
                    <p> Missouri </p>
                    <p> Nebraska </p>
                    <p> North Dakota </p>
                    <p> Ohio </p>
                    <p> Wisconsin </p>
                    <p> South Dakota </p>
                </div>
                <div className = "location-card">
                    <h3 style = {{marginTop: '10px'}}> North East </h3>
                    <p> Connecticut </p>
                    <p> Delaware </p>
                    <p> Maine </p>
                    <p> Maryland </p>
                    <p> Massachusetts </p>
                    <p> New Hampshire </p>
                    <p> New Jersey </p>
                    <p> New York </p>
                    <p> Pennsylvania </p>
                    <p> Rhode Island </p>
                    <p> Vermont </p>
                </div>
                <div className = "location-card">
                    <h3 style = {{marginTop: '10px'}}> South East </h3>
                    <p> Alabama </p>
                    <p> Arkansas </p>
                    <p> Florida </p>
                    <p> Georgia </p>
                    <p> Kentucky </p>
                    <p> Louisiana </p>
                    <p> Mississippi </p>
                    <p> North Carolina </p>
                    <p> South Carolina </p>
                    <p> Tennessee </p>
                    <p> Virginia </p>
                    <p> West Virginia </p>
                </div>
            </div>
            <h1 style = {{marginTop: '80px', textAlign: 'center'}}> Sarah Dachshund Puppy </h1>
            <p style ={{textAlign: 'center'}}> Send us an SMS: <span style = {{color: '#ff7b00', fontWeight: '600'}}>(937) 770-4584</span></p>
            <div className = "footer-contact-info">
                <div>
                    <h3> Find a Puppy </h3>
                    <ul>
                        <li><Link to = "/"> View all puppies </Link></li>
                        <li><Link to = "/"> Characteristics </Link></li>
                    </ul>
                </div>
                <div>
                    <h3> Customer  </h3>
                    <ul>
                        <li><Link to = "/"> Log in </Link></li>
                        <li><Link to = "/"> Sign up </Link></li>
                        <li><Link to = "/"> Support </Link></li>
                        <li><Link to = "/"> Special offer </Link></li>
                    </ul>
                </div>
                <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px'}}><div>
                    <h3> About SarahPuppy  </h3>
                    <ul>
                        <li><Link to = "/"> About us </Link></li>
                        <li><Link to = "/"> SarahPuppy promise </Link></li>
                        <li><Link to = "/"> Careers </Link></li>
                        <li><Link to = "/"> Dog registration </Link></li>
                        <li><Link to = "/"> AKC routine </Link></li>
                    </ul>
                </div>
                <div>
                    <h3> Social media </h3>
                    <Link to = "https://www.facebook.com/share/kMWrtevV3xt4suEE/?mibextid=K35XfP"><i class="fa-brands fa-facebook-f" style = {{fontSize: '50px'}}></i></Link>
                    &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fa-brands fa-instagram" style = {{fontSize: '50px'}}></i>
                </div></div>
            </div>
            <div className = "logo-section">
                <div class = "footer-logos">
                    <div><img src = {visacard} width = "70px" height = "40px" alt = ""/></div>
                    <div><img src = {paypal} width = "70px" height = "40px" alt = ""/></div>
                    <div><img src = {mastercard} width = "70px" height = "40px" alt = ""/></div>
                    <div><img src = {discoverlogo} width = "70px" height = "40px" alt = ""/></div>
                </div>
            </div>
            <div className = "final-footer-section">
                <ul>
                    <li><Link to = "/"> Privacy </Link></li>
                    <li><Link to = "/"> Terms of use </Link></li>
                    <li><Link to = "/"> Sitemap </Link></li>
                    <li><Link to = "/"> &copy; 2024 SarahPuppy </Link></li>
                </ul>
                <img src = {biz} width = "120px" height = "70px" alt = ""/>
            </div>
            <img src = {footerImg} width = "100%" alt = "" />
        </footer>
    )
}