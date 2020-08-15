import React from 'react';
import useModal from 'react-hooks-use-modal';
import '../Css/Modals.css'

//<----------------------------MODALES PROYECTO CUATRO--------------------------->
export const  ModalOneProjectFour = () => {
  const [Modal, open, close] = useModal('root', {
    preventScroll: true
  });
  return (
    <div>
        <button className="btnImgProjectFour3" onClick={open}>
            <img className="imgProjectFour3" src="https://i.ibb.co/z75nXXG/Group-1.png" alt=""/> 
        </button>
        <Modal>
            <div className="backgroundModal">
                <div className="containerTittleAndX">
                    <h3>Mesero/a debe poder tomar pedido de cliente</h3>
                    <button class="btnClose" onClick={close}>X</button>
                </div>
                <p>
                    Yo como mesero/a quiero tomar el pedido de un cliente para no 
                    depender de mi mala memoria, para saber cuánto cobrar, y enviarlo 
                    a la cocina para evitar errores y que se puedan ir preparando en 
                    orden.
                </p>
                <h4>Criterios de aceptación</h4>
                <p>
                    * Anotar nombre de cliente.<br/>
                    * Agregar productos al pedido.<br/>
                    * Eliminar productos.<br/>
                    * Ver resumen y el total de la compra.<br/>
                    * Enviar pedido a cocina (guardar en alguna base de datos).<br/>
                    * Se ve y funciona bien en una tablet
                </p>
            </div>
        </Modal>
    </div>
      
  );
};

export const ModalTwoProjectFour = () => {
    const [Modal, open, close] = useModal('root', {
      preventScroll: true
    });
    return (
      <div>
          <button className="btnImgProjectFour3" onClick={open}>
                <img className="imgProjectFour3" src="https://i.ibb.co/XtdxZzZ/Group-3.png" alt=""/>               
            </button>
          <Modal>
              <div className="backgroundModal">
                <div className="containerTittleAndX">
                    <h3>Jefe de cocina debe ver los pedidos</h3>
                    <button class="btnClose" onClick={close}>X</button>
                </div>
                <p>
                    Yo como jefe/a de cocina quiero ver los pedidos de los 
                    clientes en orden y marcar cuáles están listos para 
                    saber qué se debe cocinar y avisar a los/as meseros/as 
                    que un pedido está listo para servirlo a un cliente.
                </p>
                <h4>Criterios de aceptación</h4>
                <p>
                    * Ver los pedidos ordenados según se van haciendo.<br/>
                    * Marcar los pedidos que se han preparado y están listos para servirse.<br/>
                    * Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se marcó como completado.
                </p>
              </div>
          </Modal>
      </div>
        
    );
};

export const ModalThreeProjectFour = () => {
    const [Modal, open, close] = useModal('root', {
      preventScroll: true
    });
    return (
      <div>
            <button className="btnImgProjectFour3" onClick={open}>
                <img className="imgProjectFour3" src="https://i.ibb.co/qWYRgRT/Group-2.png" alt=""/>
            </button> 
          <Modal>
          <div className="backgroundModal">
                <div className="containerTittleAndX">
                    <h3>Mesero/a debe ver pedidos listos para servir</h3>
                    <button class="btnClose" onClick={close}>X</button>
                </div>
                <p>
                    Yo como mesero/a quiero ver los pedidos que están 
                    preparados para entregarlos rápidamente a los clientes 
                    que las hicieron.
                </p>
                <h4>Criterios de aceptación</h4>
                <p>
                    * Ver listado de pedido listos para servir.<br/>
                    * Marcar pedidos que han sido entregados.
                </p>
              </div>
          </Modal>
      </div>
        
    );
};



