import React from 'react'
import '../Css/Tools.css'
import '../Css/AboutMe.css'

const Tools = () => {
    return (
        <div id="containerTools">
            <div className="containerTittle">
                <h5 className="tittle">HERRAMIENTAS</h5>
                <h3 className="pointTittleTools">.</h3>
            </div>
            <div id="containerColorTools">
                <img className="imgTools" src="http://imgfz.com/i/cBb3i7D.png" alt="html5"/>
                <img className="imgTools" src="http://imgfz.com/i/RkSbjGl.png" alt="js"/>
                <img className="imgTools" src="http://imgfz.com/i/AYunpIz.png" alt="css"/>
                <img className="imgTools" src="http://imgfz.com/i/KI90XYh.png" alt="react"/>
                <img className="imgTools" src="http://imgfz.com/i/LhKOBqf.png" alt="github"/>
                <img className="imgTools" src="http://imgfz.com/i/QcyeCpM.png" alt="figma"/>
                <img className="imgTools" src="http://imgfz.com/i/Trg7GMB.png" alt="invision"/>
            </div>
            
        </div>
    )
}

export default Tools
