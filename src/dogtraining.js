import './App.css'
import React from 'react'
import NavBar from './nav'
import MenuBar from './menu'
import Footer from './footer'
import PopularRn from './popular'
import Topfooter from './top-footer'
import PuppySearch from './puppysearch'
import trainingCard from './training-cards'
import TrainingArticle from './training-articles'

export default function DogTraining(){
    const training = trainingCard.map(item =>{
        return <TrainingArticle 
            key = {item.id}
            item = {item}
        />
    })
    const [menuOpen, setMenuOpen] = React.useState(null)

    function handleMenuOpen() {
      setMenuOpen(true);
    }
    function handleMenuClose() {
      setMenuOpen(false)
    }
    return(
        <div>
            {menuOpen ? (<MenuBar handleMenuClose={handleMenuClose}/>)
            :(<>
                <Topfooter />
                <NavBar handleMenuOpen={handleMenuOpen}/>
                <div className='main-travel-section training-travel-section'>
                    <div class = "header-body-searchbar">
                        <input type = "text" placeholder = 'What are you interested in today?' />
                        <i className = "fa fa-search header-body-searchIcon" />
                    </div>
                    <h1 style={{marginTop: '1em'}}> Training </h1>
                    <p style = {{width: '65%', textAlign: 'center', marginTop: '3em'}}>Just bought a new puppy and they're wreaking havoc around the house? Obedience training and socialization are essential to a well-behaved dog. You'll want to start training your pup as soon as possible to avoid behavioral issues. While dog training can seem daunting (especially if it's your first dog). If you take it slow and use positive reinforcement, you can teach your dog good behavior through basic obedience skills and basic commands. Even an adult dog can benefit from relearning some good manners in dog training classes. Here are some great dog training tips and guides to help make your dog the best dog. </p>
                    <h3 style={{marginTop: '1em', marginLeft: '-60%'}}> 9 articles </h3>
                    <div className="articles">
                        {training}
                    </div>
                    
                </div>
                <div className='popular-and-search'>
                    <PopularRn />
                    <PuppySearch />
                </div>
                <Footer />
            </>)}
        </div>
    )
}