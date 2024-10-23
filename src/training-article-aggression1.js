import React from 'react'
import './App.css'
import Topfooter from './top-footer'
import Footer from './footer'
import NavBar from './nav'
import PuppySearch from './puppysearch'
import { Link } from 'react-router-dom'
import PopularRn from './popular'
import puppyescape from './images/training-aggressive-3.webp'

export default function TrainingAggression1(){
    return(
        <div>
            <Topfooter />
            <NavBar />
            <div className="road-travel-article">
                <img src = {puppyescape} width = "800px" height = "400px" alt="" />
                <h2 style={{marginTop: '15px', width: '60%', textAlign: 'center', fontSize: '35px'}}> When The Bite's Bigger Than The Bark: Aggression in Dogs Part 1 </h2>
                <p style={{marginTop: '15px'}}> By Caleb Larson - April 15 2022 </p>
                <p style={{marginTop: '15px', width: '60%', textAlign: 'center'}}> Caleb has been in the puppy industry for over 13 years. He is currently operating as the Director of Breeder Development and Operations for Sarah Puppy. He has an enormous wealth of knowledge afforded to him both through first-hand experience and through working with the best breeder's in the industry for over a decade.</p>
            </div>
            <div style = {styles.container}>
                <p style = {styles.paragraph}>Aggression in dogs is a scary, yet complex behavioral pattern, but is common and treatable with an intensive training plan. It's important to accept at the onset of dog ownership that most dogs will exhibit some form of aggression at some point, typically when guarding their territories or protecting themselves or their puppies. Dogs also often demonstrate aggression to keep the peace or exchange social interaction with other dogs and humans. Thus, if you watch for the signs early on and address them, aggression issues can be overcome.</p>
                <p style = {styles.paragraph}>Visible signs of aggression include but are not limited to a threatening bark, charging forward at another person or dog, "muzzle punching" also known as a punch with the dog's snout, growling, showing teeth, snapping, nipping, biting, snarling or mouthing. These behaviors could occur simultaneously, individually or in sequence. The intensity of the behavior does not necessarily define aggression. For example, even a quick nip that leaves no mark is still a form of aggressive conduct that needs immediate attention.</p>
                <p style = {styles.paragraph}>Before beginning a tailored training program to combat your dog's specific type of aggression, it's crucial to understand the root of why it's happening, motives and signs associated with your dog's aggression classification. By reviewing the breakdown below, you'll come to learn how to address each type individually.</p>
                <strong style = {styles.heading}> Territorial Aggression-What is it? </strong>
                <p style = {styles.paragraph}>This type of aggression is a result of the desire to protect an area from intruders. If another dog or animal encroaches on a territorial dog's turf, he will attack or bite in retaliation. Dogs who charge human guests or visitors in the home would also be classified as territorial aggressors. Territorial aggression is mostly experienced by adult dogs or adolescent dogs from 1-3 years of age, rather than puppies.</p>
                <strong style = {styles.heading}> Training approach </strong>
                <p style = {styles.paragraph}> The appropriate training plan should focus on establishing the owner as the "pack leader" in order to teach the dog where their territory is. The owner will then set ground rules of engagement such as that the backyard is not the dog's territory, but rather a shared family space.
                </p>
                <strong style = {styles.heading}> Protective aggression </strong>
                <p style = {styles.paragraph}>Some dogs show aggressive tendencies when they believe one of their own puppies, their owner or someone they love is in danger. Protective aggression is likely to show when the so-called "victim" is particularly vulnerable, such as a new baby brought into the home. If a dog believes a stranger is a threat to the newborn baby's safety for example, he may attack. This is another type of aggression normally displayed by adult or maturing dogs. Puppies rarely become protective aggressors.
                </p>
                <strong style = {styles.heading}> Training approach </strong>
                <p style = {styles.paragraph}> Dogs who suffer from protective aggression would benefit from socialization training (controlled exposure to other dogs and humans) as well as desensitization, which essentially is introducing the aggression triggers in extremely small, controlled doses so as to manage the dog's reaction. </p>
                <strong style = {styles.heading}> Possession aggression </strong>
                <p style = {styles.paragraph}>Possessive aggressive dogs demonstrate aggression when a human or other dog is in control of something highly desirable, or when fiercely guarding their own possessions such as food or toys. Protecting territory and possessions is a natural, instinctual behavior that was necessary for survival in the wild; however it's a behavior that must be broken in domestic animals. Resource guarding is especially common in puppies, who recently had to compete with litter-mates for food.
                </p>
                <strong style = {styles.heading}> Training approach </strong>
                <p style = {styles.paragraph}> Teaching the dog to tolerate the presence of people and other animals around his possessions is key. Sample techniques may include trading good things for better things, removing potential triggers such as a favorite toy or implementing an earned rewards program, where the dog doesn't receive any food or treats until good behavior is shown.</p>
                <p style = {styles.paragraph}> To read about all types of dog aggression, go to <Link to = "/resource-center/training/aggression-in-dog-part-2" > Part Two </Link> of our three-part series.</p>
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