//<----------------------------MODALES PROYECTO UNO------------------------------>
export const  ModalOneProjectOne = () => {
    const [Modal, open, close] = useModal('root', {
      preventScroll: true
    });
    return (
      <div>
          <button className="btnImgProjectOne" onClick={open}>
              <img className="imgProjectOneUserHistory" src="https://i.ibb.co/7GVwRPP/2.png" alt=""/> 
          </button>
          <Modal>
              <div className="backgroundModal">
                  <div className="containerTittleAndX">
                    <h3>HISTORIA DE USUARIO 1</h3>
                    <button class="btnClose" onClick={close}>X</button>
                  </div>
                  <p>
                    Como vecin@ quiero una página en donde pueda comunicarme con 
                    las personas de mi barrio.
                  </p>
                  <h4>Criterios de aceptación</h4>
                  <p>
                      * El usuario podrá acceder a una página dirigida a la conectividad barrial.<br/>
                      * El usuario podrá ver información de qué trata la página (red social).<br/>
                      * La página podrá visualizarse desde cualquier dispositivo.
                  </p>
              </div>
          </Modal>
      </div>
        
    );
  };

  export const  ModalTwoProjectOne = () => {
    const [Modal, open, close] = useModal('root', {
      preventScroll: true
    });
    return (
      <div>
          <button className="btnImgProjectOne" onClick={open}>
              <img className="imgProjectOneUserHistory" src="https://i.ibb.co/fF7xmRQ/1.png" alt=""/> 
          </button>
          <Modal>
              <div className="backgroundModal">
                  <div className="containerTittleAndX">
                    <h3>HISTORIA DE USUARIO 2</h3>
                    <button class="btnClose" onClick={close}>X</button>
                  </div>
                  <p>
                    Como usuario quiero poder registrarme a la página.
                  </p>
                  <h4>Criterios de aceptación</h4>
                  <p>
                      * El usuario podrá acceder a la opción de registrarse.<br/>
                      * El usuario podrá registrarse con Google.<br/>
                      * El usuario podrá registrarse con Facebook.<br/>
                      * El usuario podrá registrarse en la página.<br/>
                      * El usuario recibirá verificación de su registro en su correo electrónico.
                  </p>
              </div>
          </Modal>
      </div>
        
    );
  };

  export const  ModalThreeProjectOne = () => {
    const [Modal, open, close] = useModal('root', {
      preventScroll: true
    });
    return (
      <div>
          <button className="btnImgProjectOne" onClick={open}>
              <img className="imgProjectOneUserHistory" src="https://i.ibb.co/rdxg9vF/3.png" alt=""/> 
          </button>
          <Modal>
              <div className="backgroundModal">
                  <div className="containerTittleAndX">
                    <h3>HISTORIA DE USUARIO 3</h3>
                    <button class="btnClose" onClick={close}>X</button>
                  </div>
                  <p>
                    Yo como usuario quiero Iniciar Sesión para ingresar a la página.
                  </p>
                  <h4>Criterios de aceptación</h4>
                  <p>
                      * El usuario podrá acceder al formulario para iniciar sesión.<br/>
                      * Podrá iniciar sesión con cuenta de Google.<br/>
                      * Podrá iniciar sesión con cuenta de Facebook.<br/>
                      * Una vez iniciada la sesión debe llevar al muro de la web.
                  </p>
              </div>
          </Modal>
      </div>
        
    );
  };

  export const  ModalFourProjectOne = () => {
    const [Modal, open, close] = useModal('root', {
      preventScroll: true
    });
    return (
      <div>
          <button className="btnImgProjectOne" onClick={open}>
              <img className="imgProjectOneUserHistory" src="https://i.ibb.co/sPKNQFN/Group-15.png" alt=""/> 
          </button>
          <Modal>
              <div className="backgroundModal">
                  <div className="containerTittleAndX">
                    <h3>HISTORIA DE USUARIO 4</h3>
                    <button class="btnClose" onClick={close}>X</button>
                  </div>
                  <p>
                    Como usuario quiero postear publicaciones para que mis vecinos las vean 
                    y le den like (comentar, guardar publicación, notificaciones).
                  </p>
                  <h4>Criterios de aceptación</h4>
                  <p>
                      * El usuario podrá acceder a sección en donde aparezca el muro de publicaciones.<br/>
                      * Las publicaciones se verán por fecha y hora de posteo.
                  </p>
              </div>
          </Modal>
      </div>
        
    );
  };