import React from 'react'
import '../Css/Presentation.css'
import { Link } from "react-router-dom";

const Presentation = () => {
    return (
        <div id="containerPresentation">
            <div id="containerBriefcase">
                <h5 id="briefcase">PORTAFOLIO</h5>
            </div>
            <div id="containerColorPresentation">
                <div className="containerName">
                    <h2 id="name">VALERIA</h2>
                    <div className="lastNameAndPoint">
                        <h3 id="lastName">BRITO</h3>
                        <h3 id="pointPresentationn">.</h3>
                    </div>
                </div>
                <div className="containerDescriptionn">
                    <h2 id="descriptionDFE">Desarrolladora Front end</h2>
                    <h4 id="descriptionD">Diseñadora</h4>
                    <div id="containerbtnMe">
                        <Link to="acercaDeMi">
                            <button className="me"><span>Conoce más sobre mi </span></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentation
