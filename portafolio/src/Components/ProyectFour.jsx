import React from 'react'
import '../Css/ProyectFour.css'

const ProyectFour = () => {
    return (
        <div id="containerProyectFour">
            <div className="containerTittleProyectFour">
                <h5 className="tittleProyectFourr">BURGER-QUEEN</h5>
                <h3 className="pointTittleProyectFour">.</h3>
            </div>

            <div id="containerColorAboutMeProyectFour">
                <div id="descriptionAboutMeProyectFour1">
                    <h2>DEFINICIÓN DE PRODUCTO</h2>
                    <p>BurgerQueen es un pequeño restaurante de hamburguesas estilo <strong>vintage. </strong> 
                            Este restaurante está creciendo, por lo que fue necesario realizar una 
                            interfaz en la que se puedan tomar pedidos usando una <strong>tablet. </strong> Estos 
                            pedidos posteriormente podrán ser enviados a la cocina, permitiendo 
                            que la orden sea preparada eficientemente.
                    </p>

                    <div className="container1ProyectFour1">
                        <p className="text1">
                            <br/>
                            Esta aplicación posee dos vistas, las cuales se sincronizan en tiempo 
                            real. La primera vista corresponde al mesero. Este podrá interactuar 
                            con la app pudiendo ingresar en primera instancia su nombre, la mesa 
                            a la cual se está atendiendo y el nombre del cliente. Posteriormente 
                            será redirigido a una nueva orden en donde podrá ingresar los productos 
                            requeridos, los cuales se irán sumando y acumulando en la boleta. 
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

                <div id="descriptionAboutMeProyectFour2">
                    <h2>DEFINICIÓN DE USUARIO</h2>

                    <div className="container1ProyectFour2">
                        <div>
                            <img className="imgProyectFour2" src="http://imgfz.com/i/NqGgDFi.jpeg" alt=""/>
                        </div>

                        <p className="text2">
                            <br/>
                            Para definir a nuestros usuarios, fue necesario tomar en cuenta la 
                            identidad de BurgerQueen y de sus propios trabajadores.
                            <br/>
                            <br/>
                            Principalmente 
                            nos centramos en meseros y cocineros a los que el tiempo los apremia 
                            y que necesitan simplificar y acelerar lo máximo posible sus ordenes. 
                            <br/>
                            <br/>
                            Es por esto que nuestro diseño se basó principalmente y sus necesidades, 
                            creando una app simple, intuitiva, con botones grandes y vistosos que 
                            facilitara toda interacción que se realice en ella.
                        </p>
                    </div>                   
                </div>

                <div id="descriptionAboutMeProyectFour3">
                    <h2>HISTORIAS DE USUARIO</h2>

                    <div className="container1ProyectFour3">
                        <div>
                            <button>
                                <img className="imgProyectFour3" src="https://i.ibb.co/z75nXXG/Group-1.png" alt=""/>
                            </button>
                        </div>

                        <div>
                            <img className="imgProyectFourArrow3" src="https://i.ibb.co/TkX1RRV/eva-arrow-ios-forward-fill.png" alt=""/>
                        </div>

                        <div>
                            <button>
                                <img className="imgProyectFour3" src="https://i.ibb.co/z75nXXG/Group-1.png" alt=""/>
                            </button>                        
                        </div>

                        <div>
                            <img className="imgProyectFourArrow3" src="https://i.ibb.co/TkX1RRV/eva-arrow-ios-forward-fill.png" alt=""/>
                        </div>

                        <div>
                            <button>
                                <img className="imgProyectFour3" src="https://i.ibb.co/qWYRgRT/Group-2.png" alt=""/>
                            </button>                        
                        </div>
                    </div>                   
                </div>
            </div>            
        </div>
    )
}

export default ProyectFour
