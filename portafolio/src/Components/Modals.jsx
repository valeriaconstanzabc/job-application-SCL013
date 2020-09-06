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
                <ul>
                  <li>Anotar nombre de cliente.</li>
                  <li>Agregar productos al pedido.</li>
                  <li>Eliminar productos.</li>
                  <li>Ver resumen y el total de la compra.</li>
                  <li>Enviar pedido a cocina (guardar en alguna base de datos).</li>
                  <li>Se ve y funciona bien en una tablet.</li>
                </ul>
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
                <ul>
                  <li>Ver los pedidos ordenados según se van haciendo.</li>
                  <li>Marcar los pedidos que se han preparado y están listos para servirse.</li>
                  <li>Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se marcó como completado.</li>
                </ul>
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
                <ul>
                  <li>Ver listado de pedido listos para servir.</li>
                  <li>Marcar pedidos que han sido entregados.</li>
                </ul>
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
                  <ul>
                    <li>El usuario podrá acceder a una página dirigida a la conectividad barrial.</li>
                    <li>El usuario podrá ver información de qué trata la página (red social).</li>
                    <li>La página podrá visualizarse desde cualquier dispositivo.</li>
                  </ul>
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
                  <ul>
                    <li>El usuario podrá acceder a la opción de registrarse.</li>
                    <li>El usuario podrá registrarse con Google.</li>
                    <li>El usuario podrá registrarse con Facebook.</li>
                    <li>El usuario podrá registrarse en la página.</li>
                    <li>El usuario recibirá verificación de su registro en su correo electrónico.</li>
                  </ul>
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
                  <ul>
                    <li>El usuario podrá acceder al formulario para iniciar sesión.</li>
                    <li>Podrá iniciar sesión con cuenta de Google.</li>
                    <li>Podrá iniciar sesión con cuenta de Facebook.</li>
                    <li>Una vez iniciada la sesión debe llevar al muro de la web.</li>
                  </ul>
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
                  <ul>
                    <li>El usuario podrá acceder a sección en donde aparezca el muro de publicaciones.</li>
                    <li>Las publicaciones se verán por fecha y hora de posteo.</li>
                  </ul>
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
                <ul>
                  <li>Yo como conocedor casual de Harry potter.</li>
                  <li>Quiero que al entrar a la página no me pida muchos datos.</li>
                  <li>Para conocer a todos los personajes de la película</li>
                </ul>
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
                <ul>
                  <li>Yo como conocedor aficionado de Harry potter.</li>
                  <li>Quiero que al entrar a la página, pueda buscar por los nombres que me sé.</li>
                  <li>Para conocer en mayor profundidad a cada uno de ellos.</li>
                </ul>
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
                <ul>
                  <li>Yo como fanático de Harry potter.</li>
                  <li>Quiero poder buscar personajes por selectores específicos.</li>
                  <li>Para leer más en profundidad solo los que me importan.</li>
                </ul>
              </div>
          </Modal>
      </div>
        
    );
};

//<----------------------------MODALES PROYECTO CINCO---------------------------->
export const  ModalOneProjectFive = () => {
  const [Modal, open, close] = useModal('root', {
    preventScroll: true
  });
  return (
    <div className="containerBtnsCodigo">
        <button className="btnImgProjectFive3" onClick={open}>
            <img className="imgProjectFive3" src="https://i.ibb.co/FWKrxBh/Group-32w.png" alt=""/> 
        </button>
        <Modal>
            <div className="backgroundModal">
                <div className="containerTittleAndX">
                    <h3>INCLUSIÓN</h3>
                    <button class="btnClose" onClick={close}>X</button>
                </div>
                <p>
                    En el desarrollo de nuestra web informativa y a quienes va dirigido, tomamos como pilar de 
                  inclusión principalmente a adultos/as que tengan cierto trastorno del desarrollo de la lectura, 
                  analfabetismo o alexia, tomando en cuenta que esta problemática no es considerada a grandes 
                  rasgos dentro de la tecnología, convirtiéndose en una brecha importante que debe ser atacada. 
                  Y como segundo usuario objetivo, son niños y niñas que se encuentran en etapa de aprendizaje 
                  y desarrollo de su capacidad lectora, es decir, niñ@s en etapa escolar.
                  <br/><br/>
                  Esto fue representado mediante un botón de audio atractico, con un íconos representativos,
                  el cual relata todo texto informativo que se encuentra en la vista actual. 
                </p>
                <img className="imgProjectFiveInclusion" src="https://i.ibb.co/Z8jdrvC/Frame-1.png" alt="inclusión auditiva"/>
            </div>
        </Modal>
    </div>
      
  );
};

export const ModalTwoProjectFive = () => {
    const [Modal, open, close] = useModal('root', {
      preventScroll: true
    });
    return (
      <div className="containerBtnsCodigo">
          <button className="btnImgProjectFive3" onClick={open}>
                <img className="imgProjectFive3" src="https://i.ibb.co/HtpCPRh/Group-33w.png" alt=""/>               
            </button>
          <Modal>
              <div className="backgroundModal">
                <div className="containerTittleAndX">
                    <h3>GAMIFICACIÓN</h3>
                    <button class="btnClose" onClick={close}>X</button>
                </div>
                <p>
                    La gamificación fue integrada mediante un juego de memoria. El desafío del juego es encontrar 
                  las parejas que se correspondan, mientras que el detractor serán las vidas, las cuales 
                  inicialmente parten en 6, e irán disminuyendo en relación a los intentos fallidos. 
                  <br/><br/>
                  Este juego, cuenta también con un indicador de logro, el cual incrementa a medida que el niñ@ o
                  jugador suba de nivel, desarrollando así su competencia y ejercitando su memoria. 
                  <br/><br/>
                  Por último, al ganar el juego y subir de nivel encontrarán su recompensa, que son diferentes premios, 
                  como dibujos para colorear de los personajes de la serie emblemática de hootie-hoo y variados cuentos 
                  sobre el covid y todo lo relacionado a la situación.
                </p>
                <img className="imgProjectFiveGamificacion" src="https://i.ibb.co/4ZdyVbw/memoria.jpg" alt="gamificación"/>
              </div>
          </Modal>
      </div>
        
    );
};