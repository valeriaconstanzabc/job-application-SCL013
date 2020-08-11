import React from 'react';
import useModal from 'react-hooks-use-modal';
 
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
            <div>
                <h1>Probando</h1>
                <p>Holiiiiii</p>
                <button onClick={close}>CLOSE</button>
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
              <div>
                  <h1>Lo logré?</h1>
                  <p>Si sis si sis is isisi?</p>
                  <button onClick={close}>CLOSE</button>
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
              <div>
                  <h1>Logradooo</h1>
                  <p>Eh eh eh eh eh eh</p>
                  <button onClick={close}>CLOSE</button>
              </div>
          </Modal>
      </div>
        
    );
};
