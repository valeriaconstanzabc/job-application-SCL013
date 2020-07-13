import React from 'react'
import '../Css/Proyect.css'

const Projects = () => {
    return (
        <div id="containerProyects">
            <div className="containerTittle">
                <h5 className="tittle">PROYECTOS</h5>
                <h3 className="pointTittle">.</h3>
            </div>

            <div id="proyectOne">
                <div className="containerDescriptionProyectOne">
                    <h5 className="tittleProyectOne">LOFCHE</h5>
                    <p className="descriptionProyectOne">Red social dirigida a personas pertenecientes a una comunidad, vecindad o barrio, que desean conectar y generar redes de apoyo.</p>
                    <button className="btnSeeProjectOne">VER PROYECTO</button>
                </div>
                <div className="containerImgProyectOne">
                    <img className="imgProyectOne" src="http://imgfz.com/i/wHPXCJm.png" alt=""/>
                </div>
            </div>
            
            <div id="proyectTwo">
                <div className="containerDescriptionProyectTwo">
                    <h5 className="tittleProyectTwo">GUIA MUGGLE</h5>
                    <p className="descriptionProyectTwo">Página web que brinda a los usuarios una biblioteca con información relevante sobre los personajes de la saga de Harry Potter.</p>
                    <button className="btnSeeProjectTwo">VER PROYECTO</button>
                </div>
                <div className="containerImgProyectTwo">
                    <img className="imgProyectTwo" src="http://imgfz.com/i/w5d6rKQ.png" alt=""/>
                </div>
            </div>

            <div id="proyectThree">
                <div className="containerDescriptionProyectThree">
                    <h5 className="tittleProyectThree">LA GATERA HOTELERA</h5>
                    <p className="descriptionProyectThree">Página web realizada para hostal turístico ubicado en Pichilemu. En esta página podrás conocer un poco más sobre la historia del hostal y sus instalaciones. Además te permitirá realizar una reserva en las dependencias del él.</p>
                    <div id="containerBTNProyectThree">
                        <button className="btnSeeProjectThree">VER PROYECTO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
