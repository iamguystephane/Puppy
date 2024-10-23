import React from 'react'
import './App.css'
import Topfooter from './top-footer'
import Footer from './footer'
import NavBar from './nav'
import PuppySearch from './puppysearch'
import PopularRn from './popular'
import puppyescape from './images/grooming-grooming.jpg'

export default function GroomingGroom(){
    return(
        <div>
            <Topfooter />
            <NavBar />
            <div className="road-travel-article">
                <img src = {puppyescape} width = "800px" height = "400px" alt="" />
                <h2 style={{marginTop: '15px', width: '60%', textAlign: 'center', fontSize: '35px'}}> Finding puppy groomer: Consider these factors</h2>
                <p style={{marginTop: '15px'}}> By Caleb Larson - April 15 2024 </p>
                <p style={{marginTop: '15px', width: '60%', textAlign: 'center'}}> Caleb has been in the puppy industry for over 13 years. He is currently operating as the Director of Breeder Development and Operations for Sarah Puppy. He has an enormous wealth of knowledge afforded to him both through first-hand experience and through working with the best breeder's in the industry for over a decade.</p>
            </div>
            <div style={styles.container}>
                <p style = {styles.paragraph}>Something as superficial as your dog's hairstyle may seem silly and unimportant, but choosing a professional groomer should be a high priority. Depending on your dog's breed and hygiene needs, they could be visiting the groomer as often as every 4-6 weeks, so deciding who will be responsible for keeping your pooch clean and primped requires some research. Here's a quick checklist to run through before getting your pup's hair done:</p>
                <ul style = {styles.unOrderedList}>
                    <li style = {styles.listItem}><strong>Get a Referral </strong>- Begin by asking friends, family and neighbors for recommendations. Trusted reviews are invaluable.</li>
                    <li style = {styles.listItem}><strong>Check Prices </strong>- When you start calling local groomers, ask for a full rundown of their services and prices. For example, some groomers include nail clippings or other grooming services in their regular grooming packages and others do not, so it's helpful to know exactly what's offered. Many groomers' prices depend on the size and breed of the dog  as well, so be sure that you aren't comparing prices for a Maltese to prices for a Golden Retriever!</li>
                    <li style = {styles.listItem}><strong>Take a Tour </strong>- Before booking your pup's first appointment, you'll want to visit the facility and observe the activity. Take mental notes of the setup, lighting and cleanliness level and make sure you're comfortable with the environment. You'll also want to check to see if the kennels are large enough and separated for dogs and cats. Watch to see if the groomers handle their pups in a caring and professional manner and ask the staff administrative questions such as what type of records they keep and how much advance notice is required for scheduling.</li>
                    <li style = {styles.listItem}><strong>Bring Vaccination Records</strong> - Most groomers will require immunization records for rabies, kennel cough and other infectious diseases before accepting new dogs into their salon. It's also worth noting that spayed and neutered dogs tend to be calmer, less hyperactive, and therefore more tolerant of grooming.</li>
                    <li style = {styles.listItem}><strong>Speak Up about Any Special Circumstances</strong> - Before you drop your pooch off to get his or her hair done, make sure your groomer understands any health conditions to be aware of - whether it is dry/flaky skin or something more serious like hip dysplasia that would require extra gentle handling.</li>
                    <li style = {styles.listItem}><strong>Say Goodbyes Quickly </strong> - Many dogs, especially those who display anxious behavior, have a difficult time with grooming. A long, drawn-out goodbye can make the experience worse for a socially anxious pooch, so don't make it a big deal. There are also a few preparatory things you can do at home to get your pup more comfortable with the experience. Brush your dog often and give a reward after each brushing session.</li>
                </ul>
                <p style = {styles.paragraph}>If this all seems to be a bit much, just know that when you pick up your best friend, he will look "pawfect" with a shiny coat, fresh smell and maybe even a bandanna or bow in her hair to boot!</p>
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
    unOrderedList: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listItem: {
        width: '60%',
        marginTop: '1em',
    },
    heading: {
        width: '60%',
        marginTop: '1em'
    },
    paragraph: {
        width: '60%',
        marginTop: '1em',
    }
}