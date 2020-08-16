import React from 'react';
import '../../Css/ProjectThree.css'


const ProjectThree = () => {

    return (
        <div id="containerProjectThree">
            <div className="containerTittleProjectThree">
            <h5 className="tittleProjectThree">GATERA HOTELERA</h5>
            <h3 className="pointTittleProjectThree">.</h3>
            </div>

            <div id="containerColorProjectThree">
                <div id="containerDescriptionProductProjectThree">
                    <p id="tProduction1">Tiempo de producción: 4 semanas</p>
                    <h2>DEFINICIÓN DE PRODUCTO</h2>

                    <div className="container1ProjectThree">
                        <img className="imgProjectThree" src="https://i.ibb.co/zxDbrgf/gatera-Hotelera.jpg" alt=""/>
                        <p className="textThree">
                            Este proyecto consiste en la creación de la web de un hostal de playa. 
                            En esta página podrás conocer un poco más sobre la historia e 
                            instalaciones del hostal y te permitirá realizar una reserva en las 
                            dependencias del él.
                            <br/><br/>
                            Al ser una web intuitiva (con botones grandes y llamativos que indican 
                            la "acción" a seguir), logra que el usuario pueda realizar su reserva 
                            y validar la tarjeta en la misma sin necesidad de recurrir a una página 
                            externa.
                        </p>
                    </div>                   
                </div>

                <div id="containerLinksProjectThree">
                    <div className="container">
                        <div className="content">
                            <a href="https://niamoyano91.github.io/SCL013-card-validation/src/index.html" target="blank">
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="Logo del proyecto" src="https://i.ibb.co/dKQpQVR/Group-30.png"/>
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">¡Visita <br/> La Gatera <br/> Hotelera!</h3>
                            </div>
                            </a>
                        </div>
                    </div>
                    
                    <div className="container">
                        <div className="content">
                            <a href="https://github.com/valeriaconstanzabc/SCL013-card-validation/tree/master/src" target="blank">
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="Código del proyecto" src="https://i.ibb.co/rp5knCG/Group-28.png"/>
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Código del <br/> proyecto</h3>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div id="containerToolsProjectThree">
                    <h2>HERRAMIENTAS UTILIZADAS</h2>
                    <div className="toolsProjectThree">
                        <div className="imgToolsHTML5ProjectThree">
                            <div className="containerImgToolsProjectThree">
                                <h2 className="textImgToolsProjectThree">HTML5</h2>
                            </div>
                        </div>
                        <div className="imgToolsJSProjectThree">
                            <div className="containerImgToolsProjectThree">
                                <h2 className="textImgToolsProjectThree">JavaScript</h2>
                            </div>
                        </div>
                        <div className="imgToolsCSSProjectThree">
                            <div className="containerImgToolsProjectThree">
                                <h2 className="textImgToolsProjectThree">CSS</h2>
                            </div>
                        </div>
                        <div className="imgToolsFigmaProjectThree">
                            <div className="containerImgToolsProjectThree">
                                <h2 className="textImgToolsProjectThree">Figma</h2>
                            </div>
                        </div>
                        <div className="imgToolsInvisionProjectThree">
                            <div className="containerImgToolsProjectThree">
                                <h2 className="textImgToolsProjectThree">Invision</h2>
                            </div>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
    )
}

export default ProjectThree
