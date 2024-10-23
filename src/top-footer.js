import React from 'react'
import './JS/all'
import './media.css'
import { Link } from 'react-router-dom'
export default function Topfooter(){
    return(
        <div className = "top-footer"> 
            <p> Message us on Facebook anytime </p>
            <Link to = "https://www.facebook.com/share/kMWrtevV3xt4suEE/?mibextid=K35XfP"><i class="fa-brands fa-facebook-f icon"></i></Link>
        </div>
    )
}