import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Topfooter from './top-footer'
import Footer from './footer'
import NavBar from './nav'
import PuppySearch from './puppysearch'
import PopularRn from './popular'
import puppyescape from './images/exercise-exercise.jpg'

export default function ExerciseNeeds(){
    return(
        <div>
            <Topfooter />
            <NavBar />
            <div className="road-travel-article">
                <img src = {puppyescape} width = "800px" height = "400px" alt="" />
                <h2 style={{marginTop: '15px', width: '60%', textAlign: 'center', fontSize: '35px'}}> How Much Exercise Does A Puppy Need </h2>
                <p style={{marginTop: '15px'}}> By Caleb Larson - March 10 2018 </p>
                <p style={{marginTop: '15px', width: '60%', textAlign: 'center'}}> Caleb has been in the puppy industry for over 13 years. He is currently operating as the Director of Breeder Development and Operations for Sarah Puppy. He has an enormous wealth of knowledge afforded to him both through first-hand experience and through working with the best breeder's in the industry for over a decade.</p>
            </div>
            <div style = {styles.container}>
                <p style = {styles.paragraph}>From the Basset Hound to the Greyhound every puppy needs exercise. How much exercise your puppy needs depends on its age and breed. Fortunately, this guide has everything you need to determine when and how often you should exercise your puppy. Your puppy's exercise needs will change as it grows. When your puppy is very young veterinarians recommend limiting exercise to short walks and multiple play sessions throughout the day with plenty of time for naps.</p>
                <h2 style = {styles.heading}>Why Exercise is Important?</h2>
                <p style = {styles.paragraph}>Regular exercise is not only essential to your puppy's mental and physical well-being it helps to prevent obesity and the associated health risks; strengthen cardiovascular health and muscles and reduce digestive problems and constipation but also:</p>
                <ul style = {styles.orderedList}>
                    <li style = {styles.listItem}>promote housetraining</li>
                    <li style = {styles.listItem}>increase your puppy’s ability to cope with your absence</li>
                    <li style = {styles.listItem}>reduce behavioral problems</li>
                    <li style = {styles.listItem}>increase agility</li>
                    <li style = {styles.listItem}>build confidence and trust</li>
                    <li style = {styles.listItem}>control weight</li>
                    <li style = {styles.listItem}>increase socialization with people and other dogs</li>
                    <p style = {styles.paragraph}>The right amount of exercise can also guide your puppy away from destructive behaviors that may become problematic later on such as:</p>
                    <li style = {styles.listItem}>chewing</li>
                    <li style = {styles.listItem}>digging </li>
                    <li style = {styles.listItem}>scratching </li>
                    <li style = {styles.listItem}>hyperactivity </li>
                    <li style = {styles.listItem}>restlessness </li>
                    <li style = {styles.listItem}>rough play </li>
                    <li style = {styles.listItem}>biting </li>
                    <li style = {styles.listItem}>raiding the garbage</li>
                    <li style = {styles.listItem}>jumping on people </li>
                    <li style = {styles.listItem}>predatory behavior</li>
                    <li style = {styles.listItem}>excessive barking</li>
                    <li style = {styles.listItem}>whining</li>
                </ul>
                <p style = {styles.paragraph}>Ultimately the goal of exercising is to provide your puppy with an outlet for their desire to be active and receive the mental and physical stimulation they need to grow into a healthy adult dog.</p>
                <h2 style = {styles.heading}>When and How Often You Should Exercise Your Puppy?</h2>
                <p style = {styles.paragraph}>The answer to how much exercise a puppy needs depends on its breed and age. Dogs bred for high-energy tasks like hunting sled pulling and protection generally need more exercise than lapdogs bred for cuddling. Don’t be fooled by your puppy’s seemingly endless energy. They Do Not require as much exercise as adult dogs. In fact too much puppy exercise can be detrimental to you puppy’s health especially in larger breeds</p>
                <p style = {styles.paragraph}>A good rule of thumb is a ratio of five minutes of exercise per month of age (up to twice a day) until the puppy is fully grown e.g. 15 minutes when 3 months old 20 minutes when 4 months old and so on. Your puppy can go on longer walks once they are older.</p>
                <h3 style = {styles.heading}>At What Age Can You Walk A Puppy? </h3>
                <p style = {styles.paragraph}>Due to the dangers of potentially fatal viruses ( canine parvovirus canine distemper etc.) lurking anywhere an infected dog may have been puppies should be kept at home until they are fully vaccinated.</p>
                <p style = {styles.paragraph}>Most veterinarians recommend waiting until 10-14 days after your puppy's last vaccination booster (typically around 14–16 weeks of age) before introducing them to the wonders of local parks beaches and walking trails.</p>
                <h3 style = {styles.heading}>How often should you walk your puppy </h3>
                <p style = {styles.paragraph}>A good rule of thumb is a ratio of five minutes of exercise per month of age (up to twice a day) until the puppy is fully grown e.g. 15 minutes when 3 months old 20 minutes when 4 months old and so on. Your puppy can go on longer walks once they are older.</p>
                <h3 style = {styles.heading}>How Far Should You Walk A Puppy? </h3>
                <p style = {styles.paragraph}>Your puppy will be able to handle a short 30-45 min walk once they are 12 weeks old. Each puppy is different. So be sure to check with your vet about what vaccinations are a good idea in your area before taking your puppy on a new walk.</p>
                <h3 style = {styles.heading}>How To Walk A Puppy On A Leash </h3>
                <p style = {styles.paragraph}>Many new dog owners assume that their puppy innately knows how to walk politely on a leash but walking on a leash is an important skill that you need to teach to your dog. It’s also a skill that you will value every time you take your dog out for a walk.</p>
                <ul style = {styles.orderedList}>
                    <li style = {styles.listItem}>Introduce your puppy to the collar and leash</li>
                    <li style = {styles.listItem}>Teach them a sound cue that means “food is coming”</li>
                    <li style = {styles.listItem}>Put the leash and collar on your puppy</li>
                    <li style = {styles.listItem}>Make the puppy come to you using the sound cue</li>
                    <li style = {styles.listItem}>Practice walking a few steps in a room with little distraction</li>
                    <li style = {styles.listItem}>Once your puppy responds to the sound cue test its skills outside </li>
                </ul>
                <p style = {styles.paragraph}>Remember that your puppy has a short attention span. It’s best to keep your sessions short and end them when your puppy is still eager to do more not when they are mentally exhausted. For more on how to leash train your puppy check out this <Link to = "/resource-center/training/leash-training" style = {styles.a}> Step by Step Tutorial to Leash Training. </Link></p>
                <h3 style = {styles.heading}>How To Stop A Puppy Pulling On A Leash </h3>
                <p style = {styles.paragraph}>Dogs pull on their leash because it’ gets them where they want to go at their own pace. They don’t pull because they’re trying to be dominant they do it because it works. If you allow your dog to pull you behind them on walks then you’re actually reinforcing that behavior. Luckily there are several ways to prevent your dog from pulling on the leash:</p>
                <ul style = {styles.orderedList}>
                    <li style = {styles.listItem}>Pick One Walking Method and Stick With It - Consistency is the key to dog training so choose a walking method that works best for you and your dog then stick with it.</li>
                    <li style = {styles.listItem}>Start in a Non-Exciting Area - Pick a quiet time of the day to practice walking down the street when most people are indoors or go to a park during non-peak hours.</li>
                    <li style = {styles.listItem}>Use Treats to Encourage Your Dog to Follow You - Use treats and toys as rewards for walking next to you. This will show your puppy that good things happen when they don’t pull on the leash. </li>
                </ul>
                <h3 style = {styles.heading}>Is It Bad To Walk A Puppy Too Much?</h3>
                <p style = {styles.paragraph}>Yes. Too much exercise may affect impeded the development of your puppy's growth plates in the areas of cartilage at the ends of the leg bones. Injury to the growth plates before they are mature can cause deformities and problems with healing which can affect your puppy's movement for the rest of its life.</p>
                <h3 style = {styles.heading}>How Do You Tell If A Dog Is Over Exercised</h3>
                <p style = {styles.paragraph}>It is possible to over-exercise your puppy which is bad for the health and development. Signs of over-exercise in puppies include:</p>
                <ul style = {styles.orderedList}>
                    <li style = {styles.listItem}>trouble breathing</li>
                    <li style = {styles.listItem}>excessive panting</li>
                    <li style = {styles.listItem}>drooling</li>
                    <li style = {styles.listItem}>decreased energy or stamina</li>
                    <li style = {styles.listItem}>trouble walking</li>
                    <li style = {styles.listItem}>difficulty standing</li>
                </ul>
                <p style = {styles.paragraph}>There are more serious symptoms but keeping an eye out for early signs can help you know when it's time to get your puppy to a cool area or in extreme cases to the vet's office. </p>
                <h3 style = {styles.heading}>Puppy Exercise Safety Tips </h3>
                <p style = {styles.paragraph}>There’s a lot that can happen while out on a walk with your dog. To ensure you have the safest walk possible follow these dog walking safety tips:</p>
                <ul style = {styles.orderedList}>
                    <li style = {styles.listItem}>Check with the Vet - Have your veterinarian clear your dog for any new physical activity. This is especially important for older dogs that may have joint issues like arthritis but it is also important for growing puppies that have immature joints.</li>
                    <li style = {styles.listItem}>Train Your Dog to Respond to Voice Commands - Though you should have leash control of your dog it is a good idea to have a backup control mechanism in the form of voice commands.</li>
                    <li style = {styles.listItem}>Bring the Right Dog Walking Gear - To have tangible control over your dog it is important to have a sturdy leash that is 4-6 feet long attached to a properly fitting collar or harness. Retractable leashes are made to give dogs a little extra freedom and privacy when on potty walks but are NOT the best restraint for exercising.</li>
                    <li style = {styles.listItem}>Inspect Your Dog’s Feet for Injury - After a walk, it is a good idea to look at your dog’s paws. Check for cuts bruises and foreign bodies like cockleburs or splinters. If you walked on the beach or in the snow wipe your dog’s feet with a warm wet towel. Clean between the toes and around the footpads well.</li>
                    <li style = {styles.listItem}>Inspect Your Dog’s Skin and Coat for Ticks - Look for ticks between the toes and around the ears. Look for fleas over the tail and under the belly. If you live in a flea or tick-infested area ask your veterinarian about the best preventive for your dog.</li>
                    <li style = {styles.listItem}>Check Your Path for Danger - If you are walking in the neighborhood be mindful of traffic patterns and be respectful of cars bike riders and other pedestrians. If your dog becomes too excited have them sit until the approaching person passes.</li>
                    <li style = {styles.listItem}>Be Prepared for Clean-Up -  A nice long walk is a great time for your dog to go to the bathroom. Be a conscientious dog owner and steer your dog away from your neighbor’s lawn. Bring along plastic bags to clean up after the event no matter where he goes.</li>
                    <li style = {styles.listItem}>Always Bring Water - Hydration is important for both you and your dog. For long walks bring along a collapsible dog bowl or water bottle fitted with a special spout that allows your dog to sip easily. Never give your dog a sports drink. Only water.</li>
                    <p style = {styles.paragraph}> Now go for a walk with your puppy... </p>
                </ul>
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