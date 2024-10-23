import './App.css'
import './JS/all'
// import { Link } from 'react-router-dom'
import React from 'react'
import Topfooter from './top-footer'
import Footer from './footer'
import NavBar from './nav'
import MenuBar from './menu'
import EducationArticles from './education-articles'
import educationCard from './educationCard'
import PuppySearch from './puppysearch'
import PopularRn from './popular'

export default function Education(){
    const travel = educationCard.map((item) =>{
        return <EducationArticles
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
                <div className='main-travel-section'>
                    <div class = "header-body-searchbar">
                        <input type = "text" placeholder = 'What are you interested in today?' />
                        <i className = "fa fa-search header-body-searchIcon" />
                    </div>
                    <h1 style={{marginTop: '1em'}}> Education </h1>
                    <p> A new puppy can create a lot of questions. PuppySpot is here to Puppy educate you. </p>
                    <h3 style={{marginTop: '1em'}}> 4 articles </h3>
                    <div className="articles">
                        {travel}
                    </div>
                    <PopularRn />
                    <PuppySearch />
                </div>
                
                <Footer />
            </>)}
        </div>
    )
}