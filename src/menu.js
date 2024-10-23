import React from 'react'
import './App.css'
import './media.css'
import { Link } from 'react-router-dom'

export default function MenuBar({handleMenuClose}) {
    const [tab, setTab] = React.useState("main-menu")
    function handleChangeTab(newTab) {
        setTab(newTab)
    }
    function handleGoBack() {
        setTab("main-menu");
    }
    return(
        <div className = "responsive-menu">
            <div className = "logo-and-close">
                <Link to = "/" className = "logo"> Sarah Dachshund Puppy </Link>
                <div onClick={handleMenuClose}><i className="fa-solid fa-x menu-close"></i></div>
            </div>
            <div className = "header-body-searchbar">
                <input type = "text" placeholder = 'search for puppy by name' />
                <i className = "fa fa-search header-body-searchIcon" />
            </div>
            <a href = "tel: (937) 770-4584" style = {{textDecoration: 'none', color: '#ff7b00', fontWeight: '600', marginTop: '1em', marginBottom: '1em'}}>(937) 770-4584</a>
            <div className = "btns">
                <button type = "button" className = "btn"> Browse all puppies </button>
            </div>
            {tab === "main-menu" && <ul className = "main-menu">
                <p style = {{color: 'grey', marginTop: '5px', marginBottom: '5px'}}> Available puppies </p>
                <br /><li><Link to = ""> By characteristics  </Link></li> <br />
                <hr />
                <br /><li><Link to = "">By gender</Link></li> <br />
                <hr />
                <br /><li><Link to = "" onClick={() => handleChangeTab("promise-tab")}>Our promise</Link></li> <br />
                <hr />
                <br /><li><Link to = "" onClick={()=> handleChangeTab("about-tab")}>About us</Link></li> <br />
                <hr />
            </ul>}
            {tab === "promise-tab" && <ul className = "our-promise-dropdownmenu">
                <div style = {{display: 'flex', gap: '15px', alignItems: 'center'}}>
                    <div onClick={handleGoBack}>
                        <i class="fa fa-arrow-left back-btn" aria-hidden="true"></i>
                    </div>
                    <p style = {{color: 'grey', marginTop: '5px', marginBottom: '5px'}}>  Our promise </p>   
                </div>
                <br /><li><Link to = ""> Sarah Puppy promise </Link></li> <br />
                <hr />
                <br /><li><Link to = "">Breeder Standards</Link></li> <br />
                <hr />
                <br /><li><Link to = "">Puppy travel</Link></li> <br />
                <hr />
                <br /><li><Link to = "">Health check</Link></li> <br />
                <hr />
                <br /><li><Link to = "">Customer review</Link></li> <br />
                <hr />
                <br /><li><Link to = "">Sarah puppy gives back</Link></li> <br />
                <hr />
            </ul>}
            {tab === "about-tab" && <ul className = "our-promise-dropdownmenu">
                <div style = {{display: 'flex', gap: '15px', alignItems: 'center'}}>
                    <div onClick={handleGoBack}>
                        <i class="fa fa-arrow-left back-btn" aria-hidden="true"></i>
                    </div>
                    <p style = {{color: 'grey', marginTop: '5px', marginBottom: '5px'}}>  About us </p>   
                </div>
                <br /><li><Link to = "/about">About us</Link></li> <br />
                <hr />
                <br /><li><Link to = "/resource-center">Resource Center</Link></li> <br />
                <hr />
                <br /><li><Link to = "/contact">Contact Us</Link></li> <br />
                <hr />
            </ul>}
        </div>
    )
}