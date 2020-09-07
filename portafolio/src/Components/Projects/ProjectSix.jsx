import React from 'react';
import '../../Css/ProjectSix.css'

const ProjectSix = () => {

    return (
        <div id="containerProjectFive">
            <div className="containerTittleProjectFive">
            <h5 className="tittleProjectFivee">SIS</h5>
            <h3 className="pointTittleProjectFive">.</h3>
            </div>

            <div id="containerColorProjectFive">
                <div id="containerDescriptionProductProject5">
                    <p id="tProduction">Tiempo de producción: 24 horas</p>
                    <h2>DEFINICIÓN DE PRODUCTO</h2>

                    <div className="container1ProjectSix1">
                        <div className="containerTextSixAndImgSix">
                            <p className="text1ProjectSix">
                                Se nos presentó el desafío de crear una solución para cerrar la brecha de género existente en la salud,
                                disminuyendo diferentes situaciones a través de la educación y el empoderamiento de la paciente. Debido a
                                esto, decidimos enfocar las bases de nuestra app en la violencia Obstétrica.
                                <br/><br/>
                                Pero, ¿Qué es la violencia obstétrica? Es una forma específica de violencia contra las mujeres que constituye 
                                una violación a los derechos humanos. Se genera en el ámbito de la atención del embarazo, parto y post-parto 
                                en los servicios de salud públicos y privados, y consiste en cualquier acción u omisión por parte del personal 
                                salud que cause un daño físico y/o psicológico a la mujer.
                            </p>
                            <div id="containerImgProjectSix1">
                                <img className="imgProjectSix1" src="https://i.ibb.co/dKNm0Rt/sis.jpg" alt=""/>
                            </div>
                        </div>
                        <div>
                            <p className="text2ProjectSix">
                                Es aquí, en donde encontramos un gran nicho para crear la app SIS, herramienta para acompañar a las mujeres en su 
                                proceso de educación y empoderamiento sobre el tema en cuestión. Esta app, mediante la educación de cada usuaria,
                                te permite ir avanzando diferentes niveles de infomación para lograr desbloquear un botón de pánico que podrás usar
                                en caso de estar pasando por alguna situación de violancia obtétrica y que estés incapacitada de defender tus derechos. 
                                Esta app se asegura de darte las herramientas necesarias para informarte sobre tus deberes y derechos como mujer, al 
                                mismo tiempo que logra brindarte apoyo psicológico y judicial, en caso que necesites oprimir el botón de pánico.
                            </p>
                        </div>
                    </div>                   
                </div>

                <div id="containerLinksProject5">
                    <div className="container">
                        <div className="content">
                            <a href="https://www.figma.com/proto/XkT7NswDOUxDiJAlEXNafu/Hackaton-Copy?node-id=83%3A700&viewport=149%2C-169%2C0.3037109673023224&scaling=scale-down" target="blank">
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="Prototipo del proyecto" src="https://i.ibb.co/S66wqtX/sisprototipo.png"/>
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">¡Visita <br/> prototipo sis!</h3>
                            </div>
                            </a>
                        </div>
                    </div>

                    <div className="container">
                        <div className="content">
                            <a href="https://hackathon2020-6329e.firebaseapp.com/" target="blank">
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="Logo del proyecto" src="https://i.ibb.co/6Hm4y2b/sisDemo.png"/>
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">¡Visita <br/> demo Sis!</h3>
                            </div>
                            </a>
                        </div>
                    </div>

                    <div className="container">
                        <div className="content">
                            <a href="https://github.com/valeriaconstanzabc/Hackaton2020-Boton-de-panico" target="blank">
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="Código del proyecto" src="https://i.ibb.co/41Lr52q/siscodigo.png"/>
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Código del <br/> proyecto</h3>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div id="containerToolsProject5">
                    <h2>HERRAMIENTAS UTILIZADAS</h2>
                    <div className="toolsProjectFive">
                        <div className="imgToolsHTML5Project5">
                            <div className="containerImgToolsProject5">
                                <h2 className="textImgToolsProject5">HTML5</h2>
                            </div>
                        </div>
                        <div className="imgToolsJSProject5">
                            <div className="containerImgToolsProject5">
                                <h2 className="textImgToolsProject5">JavaScript</h2>
                            </div>
                        </div>
                        <div className="imgToolsCSSProject5">
                            <div className="containerImgToolsProject5">
                                <h2 className="textImgToolsProject5">CSS</h2>
                            </div>
                        </div>
                        <div className="imgToolsReactProject5">
                            <div className="containerImgToolsProject5">
                                <h2 className="textImgToolsProject5">React</h2>
                            </div>
                        </div>
                        <div className="imgToolsFigmaProject5">
                            <div className="containerImgToolsProject5">
                                <h2 className="textImgToolsProject5">Figma</h2>
                            </div>
                        </div>
                        
                    </div>                   
                </div>
            </div>            
        </div>
    )
}

export default ProjectSix
