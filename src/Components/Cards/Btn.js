import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Btn.css';
import {CounterContext} from '../../Context/CounterContext';
import React, { useState , useContext } from 'react';

const Btn = (props) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const {incrementarContador} = useContext(CounterContext)

  return (
    <>
      <button className="quickShop" onClick={handleShow}>
        Quick Shop
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Confirmar Compra </Modal.Title>
        </Modal.Header>
        <Modal.Body>  
          Desea agregar este producto a su carrito?
          {props.item.nombre}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick= { () => {
            const funcion1 = handleClose;
            const funcion2 = incrementarContador;
            
            funcion1();
            funcion2();
            }
          }
          >
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Btn