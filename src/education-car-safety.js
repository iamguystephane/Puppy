import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Topfooter from './top-footer'
import Footer from './footer'
import NavBar from './nav'
import PuppySearch from './puppysearch'
import PopularRn from './popular'
import puppyescape from './images/education-car.jpg'

export default function EducationCarSafety(){
    return(
        <div>
            <Topfooter />
            <NavBar />
            <div className="road-travel-article">
                <img src = {puppyescape} width = "800px" height = "400px" alt="" />
                <h2 style={{marginTop: '15px', width: '60%', textAlign: 'center', fontSize: '35px'}}> Car Safety: The Right Way to Transport Your Puppy </h2>
                <p style={{marginTop: '15px'}}> By Caleb Larson - March 10 2018 </p>
                <p style={{marginTop: '15px', width: '60%', textAlign: 'center'}}> Caleb has been in the puppy industry for over 13 years. He is currently operating as the Director of Breeder Development and Operations for Sarah Puppy. He has an enormous wealth of knowledge afforded to him both through first-hand experience and through working with the best breeder's in the industry for over a decade.</p>
            </div>
            <div style = {styles.container}>
                <p style = {styles.paragraph}>Many puppy parents don't think twice about shuttling their new furry baby around in a car. Most of the preparation for a <Link to = "" style = {styles.a}> new puppy </Link>surrounds training, purchasing the necessary "stuff" and puppy proofing your home. But, what most don't realize is that there are strict laws around transporting your four-legged pal in a moving vehicle. Not to mention, dogs are in just as much danger (if not more due to their size and vulnerability) as humans when it comes to car safety. Here's what you need to know:</p>
                <ol style = {styles.orderedList}>
                    <li style = {styles.listItem}> <strong>Research your state laws</strong></li>
                    <p style = {styles.paragraph}>Read up on the legalities within your state immediately. For example, in Hawaii, you are not allowed to drive with a dog on your lap, no matter the dog's size or breed. And at least 14 states have laws against leaving pets unattended in a vehicle. So, before you run into the grocery store for a quick shop while Fido waits in the car (even with the windows down), make sure you're not breaking the law. If your pet causes an accident, it's a violation under distracted driving laws.
                    </p>
                    <li style = {styles.listItem}> <strong> Implement crash protection measures</strong></li>
                    <p style = {styles.paragraph}>Dogs should be secured during travel to prevent injury from not only impact, but also sharp turns or short stops. The <Link to = "http://www.centerforpetsafety.org/" style = {styles.a}>Center for Pet Safety </Link> recommends the following products for securing your dog: Gunner Kennel G1 Intermediate with Strength Rated Anchor Straps, the Sleepypod Mobile Pet Bed with PPRS Handilock, the PetEgo Jet Set Forma Frame Carrier with ISOFIX-Latch Connection and the Sleepypod Clickit Utility.
                    </p>
                    <p style = {styles.paragraph}>Never allow your pet's head to hang out of a car window. While the sight of a pup enjoying the breeze can be adorable, it's not so cute if your dog suffers a traffic accident, road debris or worse. If your dog is on the smaller side and you use a pet carrier, it may seem counterintuitive, but do NOT buckle it to the seat unless the manufacturer manual clearly instructs you to do so. A carrier secured by a seat belt may actually crush the carrier in an accident. Instead, put the carrier on the floor of the vehicle behind the front passenger or driver seat.
                    </p>
                    <li style = {styles.listItem}> <strong> Always leash upon entrance and exit</strong></li>
                    <p style = {styles.paragraph}>When putting your pup in the car or taking him out, always make sure he is<Link to = "/resource-center/training/leash-training" style = {styles.a}> leashed </Link> and you have a tight grip on that leash. Dogs will often take the opening of the door as an immediate cue to jump in or out. Whether you're parked on the side of a street, or in a busy parking lot, the dog could risk getting hit by another car, running away or getting into a scuffle with another dog passing by.
                    </p>
                    <li style = {styles.listItem}> <strong> When in doubt, be cautious</strong></li>
                    <p style = {styles.paragraph}>If it's a hot day and you're worried about leaving your dog in the car while you run an errand, don't do it! Chances are, if it's uncomfortably hot for you, it's dangerous for them. On a cool day, when leaving your dog briefly unattended in the car, crack all of the windows a few inches open. And on long road trips, make sure to stop every couple of hours and take your dog out for a bathroom break and give him some water so he stays hydrated.
                    </p>
                    <li style = {styles.listItem}> <strong> Keep a first aid kit in the car</strong></li>
                    <p style = {styles.paragraph}>You never know what may happen on the go with pets. To be safe, keep a box of basic medical supplies in the car. Some dogs, just like people, can get car sick. Some pets even experience stress and anxiety when riding in cars. Check with your veterinarian regarding remedies- depending on your dog's condition, you may want to keep medications such as herbal curing pills, Dramamine and Benadryl in your kit. Other musts to include? Emergency contact numbers, tweezers and scissors for tick, insect or brush removal, cotton balls, gauze pads and bandages made specifically for dogs that won't stick to fur, disinfectant, wound spray, saline solution to flush debris or sand out of eyes, antibacterial wipes, an old blanket or towel to dry off wet paws or mud, a second leash and extra food and treats!
                    </p>
                </ol>
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
        width: '58%',
        lineHeight: '1.6',
        marginTop: '1em'
    },
    paragraph: {
        width: '60%',
        marginTop: '1em',
        lineHeight: '1.6'
    }
}