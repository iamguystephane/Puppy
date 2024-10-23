import './App.css'
import React from 'react'
import dasctravel from './images/dasc-travel.jpg'
import NavBar from './nav'
import Footer from './footer'
import PopularRn from './popular'
import Topfooter from './top-footer'
import PuppySearch from './puppysearch'
export default function RoadTravelArticle(){
    return(
        <div>
            <Topfooter />
            <NavBar />
            <div className="road-travel-article">
                <img src = {dasctravel} width = "700px" height = "300px" alt="" />
                <h1 style={{marginTop: '15px'}}> Traveling with your new puppy </h1>
                <p style={{marginTop: '15px'}}> By Liam Gallagher - November 5 2021 </p>
                <p style={{marginTop: '15px', width: '60%', textAlign: 'center'}}> Liam has been in the puppy industry for over 13 years. He is currently operating as the Director of Breeder Development and Operations for Sarah Puppy. She has an enormous wealth of knowledge afforded to her both through first-hand experience and through working with the best breeder's in the industry for over a decade.</p>
            </div>
            <div className = "road-travel-hero-section">
                <div className='before-list'>
                    <p style={{marginTop: '1em'}}> Congratulations on your new puppy! </p>
                    <p style={{marginTop: '1em'}}> Your new puppy isn’t just entering your life; they will enter your heart and stay there permanently.</p>
                    <p style={{marginTop: '1em'}}> For the safety and care of the puppy, we have some tips and recommendations to ensure that your travel back home is a safe and happy one. </p>
                </div>
                <ul className='article-paragraphs'>
                    <li>
                        Keep the puppy in the crate while driving
                        <ul className='indented-list'>
                            <li>
                                We know that it is exciting now that you have your little puppy, and there will be plenty of time for hugs and kisses when you are home. However, for the puppy's safety, it is recommended to stay in the crate while driving.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Potty breaks
                        <ul className='indented-list'>
                            <li>
                                Your puppy will need to take a potty break every 2-3 hours, depending on your drive time. We recommend that you find a safe area, away from any highways or congested areas. We do not recommend dog parks due to heavy dog traffic, and your puppy is still receiving their series of booster vaccines.
                            </li>
                            <li>
                                Place a secure collar or harness on the puppy and ensure it is tightened enough that the puppy will not slip out; you should be able to place just your index finger between the harness/collar and puppy.
                            </li>
                            <li>
                                Let the puppy walk around but always watch to make sure they don’t attempt to eat anything foreign on the ground.r vaccines.
                            </li>
                            <li>
                                This is also an excellent time to offer a bit of refreshing water, a small snack of their food, and some Nutri-Cal (a supplement). Use about a dime size portion.
                            </li>
                            <li>
                                After your puppy has had their potty break, we recommend that you take a baby wipe and wipe their feet before placing them back in the carrier.
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className='before-list'>
                    <p style = {{marginTop: '1em'}}>  Your puppy has just had an exciting journey from their mom, to their new forever home. It is not uncommon for them to be a little quiet or not overly excited to eat. Allow the puppy time to acclimate and understand that they are “home.” </p>
                    <p style = {{marginTop: '1em'}}> ***Your puppy must start to eat and drink water within a couple of hours of being home, even if it is frequent small amounts. It is equally vital that Nutri-Cal is administered with the same feeding frequency, at least until you have taken your little one to your veterinarian. You can then consult with them for feeding and Nutri-Cal schedule.</p>
                    <p style = {{marginTop: '1em'}}> If you have any questions, please reach out to us at (937) 770-4584, Mon-Fri 9am-9pm ET, Sat-Sun 9am-8pm ET. For medical emergencies, please contact your regular veterinarian or nearest emergency hospital before contacting Sarah Dachshund puppy.</p>
                    <p style = {{marginTop: '1em'}}> Wishing you and your pup the best! </p>
                    <p style = {{marginTop: '1em'}}> Team Sarah Puppy </p>
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