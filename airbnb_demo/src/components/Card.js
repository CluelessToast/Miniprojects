import React from "react";



export default function Card(props){

    return(
        <div className="card">
            <img src={props.image} className="card-image"></img>
        <div className="card-stats">
            <img src="images/star.png" className="card-star"></img>
            <span>{props.rating}</span>
            <span className="gray">{props.reviews}</span>
            <span className="gray">{props.country}</span>
        </div>
        <p className="card-title">{props.p}</p>
        <p><b>${props.price}</b> / person</p>
        </div>
    );
}