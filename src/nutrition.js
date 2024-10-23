import './App.css'
import './JS/all'
// import { Link } from 'react-router-dom'
import React from 'react'
import Topfooter from './top-footer'
import Footer from './footer'
import NavBar from './nav'
import MenuBar from './menu'
import nutritionCard from './nutritionCard'
import NutritionArticles from './nutrition-articles'
import PuppySearch from './puppysearch'
import PopularRn from './popular'

export default function Nutrition(){
    const travel = nutritionCard.map((item) =>{
        return <NutritionArticles 
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
                    <h1 style={{marginTop: '1em'}}> Nutrition </h1>
                    <p> What do I feed my 8 week old puppy? No matter what the age or your puppy, Sarah Puppy has all the answers to Puppy Nutrition. </p>
                    <h3 style={{marginTop: '1em'}}> {NutritionArticles.length + 1} Articles </h3>
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