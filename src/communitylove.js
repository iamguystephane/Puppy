import './App.css'
import React from 'react'
import communityimg from './images/community.png'
import './JS/all'
import ReviewCard from './reviewcard'
import reviewcardArray from './reviewcardArray'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import responsive from './reviewresponsive'

let review = reviewcardArray.map(rev =>{
    return <ReviewCard 
        key = {rev.id}
        rev = {rev}
    />
})
export default function CommunityLove(){
    return(
        <section className="community-and-review-section">
            <div className="left-section">
                <img src={communityimg} width="90px" height="80px" alt="" />
                <h2 style = {{marginTop: '1em'}}> Loved by the community </h2>
                <p style = {{marginTop: '1em'}}> Sarah puppy serves you best by putting the health and well-being of your puppy first. Don't take our word for it, <span style = {{fontWeight: '600'}}> here's what real customers have to say about Sarah puppy </span>.</p>
                <div className="placement" style = {{marginTop: '1em'}}>
                    <i class="fa-solid fa-check" />
                    <p> We've been placing healthy puppies in happy homes for nearly 20 years.</p>
                </div>
                <div className = "mills-btns" style = {{marginTop: '1em'}}>
                    <button type = "button" className = "left-btn"> More reviews </button>
                    <button type = "button" className = "right-btn"> Browse all puppies </button>
                </div>
            </div>
            <div className="right-section">
                <Carousel
                    responsive={responsive}
                    className = "review-carousel" 
                    swipeable = {true}
                    showDots={true}>
                    {review}
                </Carousel>
            </div>
        </section>
    )
}