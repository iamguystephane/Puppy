import './App.css'
import './JS/all'
// import { Link } from 'react-router-dom'
import React from 'react'
import Topfooter from './top-footer'
import Footer from './footer'
import NavBar from './nav'
import GroomingArticles from './grooming-articles'
import groomingCard from './groomingCard'
import PuppySearch from './puppysearch'
import PopularRn from './popular'
import MenuBar from './menu'

export default function Grooming(){
    const travel = groomingCard.map((item) =>{
        return <GroomingArticles 
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
            :(
            <>
                <Topfooter />
                <NavBar handleMenuOpen={handleMenuOpen}/>
                <div className='main-travel-section'>
                    <div class = "header-body-searchbar">
                        <input type = "text" placeholder = 'What are you interested in today?' />
                        <i className = "fa fa-search header-body-searchIcon" />
                    </div>
                    <h1 style={{marginTop: '1em'}}> Grooming </h1>
                    <p> just got a new puppy and they got in to the mud in the back yard? Here are some articles for puppy and dog grooming for help you out. </p>
                    <h3 style={{marginTop: '1em'}}> 5 articles </h3>
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