import React from 'react';
import '../Css/ProjectFour.css'

import { ModalOneProjectFour, ModalTwoProjectFour, ModalThreeProjectFour } from './Modals';

const ProjectFour = () => {

    return (
        <div id="containerProjectFour">
            <div className="containerTittleProjectFour">
            <h5 className="tittleProjectFourr">BURGER-QUEEN</h5>
            <h3 className="pointTittleProjectFour">.</h3>
            </div>

            <div id="containerColorProjectFour">
                <div id="containerDescriptionProductProject4">
                    <p id="tProduction">Tiempo de producción: 4 semanas</p>
                    <h2>DEFINICIÓN DE PRODUCTO</h2>

                    <div className="container1ProjectFour1">
                        <p className="text1">
                        BurgerQueen es un pequeño restaurante de hamburguesas estilo <strong>vintage. </strong> 
                        Este restaurante está creciendo, por lo que fue necesario realizar una 
                        interfaz en la que se puedan tomar pedidos usando una <strong>tablet. </strong> Estos 
                        pedidos posteriormente podrán ser enviados a la cocina, permitiendo 
                        que la orden sea preparada eficientemente.
                        <br/>
                        Esta aplicación posee dos vistas, las cuales se sincronizan en tiempo 
                        real. La primera vista corresponde al mesero, el cual podrá interactuar 
                        con la app pudiendo ingresar su nombre, la mesa 
                        a la cual se está atendiendo y el nombre del cliente. Posteriormente 
                        será redirigido a una nueva orden en donde se irán acumulando los 
                        productos requeridos en la boleta. 
                        Finalmente, la boleta se despachará a la cocina con el botón <strong>"enviar"</strong>, 
                        y el mesero podrá ver su estado <strong>(Listo, o entregado).</strong> 
                        <br/>
                        <br/>
                        La segunda vista corresponde a la del cocinero o chef. Sin necesidad de 
                        ingresar un usuario, el chef podrá ingresar directamente al apartado de 
                        cocina, en donde podrá visualizar todas las ordenes pendientes, pudiendo 
                        marcarlas como <strong>"listas"</strong> (las ordenes que ya han sido realizadas).
                        </p>
                        <div>
                        <img className="imgProjectFour1" src="https://i.ibb.co/BLJj4d4/gKFHiM2.png" alt=""/>
                        </div>
                    </div>                   
                </div>

                <div id="containerLinksProject4">
                    <div className="container">
                        <div className="content">
                            <a href="https://burger-queen-2bad6.web.app/" target="blank">
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="Logo del proyecto" src="https://i.ibb.co/zV5SjV3/Group-7.png"/>
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
                            <img className="content-image" alt="Código del proyecto" src="https://i.ibb.co/QddgN9p/Group-8.png"/>
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Código del <br/> proyecto</h3>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div id="containerUserDefinition">
                    <h2>DEFINICIÓN DE USUARIO</h2>
                    <p>
                        Para definir a nuestros usuarios, fue necesario tomar en 
                        cuenta la identidad de BurgerQueen y de sus propios 
                        trabajadores. Principalmente nos centramos en meseros y 
                        cocineros a los que el tiempo los apremia y que necesitan 
                        simplificar y acelerar lo máximo posible sus ordenes. Es por 
                        esto que nuestro diseño se basó principalmente y sus 
                        necesidades, creando una app simple, intuitiva, con botones 
                        grandes y vistosos que facilitara toda interacción que se 
                        realice en ella.
                    </p>
                    <img className="imgProjectFour2" src="http://imgfz.com/i/NqGgDFi.jpeg" alt=""/>                   
                </div>

                <div id="containerHistoryUserProject4">
                    <h2 className="text3">HISTORIAS DE USUARIO</h2>
                    <div className="container1ProjectFour3">
                        <div>{<ModalOneProjectFour />}</div>

                        <div className="containerImgProjectFourArrow3">
                            <img className="imgProjectFourArrow3" src="https://i.ibb.co/TkX1RRV/eva-arrow-ios-forward-fill.png" alt=""/>
                        </div>

                        <div>{<ModalTwoProjectFour />}</div>

                        <div className="containerImgProjectFourArrow3">
                            <img className="imgProjectFourArrow3" src="https://i.ibb.co/TkX1RRV/eva-arrow-ios-forward-fill.png" alt=""/>
                        </div>

                        <div>{<ModalThreeProjectFour />}</div>
                    </div>
                </div>

                <div id="containerToolsProject4">
                    <h2>HERRAMIENTAS UTILIZADAS</h2>
                    <div className="toolsProjectFour">
                        <div className="imgToolsHTML5Project4">
                            <div className="containerImgToolsProject4">
                                <h2 className="textImgToolsProject4">HTML5</h2>
                            </div>
                        </div>
                        <div className="imgToolsJSProject4">
                            <div className="containerImgToolsProject4">
                                <h2 className="textImgToolsProject4">JavaScript</h2>
                            </div>
                        </div>
                        <div className="imgToolsCSSProject4">
                            <div className="containerImgToolsProject4">
                                <h2 className="textImgToolsProject4">CSS</h2>
                            </div>
                        </div>
                        <div className="imgToolsReactProject4">
                            <div className="containerImgToolsProject4">
                                <h2 className="textImgToolsProject4">React</h2>
                            </div>
                        </div>
                        <div className="imgToolsFigmaProject4">
                            <div className="containerImgToolsProject4">
                                <h2 className="textImgToolsProject4">Figma</h2>
                            </div>
                        </div>
                        <div className="imgToolsInvisionProject4">
                            <div className="containerImgToolsProject4">
                                <h2 className="textImgToolsProject4">Invision</h2>
                            </div>
                        </div>
                        
                    </div>                   
                </div>
            </div>            
        </div>
    )
}

export default ProjectFour
