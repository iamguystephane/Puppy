import './App.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function TrainingArticle(props){
    return(
        <div className="article-card">
            <img src={props.item.image} width="400px" height="250px" alt="" />
            <Link to={`/resource-center/training/${props.item.url}`}> {props.item.link} </Link>
            <p style={{marginTop: '.5em'}}> {props.item.description}</p>
            <div className="review-date">
                <p> {props.item.review} &nbsp; {props.item.date} </p>
            </div>
        </div>
    )
}