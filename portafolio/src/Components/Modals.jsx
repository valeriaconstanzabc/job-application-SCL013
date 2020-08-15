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



  //<----------------------------MODALES PROYECTO DOS------------------------------>
export const  ModalOneProjectTwo = () => {
  const [Modal, open, close] = useModal('root', {
    preventScroll: true
  });
  return (
    <div>
        <button className="btnImgProjectTwo" onClick={open}>
            <img className="imgProjectTwoUserHistory" src="https://i.ibb.co/tMMH2sX/Group-26.png" alt=""/> 
        </button>
        <Modal>
            <div className="backgroundModal">
                <div className="containerTittleAndX">
                    <h3>HISTORIA DE USUARIO 1</h3>
                    <button class="btnClose" onClick={close}>X</button>
                </div>
                <p>
                  Persona que ha visto 1 o 2 películas de Harry Potter. No se sabe todos 
                  los nombres de los personajes pero le interesa esta temática. Al entrar 
                  a la página, esta tendrá una breve explicación de lo que trata la página 
                  y lo que podrás hacer en ella (para poner a los usuarios en contexto). 
                  También estará presente un botón que permitirá entrar a la página principal.
                  <br/><b></b>
                  Una vez en ella, tomando en cuenta que el usuario conoce poco sobre los 
                  personajes de la película, se desplegaran automáticamente la información de 
                  todos ellos y se podrán ordenar de la A-Z y de la Z-A.
                </p>
                <p>
                  * Yo como conocedor casual de Harry potter. <br/>
                  * Quiero que al entrar a la página no me pida muchos datos. <br/>
                  * Para conocer a todos los personajes de la película
                </p>
            </div>
        </Modal>
    </div>
      
  );
};

export const ModalTwoProjectTwo = () => {
    const [Modal, open, close] = useModal('root', {
      preventScroll: true
    });
    return (
      <div>
          <button className="btnImgProjectTwo" onClick={open}>
                <img className="imgProjectTwoUserHistory" src="https://i.ibb.co/j6zDdmb/Group-27.png" alt=""/>               
            </button>
          <Modal>
              <div className="backgroundModal">
                <div className="containerTittleAndX">
                    <h3>HISTORIA DE USUARIO 2</h3>
                    <button class="btnClose" onClick={close}>X</button>
                </div>
                <p>
                  Persona que ha visto toda la saga de Harry Potter y conoce las historias 
                  y personajes pero no en profundidad. Al entrar en la página se entusiasmará 
                  por el recibimiento de esta, e intuitivamente hará click en el botón para 
                  entrar a la página principal. En ella se encontrará con muchos personajes 
                  de la película y podrá buscar por los nombres de cada uno para indagar más 
                  sobre sus personajes.
                </p>
                <p>
                  * Yo como conocedor aficionado de Harry potter. <br/>
                  * Quiero que al entrar a la página, pueda buscar por los nombres que me sé. <br/>
                  * Para conocer en mayor profundidad a cada uno de ellos.
                </p>
              </div>
          </Modal>
      </div>
        
    );
};

export const ModalThreeProjectTwo = () => {
    const [Modal, open, close] = useModal('root', {
      preventScroll: true
    });
    return (
      <div>
            <button className="btnImgProjectTwo" onClick={open}>
                <img className="imgProjectTwoUserHistory" src="https://i.ibb.co/M5JqwPF/Group-25.png" alt=""/>
            </button> 
          <Modal>
          <div className="backgroundModal">
                <div className="containerTittleAndX">
                    <h3>HISTORIA DE USUARIO 3</h3>
                    <button class="btnClose" onClick={close}>X</button>
                </div>
                <p>
                  Persona que ha visto y leído muchas veces la saga de Harry Potter. Ha visto 
                  las películas complementarias y sabe cada una de las historias en detalle de 
                  sus personajes favoritos.
                  <br/>
                  Al entrar a la página se entusiasmará por el recibimiento de esta, e 
                  intuitivamente hará click en el botón para entrar en la página principal. 
                  Encontrará muchos de los personajes de la película pero al estar más interiorizada 
                  en cada uno de ellos, querrá buscar por los selectores más específicos que contiene 
                  la página como la casa, el linaje, el rol, etc.
                </p>
                <p>
                  * Yo como fanático de Harry potter. <br/>
                  * Quiero poder buscar personajes por selectores específicos. <br/>
                  * Para leer más en profundidad solo los que me importan.
                </p>
              </div>
          </Modal>
      </div>
        
    );
};