import React from 'react'
import './App.css'
import Topfooter from './top-footer'
import Footer from './footer'
import NavBar from './nav'
import PuppySearch from './puppysearch'
import PopularRn from './popular'
import puppyescape from './images/grooming-bath.jpg'

export default function GroomingBath(){
    return(
        <div>
            <Topfooter />
            <NavBar />
            <div className="road-travel-article">
                <img src = {puppyescape} width = "800px" height = "400px" alt="" />
                <h2 style={{marginTop: '15px', width: '60%', textAlign: 'center', fontSize: '35px'}}> How to bathe a puppy </h2>
                <p style={{marginTop: '15px'}}> By Caleb Larson - March 10 2018 </p>
                <p style={{marginTop: '15px', width: '60%', textAlign: 'center'}}> Caleb has been in the puppy industry for over 13 years. He is currently operating as the Director of Breeder Development and Operations for Sarah Puppy. He has an enormous wealth of knowledge afforded to him both through first-hand experience and through working with the best breeder's in the industry for over a decade.</p>
            </div>
            <div style = {styles.container}>
                <p style = {styles.paragraph}> Picture this: it's late one afternoon and your puppy is about three months old. You sit down on the ground, ready to have a play session... when the awful happens. Your beautiful pup walks around the corner covered in... something very dirty and smelly. As unpleasant as this may be, it's an expected occurrence for a young, curious pup. From three to six months, your new puppy is learning more about the world and learning what he or she can't do, including getting into the trash or digging a hole in the backyard. Nonetheless, it's time for your new friend's first bath! You might imagine bathing a puppy to be a fun and cute experience, almost like a movie. However, the reality is that a bath for a wiggly, scared puppy can be a little challenging. Not to worry; we've created a quick 5 step process to follow to make those picture-perfect dreams of bathing an adorable puppy come true.</p>
                <ol style = {styles.orderedList}>
                    <li style = {styles.listItem}> Start Young... But Not Too Young Baths can be frightening for a puppy. That's why you want to start giving baths as young as possible (after 8 weeks old) and as often as once a month. Age and frequency are important to ensuring the puppy gets used to the ordeal and acclimated to the new feeling, temperature and sounds. Make sure you give plenty of praise and remain calm the whole time. Your puppy is always looking to you for reassurance about new situations and by telling them everything is okay and that they're doing great, you'll quicken their acceptance and enjoyment of a bath.</li>
                    <p style = {styles.paragraph}> Remember however, don't do any puppy grooming under 8 weeks old. Under this age, they will have a harder time regulating temperature and a bath could do more harm than good. If you need to give a young puppy a wash, try a washcloth with warm water and no soap for a light "sponge bath." At this age, their skin will still be much more sensitive than that of an older dog.</p>
                    <li style = {styles.listItem}> Make it fun </li>
                    <p style = {styles.paragraph}>Since baths can be scary for a puppy, make sure you and puppy are having fun by making the bath a playful activity. The goal should be to make your puppy feel at home so that bath-time is associated with happy play-time. Bring his favorite toy (as long as it's water and soap proof) into the tub to keep him interested in what's happening. If you have the option, add a rubber mat to the bottom of the tub to keep him more secure, and detract from their fear of the situation.</p>
                    <li style = {styles.listItem}> Pick the right soap </li>
                    <p style = {styles.paragraph}> Picking the right soap is a huge part of the success of the bath as the wrong soap could hurt your pet or be ineffective. When it comes to puppy grooming, make sure to have a mild and sensitive soap that will take the smell away while leaving the oils that are good for your pet's fur. Since you might not know if your pet has any allergies at the onset, it may be safer to go with a natural or allergy-friendly formula.</p>
                    <p style = {styles.paragraph}> If you have more specific goals than simply getting rid of dirt or a smell, you'll need to look for customized washes that treat certain skin issues. To rid your puppy of fleas for example, be extra careful when buying soap. Some flea washes have age and weight requirements and certain instructions for rinsing. If ever unsure which soap is safe for your pet, talk to your veterinarian.</p>
                    <li style = {styles.listItem}> Rinse well </li>
                    <p style = {styles.paragraph}> After lathering up your pup and waiting for the soap to do its magic, it's time to rinse your puppy. The most important thing is to make sure your puppy has absolutely no soap left on their skin. Just like with humans, dry and itchy skin can often be traced back to a bad rinse. When your puppy will likely only have a bath approximately once a month, this can lead to a lot of discomfort for the puppy and therefore, a dislike of baths. An extra tip: Make sure to keep your puppy's eyes, ears, mouth, and nose clean and dry. This can best be done by not washing the face with soap at all and rather, starting at the neck. If you need to wash the face, use a washcloth with warm water and dab the dirt away rather than scrubbing with soap and rinsing. A surefire way that your pup will hate the bath is if you dump water over his head! .</p>
                    <li style = {styles.listItem}> Dry safely </li>
                    <p style = {styles.paragraph}>The bath is over and now your puppy is clean as a whistle although he is still wet as a pond. Have a towel ready so that you can quickly drape it over him. Use this time to gently dry your puppy, getting any excess water off before he has a chance to shake it off onto you. Be ready: When the towel comes off, the shaking begins. It's especially important in the winter when it's cold and particularly with long and thick-coated dogs, to make sure your puppy is completely dry before they venture back outside. For those that use a heat source like a dryer, get the puppy used to this slowly as the sound of a dryer can spook even the calmest of pups. It's also important to use a low-level heat setting at a good distance from the skin to avoid heat sensitivity or worse, burns.</p>
                    <p style = {styles.paragraph}>Bathing your puppy should be a fun and rewarding bonding experience. A bath should be something both you and your puppy get excited about. With an early "dive in," and by following the right tips, you and your pup will achieve success. And remember even if the first try is unsuccessful, don't give up. With enough repetition and love, your pup will learn to enjoy getting clean!</p>
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
    paragraph: {
        width: '60%',
        marginTop: '1em',
    }
}