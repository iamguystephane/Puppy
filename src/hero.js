import './App.css'
import React from 'react'
import './JS/all'
import './media.css'
import puppyMailbox from './images/puppymailbox.png'
import breedersMeet from './images/breeder.png'
import homeDelivery from './images/home-delivery.png'
import puppyChaperone from './images/chaperone.png'
import ChaperoneCard from './puppy-chaperone-card'
import Puppyslider from './puppyslider'
import puppyCards from './puppy-cards'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import responsive from './carouselresponsive'
import PuppyMillsSection from './puppymillscard'
import CommunityLove from './communitylove'

let puppycard = puppyCards.map(pup =>{
    return <Puppyslider 
      key = {pup.id}
      pup = {pup}
    />
  })

export default function Hero(){
    return(
        <section className = "delivery-info">
            <CommunityLove />
            <PuppyMillsSection />
            <h1 style = {{marginTop: '50px'}}> Puppy spotlight </h1>
            <div className = "puppy-slider">
                <Carousel 
                    responsive = {responsive} 
                    className = "carousel" 
                    swipeable = {true}>
                    {puppycard}
                </Carousel>
            </div>
            <img src = {puppyMailbox} width = "150px" height = "110px" style = {{marginTop: '30px'}}/>
            <h2 style = {{fontSize: '28px'}}> We Deliver Joy </h2>
            <p className = "transportation-paragraph"> Our transportation options ensure the health, comfort, quality, and communication from the breeder's doorstep to that first wet-nose moment. <span style = {{fontWeight: '600'}}>Here are the</span><span style = {{color: '#ff7b00', fontWeight: '600'}}> 3 different ways</span><span style = {{fontWeight: '600'}}> to get your puppy home:</span></p>
            <div className = "delivery-info-timeframe">
                <i class="fa-solid fa-calendar"></i>
                <p> We try to get all our puppies home within <span style = {{color: '#ff7b00', fontWeight: '600'}}>2-3 weeks</span>.</p>
            </div>
            <div className = "puppy-chaperone">
                <ChaperoneCard 
                    img = {puppyChaperone}
                    heading = "Puppy Chaperone"
                    text = "A Puppy Chaperone brings your puppy to an airport near you. A Puppy Chaperone is a human companion who accompanies your puppy in the cabin of the plane."
                />
                <ChaperoneCard 
                    img = {homeDelivery}
                    heading = "Deliver Near Your Home"
                    text = "We work with trusted licensed professionals in the commercial air and ground transportation puppy travel business to get your puppy to a pickup location as close to your home as possible."
                />
                <ChaperoneCard 
                    img = {breedersMeet}
                    heading = "Breeder Meet Up"
                    text = "Meet the breeder and your puppy at a location near the kennel. If you are interested in a pickup, please check with a PuppySpot pack member to see if this is an option."
                />
            </div>
            <div className = "chaperone-card-btns">
                <button type = "button" className = "left-btn"> Learn More </button>
                <button type = "button" className = "right-btn"> Browse all puppies </button>
            </div>
        </section>
    )
}