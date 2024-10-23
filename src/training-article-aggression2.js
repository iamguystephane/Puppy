import React from 'react'
import './App.css'
import Topfooter from './top-footer'
import Footer from './footer'
import NavBar from './nav'
import PuppySearch from './puppysearch'
import { Link } from 'react-router-dom'
import PopularRn from './popular'
import puppyescape from './images/training-aggressive-2.jpg'

export default function TrainingAggression2(){
    return(
        <div>
            <Topfooter />
            <NavBar />
            <div className="road-travel-article">
                <img src = {puppyescape} width = "800px" height = "400px" alt="" />
                <h2 style={{marginTop: '15px', width: '60%', textAlign: 'center', fontSize: '35px'}}> When The Bite's Bigger Than The Bark: Aggression in Dogs Part 2 </h2>
                <p style={{marginTop: '15px'}}> By Caleb Larson - April 15 2022 </p>
                <p style={{marginTop: '15px', width: '60%', textAlign: 'center'}}> Caleb has been in the puppy industry for over 13 years. He is currently operating as the Director of Breeder Development and Operations for Sarah Puppy. He has an enormous wealth of knowledge afforded to him both through first-hand experience and through working with the best breeder's in the industry for over a decade.</p>
            </div>
            <div style = {styles.container}>
                <p style = {styles.paragraph}>Dog aggression is a serious problem that can cause high anxiety, anger and heartbreak for owners, ultimately result in dangerous injuries (for both dogs and humans) and end in potentially fatal consequences, not to mention lead to cases of homeless and abandoned dogs. To better equip you with information and tools for how to rehabilitate an aggressive dog, in the second part of our three part series, we explore four additional types of aggression, the respective motives and recommended training approaches.</p>
                <strong style = {styles.heading}> Fearful Aggression </strong>
                <p style = {styles.paragraph}>You may have heard the saying "fight or flight" in relation to an evolutionary reaction to fear. In relation to dogs, while flight response is the most common reaction to fear; in situations where dogs cannot run away (on a leash, in close quarters in a home), they will switch to a fight response. Snapping, biting, and lunging are all symptoms of fear in this case, and show themselves as the ultimate defense mechanisms when unable to escape. Dissimilar to other forms of aggression, when a dog is afraid, signs may show (such as cowering in a corner or retreating before attack), but often do not. Common in both puppies and adult dogs, this behavior affects males and females equally.</p>
                <strong style = {styles.heading}> Training approach </strong>
                <p style = {styles.paragraph}>Training sessions will focus on building feelings of confidence and security. Methods could include coaxing the dog to take food from strangers, or socializing the dog within a controlled environment. The most timid dogs will require both obedience training and heavy socialization.</p>
                <strong style = {styles.heading}> Defense Aggression </strong>
                <p style = {styles.paragraph}>Not unlike fear-related aggression, defensively aggressive dogs are afraid, but instead of retreating or showing timid behavior prior to attack, they simply go on the offense and take the first strike on the victim, whether that shows itself by charging, biting, barking or growling. Defensive aggression is more common in adult dogs than puppies as this attack strategy requires more confidence built over time.</p>
                <strong style = {styles.heading}> Training approach </strong>
                <p style = {styles.paragraph}> Defensive aggressive dogs would benefit strongly from heavy socialization training. The key is for the owner to continuously provide positive experiences to thereby encourage positive associations with other dogs.
                </p>
                <strong style = {styles.heading}> Social aggression </strong>
                <p style = {styles.paragraph}>Socially aggressive dogs are typically happy-go-lucky and friendly, until someone in their "pack," be it a human family member, or another dog, oversteps their boundaries, thereby becoming a threat. These dogs consider themselves high in the hierarchal order and want to remind everyone else that they are for lack of better words, "king of the castle." Also often described as "dominance aggression," socially aggressive dogs may be triggered by simple social interactions such as grooming, unwanted displays of affection, lifting or picking up the dog or even entering a doorway at the same time as the dog.</p>
                <strong style = {styles.heading}> Training approach </strong>
                <p style = {styles.paragraph}> A dominant dog requires not only obedience training, but also overarching control by his owner. An animal behaviorist would likely recommend that the owner start controlling every aspect of the dog's life and establishing strict and consistent ground rules. Prime examples include breaking the habit of the dog sleeping in bed with the owner, not allowing the dog to interact with other dogs at the park, or keeping a leash on the dog at all times if worried about them charging ahead without permission. </p>
                <strong style = {styles.heading}> Frustration - elicited aggression </strong>
                <p style = {styles.paragraph}>Dogs who become frustrated often can't contain their emotions and lash out with aggression. Feelings of frustration might arise when a dog is excited by an object which then gets taken away or when the dog is restrained with a leash when he wants to run free or approach something or someone at his own pace. This type of aggression occurs in both puppies and adult dogs and doesn't favor one gender over the other.
                </p>
                <strong style = {styles.heading}> Training approach </strong>
                <p style = {styles.paragraph}> Frustrated dogs may benefit from a "reactive socialization class," where the dog is introduced to other dogs in a highly supervised setting. Through systematic interaction, the dog will be exposed to friendly, confident adult dogs under the watchful eye of a trainer. A focus will also be placed on redirecting the dog's focus onto something that doesn't elicit frustration, such as a game of fetch or obedience training with treat rewards.</p>
                <p style = {styles.paragraph}> To read about additional types of dog aggression, go to <Link to = "/resource-center/training/aggression-in-dog-part-3" > Part Three </Link> of our three-part series.</p>
            </div>
            <div className='popular-and-search p-and-s'>
                <PopularRn />
                <PuppySearch />
            </div>
            <Footer />
        </div>
    )
}

const styles = {
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paragraph: {
        width: '60%',
        marginTop: '1em',
        lineHeight: '1.6'
    },
    unOrderedList: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '1em'
    },
    li: {
        width: '60%',
        lineHeight: '1.6',
    },
    heading: {
        marginTop: '0.7em',
        width: '60%',
    }
}