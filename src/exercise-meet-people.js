import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Topfooter from './top-footer'
import Footer from './footer'
import NavBar from './nav'
import PuppySearch from './puppysearch'
import PopularRn from './popular'
import puppyescape from './images/exercise-friends.jpg'

export default function ExerciseMeetPeople(){
    return(
        <div>
            <Topfooter />
            <NavBar />
            <div className="road-travel-article">
                <img src = {puppyescape} width = "800px" height = "400px" alt="" />
                <h2 style={{marginTop: '15px', width: '60%', textAlign: 'center', fontSize: '35px'}}> How Your Dog Can Help You Make Friends and Meet People</h2>
                <p style={{marginTop: '15px'}}> By Caleb Larson - March 10 2018 </p>
                <p style={{marginTop: '15px', width: '60%', textAlign: 'center'}}> Caleb has been in the puppy industry for over 13 years. He is currently operating as the Director of Breeder Development and Operations for Sarah Puppy. He has an enormous wealth of knowledge afforded to him both through first-hand experience and through working with the best breeder's in the industry for over a decade.</p>
            </div>
            <div style = {styles.container}>
                <p style = {styles.paragraph}>Owning a dog comes with many perks. There's the unconditional love, <Link to = "/resource-center/dog-ownership" style = {styles.a}> health benefits </Link> and a sense of security, just to name a few. But what you may not know is that your furry friend can help find more human companionship, too. Read on for ways to put your best paw forward and form new relationships with other dog owners.</p>
                <h2 style = {styles.heading}>The Classic Dog Park Interaction</h2>
                <p style = {styles.paragraph}>Going to the dog park is an obvious choice for dog owners seeking to meet like-minded individuals. For one, at the dog park you're bound to find other dog-owners who share the same love for their furry friend as you do. Also, since people frequent the dog park during their leisure time, you're not likely to trouble another dog owner by striking up a conversation. Get the most out of your visits to the dog park by establishing a routine schedule for your visits. That way, you'll be more likely to see the same familiar faces over and over again and eventually get to know them on a deeper level than just a simple hello. If your dog approaches another dog, or another dog shows interest in yours, use this interaction opportunity as an ice-breaker to converse with the other dog's owner and ask questions. The owner will surely have a lot to say about his or her dog, and it shouldn't be too hard to find something in common. Over time, you might gain not just a new playmate for your pup, but a friend of your own too.</p>
                <h3 style = {styles.heading}>Join a Meetup Group or Breed Club</h3>
                <p style = {styles.paragraph}>There are tons of groups that are formed for the sole purpose of dog owners and their dogs to socialize together. Find one in your area by searching Facebook or checking out services like EventBrite. Breed clubs are also a great way to meet people with an appreciation for the same breed of dog, and often organize events and activities centered around this shared interest. You can find a club near you by browsing AKC's <Link to = "https://www.akc.org/clubs-delegates/" style = {styles.a}>website</Link>.</p>
                <h3 style = {styles.heading}>Make Small Talk at the Vet or Groomer</h3>
                <p style = {styles.paragraph}>Since a visit to the<Link to = "/resource-center/health-care/first-vet-check" style = {styles.a}> Vet's office</Link> or groomer can leave a dog owner feeling anxious, some words of reassurance to your fellow pup-parent in the waiting room can be a welcome mood-lightener. You can also exchange tips and tricks for caring for your pup from another experienced dog owner. Just keep the conversation casual, and you never know what friendship might develop.</p>
                <h3 style = {styles.heading}>Enroll in an Obedience Class</h3>
                <p style = {styles.paragraph}>At an obedience class, the shared goal of wanting your dog to succeed in<Link to = "/resource-center/health-care/first-vet-check" style = {styles.a}> training</Link> gives dog owners something to bond over. A good conversation starter could be something as simple as a compliment on another dog's conduct, or a question like "How do you get your dog to sit still like that?" To give you and your dog more time to socialize with others, come to classes early and stick around for a few minutes afterward. At the very least, the obedience training will hopefully help make your dog better behaved and approachable to new dogs and new people.</p>
                <p style = {styles.paragraph}>With your dog by your side, friendship opportunities can be found all over the neighborhood. Whether it's a dog-based organization or just your local coffee shop, few can resist the lovable sight of a four-legged friend.</p>
                <p style = {styles.paragraph}><i>How does your dog help you meet new people? Comment below and share with us!</i></p>
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
    heading: {
        fontWeight: '600',
        width: '60%',
        marginTop: '1em'
    },
    orderedList: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    a: {
        color: '#ff7b00',
        textDecoration: 'none',
        fontWeight: '600'
    },
    listItem: {
        width: '57%',
        lineHeight: '1.6'
    },
    paragraph: {
        width: '60%',
        marginTop: '1em',
        lineHeight: '1.6'
    }
}