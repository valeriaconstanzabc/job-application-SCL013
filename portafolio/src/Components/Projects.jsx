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
                    <p className="descriptionProyectOne">
                        Red social dirigida a personas pertenecientes a una comunidad, 
                        vecindad o barrio, que desean conectar y generar redes de apoyo.
                    </p>
                    <button className="btnSeeProjectOne"><span>VER PROYECTO </span></button>
                </div>
                <div className="containerImgProyectOne">
                    <img className="imgProyectOne" src="http://imgfz.com/i/wHPXCJm.png" alt="lofche"/>
                </div>
            </div>
            
            <div id="proyectTwo">
                <div className="containerDescriptionProyectTwo">
                    <h5 className="tittleProyectTwo">GUIA MUGGLE</h5>
                    <p className="descriptionProyectTwo">
                        Página web que brinda a los usuarios una biblioteca con información 
                        relevante sobre los personajes de la saga de Harry Potter.
                    </p>
                    <button className="btnSeeProjectTwo"><span>VER PROYECTO </span></button>
                </div>
                <div className="containerImgProyectTwo">
                    <img className="imgProyectTwo" src="http://imgfz.com/i/w5d6rKQ.png" alt="guia-muggle"/>
                </div>
            </div>

            <div id="proyectThree">
                <div className="containerDescriptionProyectThree">
                    <h5 className="tittleProyectThree">LA GATERA HOTELERA</h5>
                    <p className="descriptionProyectThree">
                        Página web realizada para un hostal turístico ubicado en Pichilemu. En 
                        esta página podrás conocer un poco más sobre la historia del hostal 
                        y sus instalaciones. Además te permitirá realizar una reserva en las 
                        dependencias del él.
                    </p>
                    <div id="containerBTNProyectThree">
                        <button className="btnSeeProjectThree"><span>VER PROYECTO </span></button>
                    </div>
                </div>
            </div>

            <div id="proyectFour">
                <div className="containerDescriptionProyectFour">
                    <h5 className="tittleProyectFour">BURGER-QUEEN</h5>
                    <p className="descriptionProyectFour">
                        BurgerQueen es la interfaz de un pequeño restaurante de hamburguesas 
                        estilo vintage. En esta app se pueden tomar pedidos usando una Tablet, 
                        enviar estos a la cocina y ver el estado de cada uno de ellos.
                    </p>
                    <button className="btnSeeProjectOne"><span>VER PROYECTO </span></button>
                </div>
                <div className="containerImgProyectfOUR">
                    <img className="imgProyectFour" src="http://imgfz.com/i/Qy81tV4.png" alt="burguer-Queen"/>
                </div>
            </div>
        </div>
    )
}

export default Projects
