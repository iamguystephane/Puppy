import './App.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
    return(
        <>
            <h1> The page you are looking for is not found </h1>
            <Link to="/"> Go back to home </Link>
        </>
    )
}