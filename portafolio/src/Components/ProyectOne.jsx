import React from 'react';
import '../Css/ProyectOne.css'

import { ModalOneProyectOne, ModalTwoProyectOne, ModalThreeProyectOne, ModalFourProyectOne } from './ModalProyectFour';

const ProyectFour = () => {

    return (
        <div id="containerProyectOne">
            <div className="containerTittleProyectOne">
            <h5 className="tittleProyectOne">LOFCHE</h5>
            <h3 className="pointTittleProyectOne">.</h3>
            </div>

            <div id="containerColorProyectOne">
                <div id="containerDescriptionProductProyectOne">
                    <p id="tProduction1">Tiempo de producción: 4 semanas</p>
                    <h2>DEFINICIÓN DE PRODUCTO</h2>

                    <div className="container1ProyectOne">
                        <p className="textOne">
                        Lofche es una Red social dirigida a personas que pertenecen a una comunidad, 
                        vecindad o barrio, y que desean conectar y generar redes de apoyo.
                        Esta app genera un espacio en donde sus miembros pueden resolver inquietudes, 
                        solicitar información y ayudar a vecinos que lo necesiten.
                        Personas de un rango de edad entre los 20 a los 40 años son el usuario
                        objetivo. Quienes buscan integrarse más a su comunidad y crear 
                        lazos colaborativos.
                        </p>
                        <div class="imgLofche">
                        <img className="imgProyectOne" src="https://i.ibb.co/JFHzFr5/Lofche.jpg" alt=""/>
                        <img className="imgProyectOne" src="https://i.ibb.co/F81fqHh/Sin-t-tulo-2.jpg" alt=""/>
                        </div>
                        <div>
                        
                        </div>
                    </div>                   
                </div>

                <div id="containerHistoryUserProyectOne">
                    <h2 className="textOne">HISTORIAS DE USUARIO</h2>
                    <div className="containerProyectOne">
                        <div>{<ModalOneProyectOne />}</div>

                        <div className="containerImgProyectFourArrow3">
                            <img className="imgProyectOneArrow3" src="https://i.ibb.co/TkX1RRV/eva-arrow-ios-forward-fill.png" alt=""/>
                        </div>

                        <div>{<ModalTwoProyectOne />}</div>

                        <div className="containerImgProyectFourArrow3">
                            <img className="imgProyectOneArrow3" src="https://i.ibb.co/TkX1RRV/eva-arrow-ios-forward-fill.png" alt=""/>
                        </div>

                        <div>{<ModalThreeProyectOne />}</div>

                        <div className="containerImgProyectFourArrow3">
                            <img className="imgProyectOneArrow3" src="https://i.ibb.co/TkX1RRV/eva-arrow-ios-forward-fill.png" alt=""/>
                        </div>

                        <div>{<ModalFourProyectOne />}</div>
                    </div>
                </div>

                {/* <div id="containerLinksProyect4">
                    <div className="container">
                        <div className="content">
                            <a href="https://burger-queen-2bad6.web.app/" target="blank">
                            <div className="content-overlay"></div>
                            <img className="content-image" src="https://i.ibb.co/zV5SjV3/Group-7.png"/>
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">¡Visita <br/> Burger-Queen!</h3>
                            </div>
                            </a>
                        </div>
                    </div>

                    <div className="container">
                        <div className="content">
                            <a href="https://github.com/valeriaconstanzabc/SCL013-burger-queen" target="blank">
                            <div className="content-overlay"></div>
                            <img className="content-image" src="https://i.ibb.co/QddgN9p/Group-8.png"/>
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Código del <br/> proyecto</h3>
                            </div>
                            </a>
                        </div>
                    </div>
                </div> */}

                {/* 

                <div id="containerToolsProyect4">
                    <h2>HERRAMIENTAS UTILIZADAS</h2>
                    <div className="toolsProyectFour">
                        <div className="imgToolsHTML5Proyect4">
                            <div className="containerImgToolsProyect4">
                                <h2 className="textImgToolsProyect4">HTML5</h2>
                            </div>
                        </div>
                        <div className="imgToolsJSProyect4">
                            <div className="containerImgToolsProyect4">
                                <h2 className="textImgToolsProyect4">JavaScript</h2>
                            </div>
                        </div>
                        <div className="imgToolsCSSProyect4">
                            <div className="containerImgToolsProyect4">
                                <h2 className="textImgToolsProyect4">CSS</h2>
                            </div>
                        </div>
                        <div className="imgToolsReactProyect4">
                            <div className="containerImgToolsProyect4">
                                <h2 className="textImgToolsProyect4">React</h2>
                            </div>
                        </div>
                        <div className="imgToolsFigmaProyect4">
                            <div className="containerImgToolsProyect4">
                                <h2 className="textImgToolsProyect4">Figma</h2>
                            </div>
                        </div>
                        <div className="imgToolsInvisionProyect4">
                            <div className="containerImgToolsProyect4">
                                <h2 className="textImgToolsProyect4">Invision</h2>
                            </div>
                        </div>
                        
                    </div>                   
                </div> */}
            </div>
        </div>
    )
}

export default ProyectFour
