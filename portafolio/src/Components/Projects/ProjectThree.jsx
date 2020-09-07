import React from 'react';
import '../../Css/ProjectThree.css'


const ProjectThree = () => {

    return (
        <div id="containerProjectThree">
            <div className="containerTittleProjectThree">
                <h5 className="tittleProjectThree">MD-LINK</h5>
                <h3 className="pointTittleProjectThree">.</h3>
            </div>

            <div id="containerColorProjectThree">
                <div id="containerDescriptionProductProjectThree">
                    <p id="tProduction1">Tiempo de producción: 3 semanas</p>
                    <h2>DEFINICIÓN DE PRODUCTO</h2>

                    <div className="container1ProjectThree">
                        <img className="imgProjectThree" src="https://i.ibb.co/Yyr0fxT/jk.jpg" alt=""/>
                        <p className="textThree">
                            Markdown es muy utilizado en plataformas como GitHub, foros, blogs como 
                            también para crear documentación y es muy común encontrar varios archivos 
                            en ese formato en cualquier tipo de repositorio.
                            <br/>
                            Estos archivos Markdown normalmente contienen links (vínculos/ligas) que 
                            muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor 
                            de la información que se quiere compartir.
                            <br/>
                            Dentro de una comunidad, nos han propuesto crear una herramienta usando Node.js, 
                            que permite al usuario recorrer un directorio, filtrar los archivos en formato 
                            Markdown y extraer los links que contengan para verificar su estado: sin conexión, 
                            útiles o rotos y dar algunas estadísticas que se imprimirán en consola como la 
                            cantidad de links, el estado de los links y los links únicos.
                        </p>
                    </div>                   
                </div>

                <div id="containerLinksProjectThree">                    
                    <div className="container">
                        <div className="content">
                            <a href="https://github.com/valeriaconstanzabc/SCL013-md-links" target="blank">
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="Código del proyecto" src="https://i.ibb.co/ZgSkZ72/mdlinkcodigo.png"/>
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
                        <div className="imgToolsJSProjectThree">
                            <div className="containerImgToolsProjectThree">
                                <h2 className="textImgToolsProjectThree">JavaScript</h2>
                            </div>
                        </div>
                        <div className="imgToolsNodeJSProjectThree">
                            <div className="containerImgToolsProjectThree">
                                <h2 className="textImgToolsProjectThree">NodeJS</h2>
                            </div>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
    )
}

export default ProjectThree
