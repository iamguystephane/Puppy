import React from 'react'
import './App.css'
import virtualtraining from './images/training-virt.webp'
import NavBar from './nav'
import Footer from './footer'
import PopularRn from './popular'
import Topfooter from './top-footer'
import PuppySearch from './puppysearch'

export default function VirtualTraining(){
    return(
        <div>
            <Topfooter />
            <NavBar />
            <div className="road-travel-article virtual-training">
                <img src = {virtualtraining} width = "700px" height = "300px" alt="" />
                <h1 style={{marginTop: '15px'}}>Why do Virtual Training? </h1>
                <p style={{marginTop: '15px'}}> By Caleb Larson - May 20, 2021 </p>
                <p style={{marginTop: '15px', width: '60%', textAlign: 'center'}}> Caleb is SarahPuppy's Director of Digital Marketing. She has been a long-time dog lover, and is a dog dad to one of the cutest Dachshund puppies around. He is passionate about the betterment of puppies everywhere and bringing to light truths surrounding responsible breeding.</p>
            </div>
            <div className = "road-travel-hero-section">
                <div className='before-list'>
                    <p style={{marginTop: '1em'}}> Over the past several years, a growing number of dog owners have turned to one-on-one dog training over video chat and found it to be more convenient, and also more effective. This shift accelerated in 2020 as COVID-19 restrictions took effect and consumers began exploring digital services more broadly.Congratulations on your new puppy! </p>
                    <p style={{marginTop: '1em'}}> The increasing popularity of virtual training is easy to understand. Traditional group classes force dogs to learn new skills in highly distracting environments, all while making puppy parents compete for the group trainer's attention. Virtual training on a platform like GoodPup provides a better solution through one-on-one coaching, personalized curriculum, and scheduling flexibility, all without leaving home. Dogs learn new skills faster and see problem behaviors improved more quickly.</p>
                    <p style={{marginTop: '1em'}}> Virtual training also provides advantages over traditional one-on-one courses. GoodPup recruits top trainers from across the country, letting puppy parents work with the best trainers no matter where they are located. Training over video chat also allows a dog to focus on and learn from their owner, improving the puppy-parent bond. </p>
                </div>
                <div className='before-list'>
                    <p style = {{marginTop: '1em'}}>  Finally, virtual training provides support outside the actual training session. GoodPup's app helps puppy parents build on what is covered in a training session and advance through a series of levels for each skill. And, if a puppy parent runs into any trouble between sessions, they are able to text chat with their trainer whenever they want. </p>
                </div>
            </div>
            <div className='popular-and-search'>
                <PopularRn />
                <PuppySearch />
            </div>
            <Footer />
        </div>
    )
}