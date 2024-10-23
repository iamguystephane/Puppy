import React from 'react'
import './App.css'
import './JS/all'
import { Link } from 'react-router-dom'
import NavBar from './nav'
import Footer from './footer'
import PopularRn from './popular'
import Topfooter from './top-footer'
import MenuBar from './menu'
import puppy1 from './images/dasch13.jpg'
import puppy2 from './images/dasch2.jpg'
import puppy3 from './images/dasch3.jpg'
import puppy4 from './images/dasch4.jpeg'
import puppy5 from './images/dasch12.jpg'
import puppy6 from './images/dasch9.jpg'
import puppy7 from './images/dasch10.jpg'
import puppy8 from './images/dasch11.jpg'
import giveback from './images/giveback.webp'

export default function ResourceCenter({handleMenuOpen, handleMenuClose}){
    const [menuOpen, setMenuOpen] = React.useState(null)

    function handleMenuOpen() {
        setMenuOpen(true);
    }
    function handleMenuClose() {
        setMenuOpen(false)
    }
    return(
        <>
            {menuOpen ? (<MenuBar handleMenuClose={handleMenuClose}/>)
            :( <>
                <Topfooter />
                <NavBar handleMenuOpen={handleMenuOpen}/>
                <div className="resource-center-container">
                    <div class = "header-body-searchbar">
                        <input type = "text" placeholder = 'What are you interested in today?' />
                        <i className = "fa fa-search header-body-searchIcon" />
                    </div>
                    <h1 style = {{marginTop: '2em', textAlign: 'center'}} className = "main-heading"> Sarah Dachshaund Puppy Center</h1>
                    <img src = {puppy6} width="800px" height="400px" alt="" style = {{borderRadius: '10px', marginTop: '1em'}} className = "main-image" />
                    <p style = {{marginTop: '1em'}}> The best picks for you and your best friend </p>
                    <div className='resource-center'>
                        <h2 style ={{textAlign: 'center', marginTop: '3em'}}> Browse by topic </h2>
                        <div className="first-line"> 
                            <ul>
                                <li>
                                    <Link to ="/resource-center/travel">
                                        <div className="resource-card">
                                            <img src={puppy1} width="200px" height="200px" alt="" />
                                            <h2> Travel </h2>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to ="#">
                                        <div className="resource-card">
                                            <img src={puppy2} width="200px" height="200px" alt="" />
                                            <h2> Dog Ownership </h2>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to ="/resource-center/education">
                                        <div className="resource-card education">
                                            <img src={puppy3} width="350px" height="200px" alt="" />
                                            <h2> Education </h2>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="second-line"> 
                            <ul>
                                <li>
                                    <Link to ="/resource-center/training">
                                        <div className="resource-card education">
                                            <img src={puppy4} width="350px" height="200px" alt="" />
                                            <h2> Training </h2>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to ="#">
                                        <div className="resource-card">
                                            <img src={puppy5} width="200px" height="200px" alt="" />
                                            <h2> Health & Care </h2>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to ="/resource-center/exercise">
                                        <div className="resource-card education">
                                            <img src={puppy6} width="350px" height="200px" alt="" />
                                            <h2> Exercise </h2>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="third-line"> 
                            <ul>
                                <li>
                                    <Link to ="/resource-center/grooming">
                                        <div className="resource-card education">
                                            <img src={puppy7} width="350px" height="200px" alt="" />
                                            <h2> Grooming </h2>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to ="/resource-center/nutrition">
                                        <div className="resource-card education">
                                            <img src={puppy8} width="350px" height="200px" alt="" />
                                            <h2> Nutrition </h2>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="promise-review-section">
                        <div className = "left-section"><img src={giveback} width="500px" height="300px" alt="" style={{borderRadius: '8px'}}/></div>
                        <div className="right-section">
                            <h2> Sarah Puppy gives back </h2>
                            <p> Our Puppy Gives Back Program continues our mission to celebrate dogs always and make a difference by integrating philanthropy into our corporate philosophy and actions. </p>
                            <Link to  = "#"> Sarah Puppy gives back articles </Link>
                        </div>
                    </div>
                    <PopularRn />
                </div>
                <Footer />
            </>)}
        </>
    )
}