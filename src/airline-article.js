import './App.css'
import React from 'react'
import dascairline from './images/dasc-airline.jpg'
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
                <img src = {dascairline} width = "700px" height = "300px" alt="" />
                <h2 style={{marginTop: '15px', width: '60%', textAlign: 'center'}}> How Puppies Travel on Commercial Airlines & Impacts Temperature and Weather Have </h2>
                <p style={{marginTop: '15px'}}> By Liam Gallagher - Janury 15 2022 </p>
                <p style={{marginTop: '15px', width: '60%', textAlign: 'center'}}> Liam has been in the puppy industry for over 13 years. He is currently operating as the Director of Breeder Development and Operations for Sarah Puppy. She has an enormous wealth of knowledge afforded to her both through first-hand experience and through working with the best breeder's in the industry for over a decade.</p>
            </div>
            <div className = "road-travel-hero-section commercial-airlines">
                <div className='before-list'>
                    <h1 style={{marginTop: '1em'}}> Airport pickup </h1>
                    <p style={{marginTop: '1em'}}> We try to get all our puppies home within 2-3 weeks. To do so, the puppy will need to meet age, weight and health requirements before being authorized to travel. The Travel team will then choose the best travel method for each puppy and customer based on many factors, including breeder and customer location, puppy age, and size.</p>
                    <p style={{marginTop: '1em'}}> As soon as we know the best way to get your puppy home, you will be the first to know. </p>
                </div>
                <h2 className='before-list'style={{marginTop: '1em'}}> How Pickup of a Puppy at a Commercial Airport Works </h2>
                <ul className='article-paragraphs'>
                    <li>
                        Sarah Puppy requires puppies to be at least 8 weeks old and 2.5 pounds, or 12 weeks in order to travel via commercial air.
                    </li>
                        
                    <li>
                        The airlines that offer animal transport services are currently limited to American Airlines and Alaska Airlines.
                    </li>
                    <li>
                        Not every route an airlines flies is available for animal transport. Model of airplane, and destination airport can be limiting factors.ay in the crate while driving.
                    </li>
                    <li>
                        Delays and rescheduling is common:
                        <ul className='indented-list'>
                            <li>
                                At the airlines discretion, they may bump previously scheduled animal transport for other usages.
                            </li>
                            <li>
                                At the airlines discretion, they may determine a puppy does not fit the crate provided and may refuse to provide animal transport. This happens at the check in employees discretion and is a final decision.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Weather
                        <ul className='indented-list'>
                            <li>
                                At the airlines discretion, they may cancel animal transport for weather related safety reasons (e.g. too hot or too cold).
                            </li>
                            <li>
                                This can happen at departure airport, connecting airport or arrival airport. Keep in mind airport tarmacs can be much hotter (and colder) that surrounding area.
                            </li>
                            <li>
                                There is NO way to change this. The airlines will make this decision if they feel the animal's welfare could be impacted in any way.
                            </li>
                        </ul>
                    </li>
                    <li>
                        As a result of all the conditions associated with planned commercial animal transportation, we cannot accommodate customer requests for time of day of a flight.
                    </li>
                    <li>
                        The airlines tell us when a puppy will fly, there is not a choice of time of day involved.
                    </li>
                    <li>
                        No food is allowed in the crate. Only water. Most breeders will supply frozen ice cubes.
                    </li>
                    <li>
                        This is why food from breeder and all documents are taped to the outside of the crate.
                    </li>
                    <li>
                        No toys, towels or other items are allowed in the crate—only loose paper to help with sanitation.
                    </li>
                    <li>
                        Plan to clean your puppy upon receiving them.
                    </li>
                    <li>
                        This is all for safety of the puppy.
                    </li>
                    <li>
                        Crates are zip tied for safety, and the airline will not open the crate even during a layover
                    </li>
                    <li>
                        The ONLY exception is for delays of four hours or more, which PuppySpot does not plan for. This would only happen during an unplanned delay of a connection and are called wellness checks.
                    </li>
                </ul>
                <h2 className='before-list'style={{marginTop: '1em'}}> Picking Up Your Puppy at the Airport and Making Sure Your Puppy is on their Flight </h2>
                <div className='before-list'>
                    <p style = {{marginTop: '1em'}}>  Every puppy flight is booked with a waybill number. This is like a human’s ticket number. This is what airlines use to track your puppy, and you can do that too.  </p>
                    <p style = {{marginTop: '1em'}}> Here is an example for American Airlines.</p>
                    <p style = {{marginTop: '1em'}}> Go to  https://www.aacargo.com/AACargo/tracking and enter the waybill number we provide to you once travel is confirmed</p>
                    <p style = {{marginTop: '1em'}}>For American Airlines this looks like 001-xxxxxxxx</p>
                    <p style = {{marginTop: '1em'}}> Your results will look something like the picture at the bottom of this article</p>
                    <p style = {{marginTop: '1em'}}> We strongly recommend contacting your airline 60-90 minutes prior to your puppy’s planned arrival to confirm everything has gone as scheduled. Additionally, each airport may have different locations each day to pick up live animals, and the airline will tell you where that this for the day of your puppy’s arrival. Ask the airline, PuppySpot will not know where your puppy is to be picked up.</p>
                    <h2 style = {{marginTop: '1em'}}> What to take with you to the airport.</h2>
                    <p style = {{marginTop: '1em'}}> It's important that you bring the following items with you to the airport: </p>
                    <ul style={{marginTop: '2em'}}>
                        <li> Photo ID – this must match the designated pick up person you provided us </li>
                        <li> Confirmation Number and Air Waybill Number </li>
                        <li> This will be provided by PuppySpot once travel is confirmed </li>
                        <li> Baby wipes or damp paper towels </li>
                        <li> Dry towel </li>
                        <li> Fresh newspaper for the travel carrier</li>
                        <li> Plastic garbage bag for soiled newspaper</li>
                        <li> Bottled water</li>
                        <li> Treats (Optional)</li>
                        <li> Leash and collar  (Optional as you may that at home) </li>
                        <li> Scissors (to cut through plastic zip tie on the front of carrier) </li>
                        <li> Nutri-Cal or Nutri-Stat  </li>
                    </ul>
                </div>
            </div>
            <div className='popular-and-search p-and-s'>
                <PopularRn />
                <PuppySearch />
            </div>
            <Footer />
        </div>
    )
}