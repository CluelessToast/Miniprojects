import React from "react";



export default function Card(props){

    return(
        <div className="card">
            {!props.openSpots === 0 && <div className="card-badge">SOLD OUT</div>}
            <img src={props.image} className="card-image"></img>
        <div className="card-stats">
            <img src="images/star.png" className="card-star"></img>
            <span>{props.rating}</span>
            <span className="gray">{props.reviews}</span>
            <span className="gray">{props.country}</span>
        </div>
        <div><p className="card-title">{props.p}</p></div>
        <p className="card-price"><b>${props.price}</b> / person</p>
        </div>
    );
}