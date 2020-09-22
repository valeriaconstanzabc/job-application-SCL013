import React from 'react';
import '../../Css/ProjectOne.css'

import { ModalOneProjectOne, ModalTwoProjectOne, ModalThreeProjectOne, ModalFourProjectOne } from '../Modals';

const ProjectOne = () => {

    return (
        <div id="containerProjectOne">
            <div className="containerTittleProjectOne">
                <h5 className="tittleProjectOne">LOFCHE</h5>
                <h3 className="pointTittleProjectOne">.</h3>
            </div>

            <div id="containerColorProjectOne">
                <div id="containerDescriptionProductProjectOne">
                    <p id="tProduction1">Tiempo de producción: 4 semanas</p>
                    <h2>DEFINICIÓN DE PRODUCTO</h2>

                    <div className="container1ProjectOne">
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
                        <img className="imgProjectOne1" src="https://i.ibb.co/JFHzFr5/Lofche.jpg" alt=""/>
                        <img className="imgProjectOne2" src="https://i.ibb.co/F81fqHh/Sin-t-tulo-2.jpg" alt=""/>
                        </div>
                    </div>                   
                </div>

                <div id="containerLinksProject4">
                    <div className="container">
                        <div className="content">
                            <a href="https://www.figma.com/proto/eaSR40o4BIC9QTmQFwP3U7/Lofche?node-id=104%3A41&viewport=207%2C410%2C0.10052621364593506&scaling=scale-down" target="blank">
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="Logo del proyecto" src="https://i.ibb.co/g79Qcwb/lofchefigma.png"/>
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">¡Visita <br/> prototipo Lofche!</h3>
                            </div>
                            </a>
                        </div>
                    </div>

                    <div className="container">
                        <div className="content">
                            <a href="https://comunidadlofche.web.app/" target="blank">
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="Logo del proyecto" src="https://i.ibb.co/ryHgVD0/lofchedemo.png"/>
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">¡Visita <br/> demo Lofche!</h3>
                            </div>
                            </a>
                        </div>
                    </div>

                    <div className="container">
                        <div className="content">
                            <a href="https://github.com/valeriaconstanzabc/Social-Network-Framework" target="blank">
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="Código del proyecto" src="https://i.ibb.co/982Dmgg/lofchecodigo.png"/>
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Código del <br/> proyecto</h3>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div id="containerHistoryUserProjectOne">
                    <h2 className="textOne">HISTORIAS DE USUARIO</h2>
                    <div className="containerHistoryProjectOne">
                        <div>{<ModalOneProjectOne />}</div>

                        <div className="containerImgProjectFourArrow3">
                            <img className="imgProjectOneArrow3" src="https://i.ibb.co/8zNpQnH/eva-arrow-ios-forward-fill.png" alt=""/>
                        </div>

                        <div>{<ModalTwoProjectOne />}</div>

                        <div className="containerImgProjectFourArrow3">
                            <img className="imgProjectOneArrow3" src="https://i.ibb.co/8zNpQnH/eva-arrow-ios-forward-fill.png" alt=""/>
                        </div>

                        <div>{<ModalThreeProjectOne />}</div>

                        <div className="containerImgProjectFourArrow3">
                            <img className="imgProjectOneArrow3" src="https://i.ibb.co/8zNpQnH/eva-arrow-ios-forward-fill.png" alt=""/>
                        </div>

                        <div>{<ModalFourProjectOne />}</div>
                    </div>
                </div>
             

                <div id="containerToolsProjectOne">
                    <h2>HERRAMIENTAS UTILIZADAS</h2>
                    <div className="toolsProjectOne">
                        <div className="imgToolsHTML5ProjectOne">
                            <div className="containerImgToolsProjectOne">
                                <h2 className="textImgToolsProjectOne">HTML5</h2>
                            </div>
                        </div>
                        <div className="imgToolsJSProjectOne">
                            <div className="containerImgToolsProjectOne">
                                <h2 className="textImgToolsProjectOne">JavaScript</h2>
                            </div>
                        </div>
                        <div className="imgToolsReactProjectOne">
                            <div className="containerImgToolsProjectOne">
                                <h2 className="textImgToolsProjectOne">React</h2>
                            </div>
                        </div>
                        <div className="imgToolsCSSProjectOne">
                            <div className="containerImgToolsProjectOne">
                                <h2 className="textImgToolsProjectOne">CSS</h2>
                            </div>
                        </div>
                        <div className="imgToolsSASSProjectOne">
                            <div className="containerImgToolsProjectOne">
                                <h2 className="textImgToolsProjectOne">SASS</h2>
                            </div>
                        </div>
                        <div className="imgToolsFirebaseProjectOne">
                            <div className="containerImgToolsProjectOne">
                                <h2 className="textImgToolsProjectOne">Firebase</h2>
                            </div>
                        </div>
                        <div className="imgToolsFigmaProjectOne">
                            <div className="containerImgToolsProjectOne">
                                <h2 className="textImgToolsProjectOne">Figma</h2>
                            </div>
                        </div>
                        <div className="imgToolsInvisionProjectOne">
                            <div className="containerImgToolsProjectOne">
                                <h2 className="textImgToolsProjectOne">Invision</h2>
                            </div>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
    )
}

export default ProjectOne
