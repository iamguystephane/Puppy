import './App.css'
import './JS/all'
// import { Link } from 'react-router-dom'
import React from 'react'
import Topfooter from './top-footer'
import Footer from './footer'
import NavBar from './nav'
import MenuBar from './menu'
import TravelArticle from './travelArticle'
import travelCard from './travel-cards'
import PuppySearch from './puppysearch'
import PopularRn from './popular'

export default function ResourceTravel(){
    const travel = travelCard.map((item) =>{
        return <TravelArticle 
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
            {menuOpen ? (<MenuBar handleMenuClose={handleMenuClose}/>):(
            <>
                <Topfooter />
                <NavBar handleMenuOpen={handleMenuOpen}/>
                <div className='main-travel-section'>
                    <div class = "header-body-searchbar">
                        <input type = "text" placeholder = 'What are you interested in today?' />
                        <i className = "fa fa-search header-body-searchIcon" />
                    </div>
                    <h1 style={{marginTop: '1em'}}> Travel </h1>
                    <p> Interested in travelling with your dog but have questions? We've got you covered. </p>
                    <h3 style={{marginTop: '1em'}}> 3 articles </h3>
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