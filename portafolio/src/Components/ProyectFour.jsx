import React from 'react';
import '../Css/ProyectFour.css'

import { ModalOneProyectFour, ModalTwoProyectFour, ModalThreeProyectFour } from './ModalProyectFour';

const ProyectFour = () => {

    return (
        <div id="containerProyectFour">
            <div className="containerTittleProyectFour">
            <h5 className="tittleProyectFourr">BURGER-QUEEN</h5>
            <h3 className="pointTittleProyectFour">.</h3>
            </div>

            <div id="containerColorProyectFour">
                <div id="containerDescriptionProductProyect4">
                    <p id="tProduction">Tiempo de producción: 4 semanas</p>
                    <h2>DEFINICIÓN DE PRODUCTO</h2>

                    <div className="container1ProyectFour1">
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
                        <img className="imgProyectFour1" src="https://i.ibb.co/BLJj4d4/gKFHiM2.png" alt=""/>
                        </div>
                    </div>                   
                </div>

                <div id="containerLinksProyect4">
                    <a target="blank" href="https://burger-queen-2bad6.web.app/">
                        <button className="btnLinkProyect4">
                            <img className="imgLinkProyect4" src="https://i.ibb.co/zV5SjV3/Group-7.png" alt=""/>
                        </button>
                    </a>
                    <a target="blank" href="https://github.com/valeriaconstanzabc/SCL013-burger-queen">
                        <button className="btnGitHubProyect4">
                            <img className="imgGitHubProyect4" src="https://i.ibb.co/QddgN9p/Group-8.png" alt=""/>
                        </button>
                    </a>
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
                    <img className="imgProyectFour2" src="http://imgfz.com/i/NqGgDFi.jpeg" alt=""/>                   
                </div>

                <div id="containerHistoryUserProyect4">
                    <h2 className="text3">HISTORIAS DE USUARIO</h2>
                    <div className="container1ProyectFour3">
                        <div>{<ModalOneProyectFour />}</div>

                        <div className="containerImgProyectFourArrow3">
                            <img className="imgProyectFourArrow3" src="https://i.ibb.co/TkX1RRV/eva-arrow-ios-forward-fill.png" alt=""/>
                        </div>

                        <div>{<ModalTwoProyectFour />}</div>

                        <div className="containerImgProyectFourArrow3">
                            <img className="imgProyectFourArrow3" src="https://i.ibb.co/TkX1RRV/eva-arrow-ios-forward-fill.png" alt=""/>
                        </div>

                        <div>{<ModalThreeProyectFour />}</div>
                    </div>
                </div>

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
                </div>
            </div>            
        </div>
    )
}

export default ProyectFour
