import React from 'react'
import './App.css'
import Topfooter from './top-footer'
import Footer from './footer'
import NavBar from './nav'
import PuppySearch from './puppysearch'
import PopularRn from './popular'
import puppyescape from './images/training-leash.jpg'

export default function TrainingLeash(){
    return(
        <div>
            <Topfooter />
            <NavBar />
            <div className="road-travel-article">
                <img src = {puppyescape} width = "800px" height = "400px" alt="" />
                <h2 style={{marginTop: '15px', width: '60%', textAlign: 'center', fontSize: '35px'}}> A Step by Step Tutorial to Leash Training </h2>
                <p style={{marginTop: '15px'}}> By Caleb Larson - January 30 2017 </p>
                <p style={{marginTop: '15px', width: '60%', textAlign: 'center'}}> Caleb has been in the puppy industry for over 13 years. He is currently operating as the Director of Breeder Development and Operations for Sarah Puppy. He has an enormous wealth of knowledge afforded to him both through first-hand experience and through working with the best breeder's in the industry for over a decade.</p>
            </div>
            <div style = {styles.container}>
                <p style = {styles.paragraph}>We've all seen those dogs. The ones that zigzag every which way on their walks. The ones who mark on every tree. The ones who drag their owners down the street. It begs the question: Who is walking who anyway?</p>
                <p style = {styles.paragraph}>If you want to prevent these unfortunate but common situations from happening to you,  you'll want to begin leash training your pup as soon as you're able to take them for walks.</p>
                <p style = {styles.paragraph}>While it may seem simple (hook leash to collar and walk, right?), you'll soon find that walking in a straight line at a normal pace is not a natural habit for your active puppy.</p>
                <p style = {styles.paragraph}>In this post, we will share five dog training tips to get your pooch walking down the street with confidence and ease.</p>
                <ol style = {styles.OrderedList}>
                    <li style = {styles.li}> Choose the right leash and collar </li>
                    <p style = {styles.paragraph}>The first step is to choose the right leash and color for your dog. Even the best dogs will struggle to display good leash manners if their leash and collar are uncomfortable.</p>
                    <p style = {styles.paragraph}>Make sure the dog's collar is the perfect fit by asking for professional help with sizing. It's important that it's not too tight or too loose. A good guideline is to be able to fit two fingers between the collar and your pup's skin.</p>
                    <p style = {styles.paragraph}>You may want to consider a harness instead of a collar to avoid neck strain from leash pulling. A dog harness is a good option for breeds with short snouts like Pugs or breeds with elongated, slender necks like Greyhounds. Similarly, front-hook harnesses and head halters are effective training tools for dogs that pull more frequently. As far as leashes go, there are a variety of materials and lengths available. To make the right decision, you'll want to test them out at the pet store with your dog present.</p>
                    <p style = {styles.paragraph}>A few things to consider - nylon leashes (which are the most common) may cause "leash burn" if you have a strong dog that pulls suddenly.</p>
                    <p style = {styles.paragraph}>Leather leashes are stronger, provide a natural give, and will soften with time. Chain leashes, which are an inexpensive choice, can be dangerous if a strong dog pulls and the end of the leash is wrapped around your finger.</p>
                    <p style = {styles.paragraph}>Retractable or "flexi" leashes are designed to give dogs more freedom but can be dangerous for a puppy as they provide the owner with much less control. "Reeling in" your pooch fast enough in an emergency is a challenge. Plus, the instinct of pulling the leash when your dog does something wrong could give you a severe rope burn if you were to grab that thin cord. We strongly advise against a retractable leash for a puppy in leash training.</p>
                    <p style = {styles.paragraph}>The length of the lead is also a factor to consider when choosing the right leash for you. If you live in the city, a 4-foot dog leash might be long enough to allow your dog to do their business while keeping them close to your side. If you live in a suburban setting and have a bit more space to walk, you may want to choose a 6-foot</p>
                    <li style = {styles.li}>  Introduce the Collar and Leash </li>
                    <p style = {styles.paragraph}>Slip the collar and leash on your pup while he's doing something positive such as feeding, playing, or getting pet. This way, the puppy associates the collar and leash with positive activity. If the dog resists, use treats or toys as an incentive to getting them to feel more comfortable.</p>
                    <li style = {styles.li}> Take Your First Walk...Inside </li>
                    <p style = {styles.paragraph}>Before taking your pup out to walk for the first time, help them prepare by walking them around your house or apartment. Doing so will help them get used to you leading them around without all of the new smells and distractions of the outdoors. Once your dog has mastered loose leash walking inside, you can take them to start practicing outside.</p>
                    <p style = {styles.paragraph}>If you have a backyard, use that space as an opportunity to walk your pup outside to the spot where you want him to go, as opposed to letting him have run of the yard.</p>
                    <li style = {styles.li}> Teach to follow </li>
                    <p style = {styles.paragraph}>Getting your dog to heel is a gradual process so don't expect it to happen quickly. Technically, the "heel" position is for your pup to walk along your left side at knee level. This is a bit ambitious and unnecessary for rudimentary leash training, so don't worry so much about positioning as keeping your pup at a safe, comfortable distance.</p>
                    <p style = {styles.paragraph}>Hold the leash with a firm grip and double up any extra slack so it doesn't drag on the ground. Make sure you have treats at the ready in your pocket to reward whenever your pup listens to you. Positive reinforcement will help speed up their leash training.</p>
                    <p style = {styles.paragraph}>Once the puppy is focused on the reward, say a simple command like "Let's go!" - make sure it's something you'll remember to use consistently. Once he follows, give him a treat. You could bring it as close to right under his nose to get his attention. Continue to repeat this process in order to lure him into the pace and direction you want him to go in. Once he's performed this exercise several times well, offer the treats less and more intermittently.</p>
                    <p style = {styles.paragraph}>If your dog pulls, quickly turn and walk in the opposite direction. You'll do some start and stop walking at first, but eventually, they'll become accustomed to the rules. Reinforce the distance and pace you want them to keep by continuing to reward them with praise and treats when they do follow.</p>
                    <p style = {styles.paragraph}>Some dogs may decide to sit or lay down rather than move. If this happens, call your pup and offer him a reward once he comes over. Never yank the leash toward you. Once your dog walks next to you, offer him a treat.</p>
                    <li style = {styles.li}> Slowly Add More Depth to Your Leash Training </li>
                    <p style = {styles.paragraph}>Once your dog is walking well on a leash alongside you, you can work on other techniques such as "sit" whenever you stop, introducing the "heel" command, and increasing the number of distractions in the surrounding area. If you've been practicing on a quiet cul-de-sac, try taking him to a park or busy street.</p>
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
    paragraph: {
        width: '60%',
        marginTop: '1em',
        lineHeight: '1.6'
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
        margin: '0.6em 0'
    },
    heading: {
        marginTop: '0.7em',
        width: '60%',
    }
}