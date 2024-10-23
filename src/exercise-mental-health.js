import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Topfooter from './top-footer'
import Footer from './footer'
import NavBar from './nav'
import PuppySearch from './puppysearch'
import PopularRn from './popular'
import puppyescape from './images/exercise-mental-health.webp'

export default function ExerciseMentalHealth(){
    return(
        <div>
            <Topfooter />
            <NavBar />
            <div className="road-travel-article">
                <img src = {puppyescape} width = "800px" height = "400px" alt="" />
                <h2 style={{marginTop: '15px', width: '60%', textAlign: 'center', fontSize: '35px'}}> How Exercise Can Improve Your Puppy's Mental Health and Overall Happiness </h2>
                <p style={{marginTop: '15px'}}> By Caleb Larson - March 10 2018 </p>
                <p style={{marginTop: '15px', width: '60%', textAlign: 'center'}}> Caleb has been in the puppy industry for over 13 years. He is currently operating as the Director of Breeder Development and Operations for Sarah Puppy. He has an enormous wealth of knowledge afforded to him both through first-hand experience and through working with the best breeder's in the industry for over a decade.</p>
            </div>
            <div style = {styles.container}>
                <p style = {styles.paragraph}>When we first met our puppy, she was jumping, playing, and rolling around on a trampoline with her brothers and sisters. She was full of energy and thrilled to meet us. Being first time puppy parents, we were not experts on what to do or expect when you first get a puppy. For the first few months, Lady was doing all the usual puppy things—biting, barking, jumping, chewing, and fretting about squirrels or other action in the backyard. We tried to walk her outside to burn some of her energy, but most pups, especially Jack Russel Terriers, don't know how to walk like humans without proper training. To put it mildly, walking with Lady was a struggle, and not much fun for any of us.</p>
                <p style = {styles.paragraph}>I soon figured out how much she loved tug-of-war, and would spend a couple of hours each night duking it out over a rope or a strong rubber toy. This was great for her physical and mental health, and a fun way to bond before she'd pass out on my lap while we watched Game of Thrones.</p>
                <h3 style = {styles.heading}>THE LIGHT BULB</h3>
                <p style = {styles.paragraph}>The light-bulb moment came on a beautiful spring day when I followed Lady into our backyard to play fetch, and instead of insisting that she play fetch in the traditional way, I followed her lead. She wanted me to chase her once she got the ball—a keep away game of sorts. I started to chase her around the yard and she'd rocket off in broad circles in our yard and then stop and stare me down, waiting for me to make a sudden movement so she could dart past me and make another lap or two. Rinse and repeat, <strong><i>and magically, we'd have angel of a dog the rest of the day </i></strong> —until she was ready for her usual night-time shift of tug-of-war. </p> 
                <p style = {styles.paragraph}>Funny enough, these early and mid-day sprints were not only benefitting Lady, but were benefitting me! The Vitamin D, the warmth of the sun, the light sweat, increased heart rate, and jolt of joy and dopamine I'd get from chasing Lady and seeing her happy were incredibly beneficial during a work-from-home day full of zoom meetings and emails. </p>
                <p style = {styles.paragraph}><Link to = "/resource-center/exercise/how-much-exercise-a-puppy-needs" style = {styles.a}>Figuring out what exercise </Link> was best for Lady, and most natural to her breed was revolutionary in her behavior, her happiness, and her mental and physical health, and certainly beneficial for me and my family. Now my wife and son also play this game with her and it's great to do before and after we leave for a few hours so we know she'll be ready to rest and relax.</p>
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