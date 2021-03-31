import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import style from "./ModalContent.module.css";


const Modal = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Estas a punto de donar</Modal.Title>
            </Modal.Header>
            <Modal.Body>Esta pagina te rediccionara a nuestra pagina de Paypal para que nos puedas ayudar a financiar nuestros proyectos y cursos. Muchas gracias por colaborar con la Fundación Oxlajuj No’j  </Modal.Body>
            <Modal.Footer>
                <button /* variant="secondary" */ onClick={handleClose} className={style.carBtnCerrar}>
                    Cerrar
          </button>
                <a href="https://www.paypal.com/ar/home"> <button variant="primary" onClick={handleClose} className={style.carBtn}>
                    Donar          </button></a>
            </Modal.Footer>
        </Modal>
    )
}

export default Modal;