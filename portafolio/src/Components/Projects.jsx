import React from 'react'
import '../Css/Project.css'
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div id="containerProjects">
            <div className="containerTittleProject">
                <h5 className="tittleProject">PROYECTOS</h5>
                <h3 className="pointTittleProject">.</h3>
            </div>

            <div id="projectOne">
                <div className="containerDescriptionProjectOne">
                    <h5 className="tittleHomeProjectOne">LOFCHE</h5>
                    <p className="descriptionProjectOne">
                        Red social dirigida a personas pertenecientes a una comunidad, 
                        vecindad o barrio, que desean conectar y generar redes de apoyo.
                    </p>
                    <Link to="lofche">
                    <button className="btnSeeProjectOne" onClick={() => window.scrollTo(0, 0)}><span>VER PROYECTO </span></button>
                    </Link>
                </div>
                <div className="containerImgProjectOneHome">
                    <img className="imgProjectOneHome" src="http://imgfz.com/i/wHPXCJm.png" alt="lofche"/>
                </div>
            </div>
            
            <div id="projectTwo">
                <div className="containerDescriptionProjectTwo">
                    <h5 className="tittleHomeProjectTwo">GUIA MUGGLE</h5>
                    <p className="descriptionProjectTwo">
                        Página web que brinda a los usuarios una biblioteca con información 
                        relevante sobre los personajes de la saga de Harry Potter.
                    </p>
                    <Link to="guiamuggle">
                    <button className="btnSeeProjectTwo" onClick={() => window.scrollTo(0, 0)}><span>VER PROYECTO </span></button>
                    </Link>
                </div>
                <div className="containerImgProjectTwo">
                    <img className="imgProjectTwo" src="http://imgfz.com/i/w5d6rKQ.png" alt="guia-muggle"/>
                </div>
            </div>

            <div id="projectThree">
                <div className="containerDescriptionProjectThree">
                    <h5 className="tittleHomeProjectThree">GATERA</h5>
                    <h5 className="tittleHomeProjectThree">HOTELERA</h5>
                    <p className="descriptionProjectThree">
                        Página web realizada para un hostal turístico ubicado en Pichilemu. En 
                        esta página podrás conocer un poco más sobre la historia del hostal 
                        y sus instalaciones. Además te permitirá realizar una reserva en las 
                        dependencias del él.
                    </p>
                    <div id="containerBTNProjectThree">
                        <Link to="gatera">
                        <button className="btnSeeProjectThree" onClick={() => window.scrollTo(0, 0)}><span>VER PROYECTO </span></button>
                        </Link>
                    </div>
                </div>
            </div>

            <div id="projectFour">
                <div className="containerDescriptionProjectFour">
                    <h5 className="tittleHomeProjectFour">BURGER-QUEEN</h5>
                    <p className="descriptionProjectFour">
                        BurgerQueen es la interfaz de un pequeño restaurante de hamburguesas 
                        estilo vintage. En esta app se pueden tomar pedidos usando una Tablet, 
                        enviar estos a la cocina y ver el estado de cada uno de ellos.
                    </p>
                    <Link to="burgerqueen">
                        <button className="btnSeeProjectOne" onClick={() => window.scrollTo(0, 0)}><span>VER PROYECTO </span></button>
                    </Link>
                </div>
                <div className="containerImgProjectFour">
                    <img className="imgProjectFour" src="http://imgfz.com/i/Qy81tV4.png" alt="burguer-Queen"/>
                </div>
            </div>
        </div>
    )
}

export default Projects
