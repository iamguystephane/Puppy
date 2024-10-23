import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Topfooter from './top-footer'
import Footer from './footer'
import NavBar from './nav'
import PuppySearch from './puppysearch'
import PopularRn from './popular'
import puppyescape from './images/education-westminster.jpg'

export default function EducationMinisterShow(){
    return(
        <div>
            <Topfooter />
            <NavBar />
            <div className="road-travel-article">
                <img src = {puppyescape} width = "800px" height = "400px" alt="" />
                <h2 style={{marginTop: '15px', width: '60%', textAlign: 'center', fontSize: '35px'}}> How to watch the upcoming Westminster Kennel Club Dog Show </h2>
                <p style={{marginTop: '15px'}}> By Caleb Larson - March 10 2018 </p>
                <p style={{marginTop: '15px', width: '60%', textAlign: 'center'}}> Caleb has been in the puppy industry for over 13 years. He is currently operating as the Director of Breeder Development and Operations for Sarah Puppy. He has an enormous wealth of knowledge afforded to him both through first-hand experience and through working with the best breeder's in the industry for over a decade.</p>
            </div>
            <div style = {styles.container}>
                <p style = {styles.paragraph}> While many of us have switched on our TVs and enjoyed a few minutes of a dog show, few of us actually know much about what's going on. In preparation for the upcoming Westminster Dog Show, we've rounded up the key events, definitions, articles, and other snippets of information so that everyone can better understand and appreciate the event this year.</p>
                <h3 style = {styles.heading}>What is the the Westminster Kennel Club Dog Show?</h3> 
                <p style = {styles.heading}>A conformation competition for purebred dogs, and the Masters Agility Championship and Masters Obedience Championship, where dogs from all backgrounds are eligible to compete. (source <Link to = "https://www.westminsterkennelclub.org/about-wkc" style = {styles.a}>https://www.westminsterkennelclub.org/about-wkc</Link>)</p>
                <p style = {styles.paragraph}>Yes, we googled it...the definition of conformation: the shape or structure of something, especially an animal.</p>
                <h3 style = {styles.heading}> Where can I watch the Westminster Dog Show?</h3>
                <p style = {styles.paragraph}>For detailed coverage of the show, <Link to = "https://www.westminsterkennelclub.org/2022-wkc-dog-show/tv-and-streaming-coverage/fox-fs1-and-fs2" style = {styles.a}>follow this link </Link>, but we've simplified the key times and networks below:</p>
                <p style = {styles.paragraph}><i>*all times EDT</i></p>
                <ul style = {styles.orderedList}>
                    <li style = {styles.listItem}><strong> Sunday, June 19 on FOX from 12:30 PM to 3:00 PM: &nbsp; </strong>This is when you can see the Masters Agility Championship Finals.</li>
                    <li style = {styles.listItem}><strong> Monday, June 20 on FS2 LIVE from 1:00 PM to 4:00 PM:  &nbsp; </strong>Select coverage of the Westminster Kennel Club Dog Show Breed Judging and Obedience Competition</li>
                    <li style = {styles.listItem}><strong> Tuesday, June 21 on FS1 LIVE from 7:30 PM to 11:00 PM:  &nbsp; </strong> Group Judging (Hound, Toy, Non-Sporting, and Herding)</li>
                    <li style = {styles.listItem}><strong> Wednesday, June 22 on FS1 LIVE from 7:30 PM to 11:00 PM:  &nbsp; </strong> Group Judging (Sporting, Working, Terrier followed by Best in Show)</li>
                </ul>
                <h2 style = {styles.heading}>There are three different competitions</h2>
                <h3 style = {styles.heading}>#1 Masters Agility Championship</h3>
                <p style = {styles.paragraph}>This championship is action packed—full of jumps, tunnels, and obstacles. It's easy to follow, and interesting to see how various breeds and sizes handle the course, and the pressure of the moment.</p>
                <h4 style = {styles.heading}>What is it?</h4>
                <p style = {styles.paragraph}>Agility is a timed competition that tests a dog’s ability to complete an obstacle course following the commands of its handler. Purebred and All-American (mixed breed) dogs are eligible to compete in 1 of 5 height classes and are judged on time and completion (minus faults) of the course." <Link to = "https://www.westminsterkennelclub.org/2022-wkc-dog-show/2022-schedule-of-events" style = {styles.a}>(source: WKC)</Link></p>
                <h4 style = {styles.heading}>What are the judges looking for?</h4>
                <p style = {styles.paragraph}>This one is pretty straightforward. A great time, and no faults.</p>
                <h4 style = {styles.heading}>Other helpful information:</h4>
                <p style = {styles.paragraph}>Last year, 350 dogs competed in the qualifiers, and 50 made it to the finals, and the course had 20 obstacles in total. I found it super informative to watch <Link to = "" style = {styles.a}> highlights from last year's competition.</Link></p>
                <h3 style = {styles.heading}>#2 Masters Obedience Championship</h3>
                <h4 style = {styles.heading}>What is it?</h4>
                <p style = {styles.paragraph}>Obedience is a command-driven competition that tests a dog’s ability to comply with the asks of the handler. Commands can include a combination of sit, stay, jump, retrieve and scent discrimination. Purebred and All-American (mixed breed) dogs will compete to showcase the desired skills of a model dog." <Link to = "https://www.westminsterkennelclub.org/2022-wkc-dog-show/2022-schedule-of-events" style = {styles.a}>(source: WKC)</Link></p>
                <h4 style = {styles.heading}>How does it work?</h4>
                <p style = {styles.paragraph}>The Masters Obedience Championship is a unique event in the sport of Obedience in that it consists of two rounds of AKC-approved exercises. One round will contain "Open" exercises, and the other round will have "Utility" exercises. First through fourth placements will be awarded in each round, with the highest-scoring team from either round awarded High in Trial. The Masters Obedience Champion will be determined by the combined individual qualifying scores from both rounds." <Link to = "https://www.westminsterkennelclub.org/masters-obedience-championship" style = {styles.a}>(source: WKC)</Link></p>
                <h3 style = {styles.heading}>#3 The Conformation Competition</h3>
                <p style = {styles.paragraph}>There are two primary levels of this competition—Breed Judging, and Group Judging. There are 211 BREEDS recognized by the American Kennel Club (AKC), and these are divided into seven GROUPS (Sporting, Hound, Working, Terrier, Toy, Non-Sporting, Herding).</p>
                <ul style = {styles.orderedList}>
                    <p style = {styles.paragraph}>Part 1: Breed Judging.</p>
                    <li style = {styles.listItem}>The dogs entered at the Westminster Kennel Club Dog Show each competes within their own breed to be chosen as Best of their Breed/Variety. There are 211 AKC-recognized breeds and varieties." <Link to = "https://www.westminsterkennelclub.org/2022-wkc-dog-show/2022-schedule-of-events" style = {styles.a}>(source: WKC)</Link></li>
                    <p style = {styles.paragraph}>Part 2: Group Judging</p>
                    <li style = {styles.listItem}>Once selected as Best of Breed/Variety, dogs advance to compete within their AKC-recognized Group: Hound, Toy, Non-Sporting, Herding, Sporting, Working, and Terrier." <Link to = "https://www.westminsterkennelclub.org/2022-wkc-dog-show/2022-schedule-of-events" style = {styles.a}>(source: WKC)</Link></li>
                    <li style = {styles.listItem}>The winning dogs across the seven Groups compete for the ultimate prize. From those seven Reserve Best in Show is awarded as a runner up, followed by the Best in Show selection." <Link to = "https://www.westminsterkennelclub.org/2022-wkc-dog-show/2022-schedule-of-events" style = {styles.a}>(source: WKC)</Link></li>
                </ul>
                <h4 style = {styles.heading}>What are the judges looking for?</h4>
                <p style = {styles.paragraph}>They're looking to see how each dog measures up to its breed's STANDARD. They'll look at physical structure, bones, muscles, teeth, coat, and of course, temperament and gait.</p>
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
        width: '60%',
        marginTop: '1em',
    },
    paragraph: {
        width: '60%',
        marginTop: '1em',
    }
}