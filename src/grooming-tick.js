import React from 'react'
import './App.css'
import Topfooter from './top-footer'
import Footer from './footer'
import NavBar from './nav'
import PuppySearch from './puppysearch'
import PopularRn from './popular'
import puppyescape from './images/grooming-tick.webp'

export default function GroomingTick(){
    return(
        <div>
            <Topfooter />
            <NavBar />
            <div className="road-travel-article">
                <img src = {puppyescape} width = "800px" height = "400px" alt="" />
                <h2 style={{marginTop: '15px', width: '60%', textAlign: 'center', fontSize: '35px'}}> What to Do If You Find a Tick on Your Dog </h2>
                <p style={{marginTop: '15px'}}> By Caleb Larson - February 10 2022 </p>
                <p style={{marginTop: '15px', width: '60%', textAlign: 'center'}}> Caleb has been in the puppy industry for over 13 years. He is currently operating as the Director of Breeder Development and Operations for Sarah Puppy. He has an enormous wealth of knowledge afforded to him both through first-hand experience and through working with the best breeder's in the industry for over a decade.</p>
            </div>
            <div style={styles.container}>
                <p style = {styles.paragraph}>Ticks season is coming up; are you prepared? Ticks are a nuisance, but they also pose a danger to you and your pets when they carry diseases, like Lyme disease. If you suspect your dog has a tick, don't panic. We've got the tips to help you deal with these pesky arachnids (that's right, they're related to spiders!) and keep them far away from your precious pup.</p>
                <strong style = {styles.heading}> Know the Signs </strong>
                <p style = {styles.paragraph}> The first thing you'll need to know is how to determine if your dog has a tick. You may see them in your dog's fur, or they may drop off in the house, but sometimes they can be hard to spot. It's always a good idea to thoroughly check your dog for ticks any time they've been running in tall grass or sniffing about in the underbrush. Ticks are attracted to a dog's furry coat, so seeing a tick in your surroundings means it's worth taking a closer look at your pup. Other signs your dog may have had a tick bite include an otherwise unexplained fever, small scabs, or frequent head-shaking, which could indicate a tick (or other problems) in your dog's ears.</p>
                <strong style = {styles.heading}> Removing the Tick </strong>
                <p style = {styles.paragraph}> One classic but misguided piece of advice is to hold a flame to the tick. We do not recommend this, as it could cause the tick to burrow further under the dog's skin and could also hurt your pup in the process. </p>
                <p style = {styles.paragraph}> Tick removal can be done at home or with the help of a veterinarian. The best way to remove a tick is using a specific tool designed for tick removal, although you can also use tweezers if you are gentle. Put on protective gloves and be prepared with some rubbing alcohol for cleaning the bite and a jar to keep the tick in until you can take your pup to the vet. </p>
                <p style = {styles.paragraph}> Using your tick-removal tool (or tweezers), grasp the tick as close to its head as possible and gently twist it to encourage the tick to let go. Once you've released the tick, get it immediately into that jar and seal it up tight. This way, if your dog does show signs of illness later, you can take the tick with you to the vet to test for tick-borne illnesses. Keep an eye on your pup for the next few days and check the bite location for swelling or redness, which are signs of infection.</p>
                <strong style = {styles.heading}> Prevention </strong>
                <p style = {styles.paragraph}> The high season for ticks is spring and summer and they thrive in tall grasses and shrubby areas. You can decrease tick populations in your yard by mowing regularly and keeping your yard free of their favorite types of habitats.</p>
                <p style = {styles.paragraph}>If your pup spends a lot of time outdoors in the summer months it's best to check them for ticks every day. Ticks can stay on a dog for several hours before latching on, and most tick-borne diseases can be avoided as long as the tick is removed within 12 hours of the initial bite. Many flea medications such as Frontline Plus also deter ticks, and flea collar options like this one can further decrease the likelihood of a tick bite.</p>
                <p style = {styles.paragraph}>While annoying, most ticks are largely harmless, especially if you know what to look for and how to remove them.</p>
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
        width: '60%',
        marginTop: '1em'
    },
    paragraph: {
        width: '60%',
        marginTop: '1em',
    }
}