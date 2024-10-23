import React from 'react'
import './App.css'
import Topfooter from './top-footer'
import Footer from './footer'
import NavBar from './nav'
import PuppySearch from './puppysearch'
import PopularRn from './popular'
import puppyescape from './images/training-aggressive-1.jpg'

export default function TrainingAggression3(){
    return(
        <div>
            <Topfooter />
            <NavBar />
            <div className="road-travel-article">
                <img src = {puppyescape} width = "800px" height = "400px" alt="" />
                <h2 style={{marginTop: '15px', width: '60%', textAlign: 'center', fontSize: '35px'}}> When The Bite's Bigger Than The Bark: Aggression in Dogs Part 3 </h2>
                <p style={{marginTop: '15px'}}> By Caleb Larson - January 25 2024 </p>
                <p style={{marginTop: '15px', width: '60%', textAlign: 'center'}}> Liam has been in the puppy industry for over 13 years. He is currently operating as the Director of Breeder Development and Operations for Sarah Puppy. She has an enormous wealth of knowledge afforded to her both through first-hand experience and through working with the best breeder's in the industry for over a decade.</p>
            </div>
            <div style = {styles.container}>
                <p style = {styles.paragraph}>Dogs are complicated animals with distinct personalities and therefore temperaments based on their individual genetic makeup, environmental factors and breed history. Just like humans, dogs have faults and behaviors that need correcting. And one of those common issues is aggression. While we've established in Part One of this series that training an aggressive dog takes time, patience and consistency, before choosing and committing to a training plan, the first step is identifying the various types of aggression and the respective motives and triggers for each. In this final part to our special series, we hold a microscope to four additional classifications of aggression.</p>
                <strong style = {styles.heading}> Redirected Aggression </strong>
                <p style = {styles.paragraph}>Consider this situation: In the midst of a scuffle between two dogs, one of the owners jumps into the middle attempting to stop the fight. Instead, the dog suddenly turns and bites the owner. This scenario describes a dog redirecting aggression towards an interfering party. Or, if two dogs are standing behind a fence together and one becomes aroused by something or someone on the other side of the fence, he may have no other way to take out his aggression than by turning to his furry companion and biting him.</p>
                <strong style = {styles.heading}> Training approach </strong>
                <p style = {styles.paragraph}>The remedy for redirected aggression is often to remove the dog from volatile situations which may trigger these feelings. For example, in the fence scenario, a responsible owner should not allow the dog to be outside unsupervised. Reward-based obedience training is also always a good idea.</p>
                <strong style = {styles.heading}> Pain-Elicited Aggression </strong>
                <p style = {styles.paragraph}>When a dog is in pain, a common reaction is aggression. Therefore, it's crucial to handle an injured dog with care or to defer to a professional in order to prevent a pain-related attack. Even the most gentle, friendly dogs can react aggressively when they feel pain. And remember, while serious injuries are obviously quite painful, a dog can also react aggressively from something as minor as a pinched neck from a collar, stepping on a sharp object or getting stung by a bee.</p>
                <strong style = {styles.heading}> Training approach </strong>
                <p style = {styles.paragraph}>This particular case of aggression may be the easiest to treat and remedy, simply by making sure your pup receives proper veterinary attention. By getting to the root of the pain, once you obtain a diagnosis and medically treat the problem, your pup's pain-related aggression may simply go away.</p>
                <strong style = {styles.heading}> Sex-related aggression </strong>
                <p style = {styles.paragraph}>Dogs who are not neutered or spayed will demonstrate aggression in order to attract the attention of the opposite sex dog for breeding purposes. Fighting can also occur between two male dogs (even if no female dogs are present) in an effort to compete for female attention. In the wild, the strongest dogs are the first to gain access to the female they're vying for - so this is a natural, evolutionary practice. While it's possible for females to also fight amongst each other as well, it's less common. If a dog is fixed later in life, he may still demonstrate aggressive tendencies until the sexual urges wear off.</p>
                <strong style = {styles.heading}> Training approach </strong>
                <p style = {styles.paragraph}> Dog-on-dog aggression is typically remedied with behavior modification programs designed to de-sensitize and counter-condition. Basic dog training commands such as "stay" and "sit" will be reinforced to encourage self-control. After all, a dog who is passively standing still in one position cannot act out on aggressive tendencies.</p>
                <strong style = {styles.heading}> Predatory aggression </strong>
                <p style = {styles.paragraph}>Classic predatory behavior includes chasing after fast-moving prey. And oftentimes, domesticated pups will chase other pets, wildlife (such as rabbits or squirrels), or even running people, bikers or skaters. Sometimes, a dog will bite his "prey" if they manage to catch the object of desire. While predatory aggression towards people or even human babies is possible, it is rare in pet dogs. That said, this type of aggression can be especially worrisome as there is often no warning before the attack.
                </p>
                <strong style = {styles.heading}> Training approach </strong>
                <p style = {styles.paragraph}> Dog-on-dog aggression is typically remedied with behavior modification programs designed to de-sensitize and counter-condition. Basic dog training commands such as "stay" and "sit" will be reinforced to encourage self-control. After all, a dog who is passively standing still in one position cannot act out on aggressive tendencies.</p>
                <p style = {styles.paragraph}> In conclusion, while aggressive behavior in canines can be difficult to break, positive change is certainly possible and the behavior should be addressed immediately for optimal results. Through regimented training and therapy, aggressive dogs can recover to become the sweet and loving furry friends they're meant to be.</p>
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