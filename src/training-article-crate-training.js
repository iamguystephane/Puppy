import React from 'react'
import './App.css'
import Topfooter from './top-footer'
import Footer from './footer'
import NavBar from './nav'
import PuppySearch from './puppysearch'
import PopularRn from './popular'
import puppyescape from './images/training-crate.jpg'

export default function CrateTraining(){
    return(
        <div>
            <Topfooter />
            <NavBar />
            <div className="road-travel-article">
                <img src = {puppyescape} width = "800px" height = "400px" alt="" />
                <h2 style={{marginTop: '15px', width: '60%', textAlign: 'center', fontSize: '35px'}}> How to crate train a puppy </h2>
                <p style={{marginTop: '15px'}}> By Caleb Larson - March 10 2018 </p>
                <p style={{marginTop: '15px', width: '60%', textAlign: 'center'}}> Caleb has been in the puppy industry for over 13 years. He is currently operating as the Director of Breeder Development and Operations for Sarah Puppy. He has an enormous wealth of knowledge afforded to him both through first-hand experience and through working with the best breeder's in the industry for over a decade.</p>
            </div>
            <div style = {styles.container}>
                <p style = {styles.paragraph}>The philosophy behind crate training your furry companion is to create a familiar and safe location where your dog will want to enter of her own will and enjoy relaxing and sleeping inside her very own comfy and cozy spot. Because dogs don't like to soil their sleeping areas, they are then more likely to eliminate (do their potty business) once taken outside. Crate training also makes for an easier way to supervise the puppy and prevent full access to the home, which will result in much less opportunity for your new pal to get into any mischief. Added bonuses include a convenient carrier for traveling and a way to easily confine your dog if non-dog-friendly guests visit your home.</p>
                <p style = {styles.paragraph}>While crating can be beneficial in many ways, it is important to not over-use crate time or use it improperly. If a puppy is kept in a crate for more than a few hours at a time during the day, the puppy could learn that crate time is a punishment, which would ultimately be counterproductive during training. If you plan to crate train, it's imperative that the dog is taken out to play and exercise every few hours. The crate is not a place to leave your pup for 8-10 hours while you leave for the day. Find some great dog crates.</p>
                <p style = {styles.paragraph}>Here are 5 simple tips to successfully crate train your dog:</p>
                <ol style = {styles.OrderedList}>
                    <li style = {styles.li}> Meet and Greet </li>
                    <p style = {styles.paragraph}>Be patient. Introducing your pet to her crate could take anywhere from a couple minutes to a few days. Make the crate as comfortable as possible by adding padding, blankets or pillows. The crate should be located in a highly trafficked area of the home, such as next to the couch in the family room or near the table in the kitchen, so your dog considers it a safe place, amongst her family. Start by ensuring that the door remains open and won't accidentally close in your puppy's face or lock behind her. Show your dog the crate with enthusiasm and make sure your voice is positive and happy. Decide on a specific command you will use consistently for telling your dog to go inside the crate. Make sure everyone in the family is on board with the command and use it 100% of the time when telling the dog to go inside. Place a treat at the entrance of the crate and gradually move the next few treats further and further back inside the crate until your dog has to go all the way to the back to get the treat. Never ever push or force her into the crate; always allow her to go in at her own pace. Once she is comfortable going all the way to the back of the crate to get her treat, feed her next meal while she is still in the crate. Ensuring the door is open, place her bowl of food at the very front of the crate. This will teach her that this is a safe, happy territory for her to eat and sleep.</p>
                    
                    <li style = {styles.li}>  Eat a Meal in Privacy </li>
                    <p style = {styles.paragraph}>Once your dog is comfortable going in and out of the crate at her own will, place her bowl of food all the way in the back of the crate. If she still seems to be a bit reluctant or anxious, you may start with the food at the front of the crate and gradually move it to the back the way you did with the treats. Once she is able to finish an entire meal while inside the crate, begin closing the door. Let her sit inside the crate with the door closed for about 10 minutes after finishing her meal before opening the door. If she starts whining, you may be moving a little too fast. Be sure to use tons of positive reinforcement when opening the door to show your pup that her behavior is being rewarded..</p>
                    <li style = {styles.li}> Stay a While </li>
                    <p style = {styles.paragraph}>After your dog is comfortable eating inside the crate, you are ready to condition her for longer stays. Start by getting her favorite food or treat, holding it in your hand and pointing to the crate while using your special command. Once she is inside, give the treat and close the door. Hang around the crate for a few minutes and then move away from the crate so that you are completely out of sight. Remain out of sight for about 10 minutes. When you return, let her see you but don't let her out for another few minutes. Repeat this exercise until your dog is comfortable alone in the crate with the door closed for 30 minutes. At this point, you should be able to leave her alone in the crate for short periods of time and in the evenings to sleep.</p>
                    <li style = {styles.li}> Transition to Alone Time </li>
                    <p style = {styles.paragraph}>Once your dog is comfortable staying in the crate for 30 minutes while you are out of sight, she is ready to be left alone in the crate while you leave the home. It is important to remember that you shouldn't leave her alone for too long. A good rule of thumb is to gradually increase the length of intervals. Start with an hour long outing and gradually increase to a few hours at a time. To ease the transition, you should try putting your dog in the crate 10-20 minutes before you leave the house so that crate time doesn't become associated with you leaving. Use your command word or phrase to put him in the crate and use lots of positive reinforcement. Make sure not to make the goodbye too long or emotional.</p>
                    
                    <li style = {styles.li}> Good Night, Sleep Tight </li>
                    <p style = {styles.paragraph}>Night crating is the last step in your training. Start by moving the crate next to your bed in your bedroom, especially if the dog is a puppy and in the process of potty training. That way, she'll know you're close by, but you'll also hear her whine in the middle of the night if she needs to be taken outside. As time goes on, it is okay to move the crate further away from your bed.</p>
                </ol>
                <strong style = {styles.heading}> A Special Note on Whining: </strong>
                <p style = {styles.paragraph}>Whining can mean one of two things, either your dog needs to be taken outside to go to the bathroom or she is testing you. Similar to a young toddler who will cry until they get what they want, a puppy can be smart and learn quickly how to manipulate her owner. If you find out your puppy doesn't have to go and is whining for attention, it's imperative that you not give in. Once the whining begins, ask the dog if she needs to go potty, with the phrase you would normally use when taking her outside. Middle of the night trips outside must be used for potty. If the dog doesn't go, put her immediately back inside the crate so as not to allow the dog to associate the trip out of the crate with playtime. As painful as it may be to listen to ongoing whining, put on headphones or try to block out the noise. By ignoring it, the dog will quickly come to understand whining doesn't mean attention. No matter how frustrating, never bang on the crate or yell at the dog. Simply ignore. If the whining lasts longer than a few minutes, you may need to go back to earlier steps in crate training.</p>
                <p style = {styles.paragraph}> Remember: Patience, consistency and positive reinforcement are key to successful crate training! </p>
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
        lineHeight: '1.6',
    },
    OrderedList: {
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
        fontSize: '30px',
        fontWeight: '600',
        margin: '0.1em 0'
    },
    heading: {
        marginTop: '0.5em',
        width: '60%',
    }
}