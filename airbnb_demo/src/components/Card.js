import React from "react";



export default function Card(props){
    let badgeText
    if(props.openSpots=== 0){
        badgeText="SOLD OUT"
    } else if(props.location=== "Online") {
        badgeText="ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.profileImg} className="card-image"></img>
        <div className="card-stats">
            <img src="images/star.png" className="card-star"></img>
            <span>{props.stats.rating}</span>
            <span className="gray">{props.stats.reviews}</span>
            <span className="gray">{props.location}</span>
        </div>
        <div><p className="card-title">{props.title}</p></div>
        <p className="card-price"><b>${props.price}</b> / person</p>
        </div>
    );
}