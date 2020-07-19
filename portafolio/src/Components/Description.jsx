import React from 'react'
import '../Css/Description.css'
import { Link } from "react-router-dom";

const Description = () => {
    return (
        <div id="containerDescription">
            <h2 id="descriptionDFE">Desarrolladora Front end</h2>
            <h4 id="descriptionD">Diseñadora</h4>
            <div id="containerbtnMe">
                <Link to="acercaDeMi">
                    <button className="me"><span>Conoce más sobre mi </span></button>
                </Link>
            </div>
        </div>
    )
}

export default Description
