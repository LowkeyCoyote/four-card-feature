import React from "react";
import Card from "../Card/Card";
import "./cardGrid.css";
import imageSupervisor from "../../assets/images/icon-supervisor.svg"
import imageTeamBuilder from "../../assets/images/icon-team-builder.svg"
import imageKarma from "../../assets/images/icon-karma.svg"
import imageCalculator from "../../assets/images/icon-calculator.svg"

const CardGrid = (props) => {
        return (
            <div className="container">
                <header>
                    <h1>{props.title}</h1>
                    <p>{props.subtitles}</p>
                </header>
                <section className="card-grid">
                    <Card
                        cardTitle="Supervisor"
                        cardText="Monitors activity to identify project roadblocks"
                        cardImage={imageSupervisor}
                        color="cyan"
                    />
                    <Card
                        cardTitle="Team Builder"
                        cardText="Scans our talent network to create the optimal team for your project"
                        cardImage={imageTeamBuilder}
                        color="red"
                    />
                    <Card
                        cardTitle="Karma"
                        cardText="Regularly evaluates our talent to ensure quality"
                        cardImage={imageKarma}
                        color="orange"
                    />
                    <Card
                        cardTitle="Calculator"
                        cardText="Uses data from past projects to provide better delivery estimates"
                        cardImage={imageCalculator}
                        color="blue"
                    />
                </section>
            </div>
        )

    }
;
export default CardGrid;

