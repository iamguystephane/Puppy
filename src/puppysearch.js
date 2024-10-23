import './App.css'
import { Link } from 'react-router-dom'

export default function PuppySearch(){
    return(
        <>
            <div className = "travel-puppy-search">
                <h2 style = {{marginTop: '1em'}}> Are you looking for a puppy? </h2>
                <p style = {{marginTop: '1em'}}> Search our amazing inventory today and take home the puppy of your dreams! </p>
                <Link to = "/"> Search puppies </Link>
                <div className="loading"></div>
            </div>
        </>
    )
}