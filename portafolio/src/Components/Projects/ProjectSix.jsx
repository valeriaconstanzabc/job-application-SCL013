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

                    <div className="container1ProjectFive1">
                        <p className="text1ProjectFive">
                            La empresa Hootie-Hoo, un equipo lleno de entusiasmo que busca desarrollar 
                        el potencial de las personas y empresas entregando soluciones tecnológicas creativas, 
                        nos entregó la misión de crear una web informativa para niñ@s y cuidadores, ya que
                        debido a la contingencia sanitaria a nivel mundial, la desinformación y la falta de 
                        herramienta para atacar esta situación se ha convertido en una problemática creciente.
                        Esta web busca dar solución desarrolando una plataforma web informativa, dirigida a 
                        adultos y cuidadores, y a niñ@s que se encuentran en el rango etario de entre 4 a 7 
                        años aproximadamente.
                        <br/><br/>
                        Dentro de esta plataforma los cuidadores podrán encontrar herramientas educativas 
                        y a su vez lúdicas que les permita adquirir más conocimientos sobre lo que está sucediendo 
                        y qué cuidados pueden aplicar, mientras que l@s niñ@s en acompañamiento de sus 
                        tutores tendrán acceso a videos educativos y recreativos, así 
                        como un juego que incentiva el desarrollo de su memoria.
                        </p>
                        <div id="containerImgProjectFive1">
                            <img className="imgProjectFive1" src="https://i.ibb.co/dKNm0Rt/sis.jpg" alt=""/>
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
