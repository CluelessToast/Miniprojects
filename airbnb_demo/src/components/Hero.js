import React from "react";

export default function Hero(){
    return(
        <section className="hero">
            <img src={require("../images/photogrid.jpg")} className="hero-hero"></img>
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-p"> Join unique interactive activities led by
                one-of-a-kind hosts-all without home.
            </p>

        </section>
    )
}