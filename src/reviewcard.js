import './App.css'
import React from 'react'

export default function ReviewCard(props){
    return(
        <> 
            <div className="review-card">
                <img src={props.rev.image} height="450px" width="350px" alt=""/>
                <div className="review-card-section">
                    <div className="rating-section" style = {{display: 'flex', gap: '5px'}}>
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                    </div>
                    <p style = {{textAlign: 'center', marginTop: '15px'}}> {props.rev.review} </p>
                    <p style = {{marginTop: '15px'}}> - {props.rev.name}, {props.rev.state} </p>
                    <p style = {{marginTop: '15px'}}> {props.rev.date}  </p>
                </div>
            </div>
        </>
    )
}