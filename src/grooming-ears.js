import React from 'react'
import './App.css'
import Topfooter from './top-footer'
import Footer from './footer'
import NavBar from './nav'
import PuppySearch from './puppysearch'
import PopularRn from './popular'
import puppyescape from './images/grooming-ear.webp'

export default function GroomingEars(){
    return(
        <div>
            <Topfooter />
            <NavBar />
            <div className="road-travel-article">
                <img src = {puppyescape} width = "800px" height = "400px" alt="" />
                <h2 style={{marginTop: '15px', width: '60%', textAlign: 'center', fontSize: '35px'}}>Clean your dog's ears in just a few easy steps </h2>
                <p style={{marginTop: '15px'}}> By Caleb Larson - July 30 2018 </p>
                <p style={{marginTop: '15px', width: '60%', textAlign: 'center'}}> Caleb has been in the puppy industry for over 13 years. He is currently operating as the Director of Breeder Development and Operations for Sarah Puppy. He has an enormous wealth of knowledge afforded to him both through first-hand experience and through working with the best breeder's in the industry for over a decade.</p>
            </div>
            <div style={styles.container}>
                <p style = {styles.paragraph}>With all of the upkeep that goes into caring for your beloved pooch, ear cleaning can be an easily forgotten hygiene task. But don't play this health regimen "by ear," if you catch our drift. It's imperative to clean your dog's ear canals on a regular basis and keep them unobstructed to prevent infection, discomfort and in worse cases, hearing loss. Convinced yet?</p>
                <p style = {styles.paragraph}>You may know that dogs have superior hearing to humans, yet surprisingly, their ears do not have a mechanism for self-cleaning. Your pooch needs YOUR help to get his ears up to their optimal performance. Cleaning your dog's ears at home is not only a good potential bonding activity, but it also saves money on vet or grooming visits, where the professionals will charge extra for the simple service.</p>
                <p style = {styles.paragraph}>Follow these easy steps to clean your dog's ears properly and safely:</p>
                <ol style = {styles.orderedList}>
                    <li style = {styles.listItem}><strong>Inspect your dog's ears carefully. </strong>Once he's in a comfortable sitting or standing position and you have easy access and visibility into his ear canals, take a close look. If you only see dirt or ear wax, your dog's likely in good shape and ready for his ear cleaning. If you happen to see any of the following warning signs, stop right away and call your vet: drainage of fluid or discharge, foul smell, redness, swelling, crusty texture, hair loss, thick waxy material, scratches, scabs, wounds, mites, ticks, fleas or parasites. Also, if the earwax is brown or black, it's a sign that he has an infection. Call your vet and schedule an appointment right away as cleaning an already infected ear could make the condition worse. Do not under any circumstance, use a Q-tip in your dog's ear. You can easily rupture an eardrum or injure your dog with this instrument.</li>
                    <li style = {styles.listItem}><strong>Use a commercial all-purpose dog ear cleaning solution or make your own.</strong> Products such as NuVet Ear Cleaner and Life's Abundance Ear Care Formula use natural ingredients to alleviate common ear hygiene issues. To concoct the fluid yourself, mix a few tablespoons of vinegar with the same amount of rubbing alcohol together in a clean bowl. Make sure the solution is at room temperature as cold liquid in the ear can be very uncomfortable for your pooch.</li>
                    <li style = {styles.listItem}><strong>Dip a cotton ball into the liquid. </strong>Squeeze out the excess so the cotton is wet but not dripping. If you have a very small dog, you may want to use just a half of a cotton ball. An alternative is to wrap a piece of gauze around your pointer finger, hold in place between your thumb and middle finger, and dip into the liquid. Again, the gauze shouldn't be sopping wet.</li>
                    <li style = {styles.listItem}><strong>Swab the inside of your dog's ear flap. </strong>Gently remove all dirt and debris you can see. This process may take quite a few cotton balls. As long as you're calm and stay towards the front of the hearing canal, your dog should tolerate this procedure very well. Be thorough in cleaning out all the crevices where dirt and wax build up the most. Remember to clean carefully as the delicate skin in the ear canal can easily be broken and vinegar and alcohol can sting.</li>
                    <li style = {styles.listItem}><strong>If deeper clean is needed, call the vet.</strong> If you notice after several swabs, that there is still a lot of debris, dirt and wax in the ear, it's worth a call to your vet to get approval for a full irrigation. Once you receive the "ok," put the solution in a squeeze bottle and drench the ears completely, then gently rub the base of the ear and massage the ear carefully for a minute. Use dry cotton ball or gauze to clean out the gunk that comes out. This process should remove most if not all of the sticky, thick material from the ears.</li>
                    <li style = {styles.listItem}><strong>Let your dog clear out his ears. </strong>You'll notice your dog immediately have the urge to shake his head after the cleaning. Let him do so, but make sure to turn away so you don't get fluid or debris in your eyes. The head shaking will help shake out any excess liquid out of the ear canal.</li>
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
    orderedList: {
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