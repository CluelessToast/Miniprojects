import React from "react";


export default function Card(){
    return(
        <div className="card">
            <img src={require("../images/fez.jpg")} className="card-image"></img>
        <div className="card-stats">
            <img src={require("../images/star.png")} className="card-star"></img>
            <span>5.0</span>
            <span className="gray">(6) *</span>
            <span className="gray"> USA</span>
        </div>
        <p>Drugs lessons with Fez</p>
        <p> <b>420.69</b>/ person</p>
        </div>
    );
}