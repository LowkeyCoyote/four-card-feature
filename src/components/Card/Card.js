import React from "react";
import "./Card.css"

const Card = (props) => {

    let cssBorderTop;

    switch (props.color) {

        case "cyan":
            cssBorderTop = {borderTop: '4px solid hsl(180, 62%, 55%)'};
            break;
        case "red":
            cssBorderTop = {borderTop: '4px solid hsl(0, 78%, 62%)'};
            break;
        case "orange":
            cssBorderTop = {borderTop: '4px solid hsl(34, 97%, 64%)'};
            break;
        case "blue":
            cssBorderTop = {borderTop: '4px solid hsl(212, 86%, 64%)'};
            break;
    }

    return (
        <article className="card" style={cssBorderTop}>
            <h3>{props.cardTitle}</h3>
            <p>{props.cardText}</p>
            <div className="card-image">
                <img src={props.cardImage} alt="image"/>
            </div>
        </article>
    )

};

export default Card;

