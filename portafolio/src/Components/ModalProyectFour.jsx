import React from 'react';
import useModal from 'react-hooks-use-modal';
import '../Css/Modals.css'
 
export const  ModalOneProyectFour = () => {
  const [Modal, open, close] = useModal('root', {
    preventScroll: true
  });
  return (
    <div>
        <button className="btnImgProyectFour3" onClick={open}>
            <img className="imgProyectFour3" src="https://i.ibb.co/z75nXXG/Group-1.png" alt=""/> 
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

export const ModalTwoProyectFour = () => {
    const [Modal, open, close] = useModal('root', {
      preventScroll: true
    });
    return (
      <div>
          <button className="btnImgProyectFour3" onClick={open}>
                <img className="imgProyectFour3" src="https://i.ibb.co/XtdxZzZ/Group-3.png" alt=""/>               
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

export const ModalThreeProyectFour = () => {
    const [Modal, open, close] = useModal('root', {
      preventScroll: true
    });
    return (
      <div>
            <button className="btnImgProyectFour3" onClick={open}>
                <img className="imgProyectFour3" src="https://i.ibb.co/qWYRgRT/Group-2.png" alt=""/>
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
