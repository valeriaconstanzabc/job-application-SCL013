import React from 'react';
import '../../Css/ProjectTwo.css'

import { ModalOneProjectTwo, ModalTwoProjectTwo, ModalThreeProjectTwo  } from '../Modals';

const ProjectTwo = () => {

    return (
        <div id="containerProjectTwo">
            <div className="containerTittleProjectTwo">
                <h5 className="tittleProjectTwo">GUÍA MUGGLE</h5>
                <h3 className="pointTittleProjectTwo">.</h3>
            </div>

            <div id="containerColorProjectTwo">
                <div id="containerDescriptionProductProjectTwo">
                    <p id="tProduction1">Tiempo de producción: 4 semanas</p>
                    <h2>DEFINICIÓN DE PRODUCTO</h2>

                    <div className="container1ProjectTwo">
                        <p className="textTwo">
                        Guía muggle, es una página web que le brinda a los usuarios una biblioteca 
                        con información relevante sobre los personajes de la saga de Harry Potter.
                        <br/><br/> 
                        En esta web, el usuario podrá indagar sobre las casas, los patronus, las 
                        características de sus varitas, entre otras muchas peculiaridades pertenecientes 
                        a cada uno de las personalidades presentes en la película.
                        <br/><br/>
                        Esta web está dirigida a 3 tipos de usuarios (casual, aficionado y fanático), 
                        los cuales podrán clasificar todos los personajes por orden albafético, podrán 
                        buscar por los nombres de cada uno de ellos y podrán seleccionar diferentes 
                        buscadores específicos de acuerdo a sus intereses y conocimientos.
                        </p>
                        <img className="imgProjectTwoo" src="https://i.ibb.co/jZ9L1Xf/guy-using-his-laptop-shoulder-view-23-2148288560.jpg" alt=""/>
                    </div>                   
                </div>

                <div id="containerLinksProjectTwo">
                    <div className="container">
                        <div className="content">
                            <a href="https://www.figma.com/proto/76yBVBhZPNfs3Tc2Cfh2RF/Untitled?node-id=173%3A1&viewport=133%2C59%2C0.07341291010379791&scaling=scale-down" target="blank">
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="Prototipo del proyecto" src="https://i.ibb.co/VqFK0XK/harryprototipo.png"/>
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">¡Visita prototipo <br/> guía muggle!</h3>
                            </div>
                            </a>
                        </div>
                    </div>

                    <div className="container">
                        <div className="content">
                            <a href="https://valeriaconstanzabc.github.io/SCL013-data-lovers/src/index.html" target="blank">
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="Demo del proyecto" src="https://i.ibb.co/DMctrMc/harrydemo.png"/>
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">¡Visita demo <br/> guía muggle!</h3>
                            </div>
                            </a>
                        </div>
                    </div>

                    <div className="container">
                        <div className="content">
                            <a href="https://github.com/valeriaconstanzabc/SCL013-data-lovers" target="blank">
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="Código del proyecto" src="https://i.ibb.co/pKzcdsP/harrycodigo.png"/>
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Código del <br/> proyecto</h3>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div id="containerHistoryUserProjectTwo">
                    <h2 className="textTwo">HISTORIAS DE USUARIO</h2>
                    <div className="containerProjectTwo">
                        <div>{<ModalOneProjectTwo />}</div>

                        <div className="containerImgProjectFourArrow3">
                            <img className="imgProjectTwoArrow3" src="https://i.ibb.co/8zNpQnH/eva-arrow-ios-forward-fill.png" alt=""/>
                        </div>

                        <div>{<ModalTwoProjectTwo />}</div>

                        <div className="containerImgProjectFourArrow3">
                            <img className="imgProjectTwoArrow3" src="https://i.ibb.co/8zNpQnH/eva-arrow-ios-forward-fill.png" alt=""/>
                        </div>

                        <div>{<ModalThreeProjectTwo />}</div>
                    </div>
                </div>

                <div id="containerToolsProjectTwo">
                    <h2>HERRAMIENTAS UTILIZADAS</h2>
                    <div className="toolsProjectTwo">
                        <div className="imgToolsHTML5ProjectTwo">
                            <div className="containerImgToolsProjectTwo">
                                <h2 className="textImgToolsProjectTwo">HTML5</h2>
                            </div>
                        </div>
                        <div className="imgToolsJSProjectTwo">
                            <div className="containerImgToolsProjectTwo">
                                <h2 className="textImgToolsProjectTwo">JavaScript</h2>
                            </div>
                        </div>
                        <div className="imgToolsCSSProjectTwo">
                            <div className="containerImgToolsProjectTwo">
                                <h2 className="textImgToolsProjectTwo">CSS</h2>
                            </div>
                        </div>
                        <div className="imgToolsFigmaProjectTwo">
                            <div className="containerImgToolsProjectTwo">
                                <h2 className="textImgToolsProjectTwo">Figma</h2>
                            </div>
                        </div>
                        <div className="imgToolsInvisionProjectTwo">
                            <div className="containerImgToolsProjectTwo">
                                <h2 className="textImgToolsProjectTwo">Invision</h2>
                            </div>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
    )
}

export default ProjectTwo
