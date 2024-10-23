import './App.css'
import React from 'react'
import { Link } from 'react-router-dom'
import puppynames from './images/dasc-names.jpg'
import puppyname from './images/dasc-name.webp'
import puppylease from './images/dasc-lease2.jpg'
import puppydev from './images/dasc-dev.jpg'
import responsive from './popular-rn-responsive'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function PopularRn(){
    return(
        <div className="popular-right-now">
            <h2 style = {{marginBottom: '1em', textAlign: 'center'}}> Popular right now </h2>
            <ul className="card"> 
                <Carousel responsive={responsive} showDots={false} arrows={true} swipeable={true} className='carousel'>
                    <li>
                        <Link to ="#">
                            <img src={puppynames} width="300px" height="200px" alt="" />
                            <h3 style={{textAlign: 'center', fontSize: '15px'}}> Most popular puppy names </h3>
                        </Link>
                    </li>
                    <li>
                        <Link to ="#">
                            <img src={puppyname} width="300px" height="200px" alt="" />
                            <h3 style={{textAlign: 'center', fontSize: '15px'}}> How to help your puppy learn their name </h3>
                        </Link>
                    </li>
                    <li>
                        <Link to ="#">
                            <img src={puppydev} width="300px" height="200px" alt="" />
                            <h3 style={{textAlign: 'center', fontSize: '15px'}}> Your puppy's development: 7 weeks </h3>
                        </Link>
                    </li>
                    <li>
                        <Link to ="#">
                            <img src={puppylease} width="300px" height="200px" alt="" />
                            <h3 style={{textAlign: 'center', fontSize: '15px'}}> A step-by-step tutorial to leash training </h3>
                        </Link>
                    </li>
                </Carousel>
            </ul>
        </div>
    )
}