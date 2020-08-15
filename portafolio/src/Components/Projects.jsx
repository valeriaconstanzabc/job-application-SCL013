import React from 'react'
import '../Css/Project.css'
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div id="containerProjects">
            <div className="containerTittle">
                <h5 className="tittle">PROYECTOS</h5>
                <h3 className="pointTittle">.</h3>
            </div>

            <div id="projectOne">
                <div className="containerDescriptionProjectOne">
                    <h5 className="tittleProjectOneHome">LOFCHE</h5>
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
                    <h5 className="tittleProjectTwo">GUIA MUGGLE</h5>
                    <p className="descriptionProjectTwo">
                        Página web que brinda a los usuarios una biblioteca con información 
                        relevante sobre los personajes de la saga de Harry Potter.
                    </p>
                    <button className="btnSeeProjectTwo" onClick={() => window.scrollTo(0, 0)}><span>VER PROYECTO </span></button>
                </div>
                <div className="containerImgProjectTwo">
                    <img className="imgProjectTwo" src="http://imgfz.com/i/w5d6rKQ.png" alt="guia-muggle"/>
                </div>
            </div>

            <div id="projectThree">
                <div className="containerDescriptionProjectThree">
                    <h5 className="tittleProjectThree">GATERA</h5>
                    <h5 className="tittleProjectThree">HOTELERA</h5>
                    <p className="descriptionProjectThree">
                        Página web realizada para un hostal turístico ubicado en Pichilemu. En 
                        esta página podrás conocer un poco más sobre la historia del hostal 
                        y sus instalaciones. Además te permitirá realizar una reserva en las 
                        dependencias del él.
                    </p>
                    <div id="containerBTNProjectThree">
                        <button className="btnSeeProjectThree" onClick={() => window.scrollTo(0, 0)}><span>VER PROYECTO </span></button>
                    </div>
                </div>
            </div>

            <div id="projectFour">
                <div className="containerDescriptionProjectFour">
                    <h5 className="tittleProjectFour">BURGER-QUEEN</h5>
                    <p className="descriptionProjectFour">
                        BurgerQueen es la interfaz de un pequeño restaurante de hamburguesas 
                        estilo vintage. En esta app se pueden tomar pedidos usando una Tablet, 
                        enviar estos a la cocina y ver el estado de cada uno de ellos.
                    </p>
                    <Link to="burgerqueen">
                        <button className="btnSeeProjectOne" onClick={() => window.scrollTo(0, 0)}><span>VER PROYECTO </span></button>
                    </Link>
                </div>
                <div className="containerImgProjectfOUR">
                    <img className="imgProjectFour" src="http://imgfz.com/i/Qy81tV4.png" alt="burguer-Queen"/>
                </div>
            </div>
        </div>
    )
}

export default Projects
