import React from "react";

export default function Journal(props) {
    return (
        <div className="postcard">
            <img src={props.image} alt="" className="postcard-img"/>
            <div className="postcard-text">
                <div className="location">
                    <small>{props.location}</small>
                    <a href={props.maps} target="_blank" rel="noreferrer">view on the map</a>
                </div>
                <h2>{props.title}</h2>
                <strong>{props.date}</strong>
                <p>{props.description}</p>
            </div>
        </div>
    )
}