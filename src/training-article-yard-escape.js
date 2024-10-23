import React from 'react'
import './App.css'
import Topfooter from './top-footer'
import Footer from './footer'
import NavBar from './nav'
import PuppySearch from './puppysearch'
import PopularRn from './popular'
import puppyescape from './images/training-escape.jpg'

export default function YardTraining(){
    return(
        <div>
            <Topfooter />
            <NavBar />
            <div className="road-travel-article">
                <img src = {puppyescape} width = "800px" height = "400px" alt="" />
                <h2 style={{marginTop: '15px', width: '60%', textAlign: 'center', fontSize: '35px'}}> How to Stop a Puppy From Biting </h2>
                <p style={{marginTop: '15px'}}> By Caleb Larson - January 25 2024 </p>
                <p style={{marginTop: '15px', width: '60%', textAlign: 'center'}}> Liam has been in the puppy industry for over 13 years. He is currently operating as the Director of Breeder Development and Operations for Sarah Puppy. She has an enormous wealth of knowledge afforded to her both through first-hand experience and through working with the best breeder's in the industry for over a decade.</p>
            </div>
            <div style = {styles.container}>
                <p style = {styles.paragraph}> We've all seen the infamous "Lost Dog" posters from distraught owners longing to see their furry loved one again. Unfortunately, having a dog run away is a reality many dog-owners face at one point or another. But if your dog bolts from the home, then it might take some extra training to keep him from getting hurt, stolen or worse. Your pup belongs home and safe in your loving arms.</p>
                <strong style = {styles.heading}> Understanding the behavior </strong>
                <p style = {styles.paragraph}> We all know that dogs like to run. But, why? Is your warm, loving home not good enough? On the contrary, the problem typically has nothing to do with the owner, but rather with the dog's own natural instincts. Dogs may run away for a number of reasons including boredom, predatory drive or distraction. For example, a dog left alone in the yard for hours without anyone to play with might escape out of boredom, curious of what the outside world has to offer. Like humans, dogs are creatures with social needs, and thus might seek out social stimulation if that need cannot be fulfilled at home. A dog ready to mate, especially a male, un-neutered dog, is prone to roaming as well. After all, he's got to spread those doggy genes somehow! Lastly, another common reason dogs run away is they have too much energy to contain. Oftentimes owners leave their dogs alone in the yard thinking that they're doing them a favor, but really, without a companion, dogs will soon grow bored. Especially for dogs who require exercise, being alone in the yard can be frustrating and therefore, a jog around the block can be a much more attractive option. Keep a watchful eye on breeds that are especially prone to wanderlust, including the Siberian Husky, Afghan Hound, terriers, Basset Hound, Great Pyrenees, Puggle, Weimaraner, Miniature Schnauzer, Vizsla, shepherds, Alaskan Malamute, Dachshund, Samoyed and Beagle.</p>
                <strong style = {styles.heading}> Corrective training </strong>
                <p style = {styles.paragraph}>For the owners whose dogs have a taste for wanderlust, there is hope and help. One of the easiest ways to stop your dog from running away is to identify the cause of the behavior. Is he bored or lonely? Then, schedule plenty of playtime every day (the duration depends on the breed, individual personality and physical needs of the dog) and give him tasks to keep mentally and physically alert. Hormonal? Have him neutered to reduce the urge to roam for mating. Or, if your dog is female, have her spayed so that she doesn't attract male dogs while in heat. Too much energy? Make sure your dog gets the appropriate amount of daily exercise for his type. The following tips can further help your dog stay safe:</p>
                <ul style = {styles.unOrderedList}>
                    <li style = {styles.li}>Train your dog to not leave without permission by holding him on a leash and repeatedly giving him the "sit-stay" command when you open the gate or door.</li>
                    <li style = {styles.li}>Take your dog on visits to a local dog park to give him the socialization he needs, both with dogs and other humans.</li>
                    <li style = {styles.li}>Secure your yard with a high fence or gate (ensure the fence extends a few feet underground if you have a digger such as a Husky).</li>
                    <li style = {styles.li}>Make home an ideal place for your dog to be, with his own designated comfort spots and a bowl of clean water throughout the day.</li>
                    <li style = {styles.li}>If you must leave him alone, give your dog a few toys to keep him busy, rotating them periodically to give the impression of something new and exciting every time. Or even better, drop him off at a trusted friend's house or doggy daycare if you're away from the house for extended periods of time.</li>
                    <li style = {styles.li}>Finally, do not punish your dog once he returns from his excursion. This will only teach him to dread rather than look forward to his return home.</li>
                </ul>
                <p style = {styles.paragraph}>Having a dog that constantly runs away can be a real cause for anxiety in owners, and it's not something that can be changed overnight. But, rest assured that with consistent training and positive reinforcement, your dog will see you as a loving parent and his home as a comfort zone, from whom he wouldn't want to stray.</p>
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