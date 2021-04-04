/* import React, { useState } from "react"; */
import { Modal } from "react-bootstrap";
import style from "./Modal.module.css";


const ModalContent = ({ show, handleClose }) => {

    /*     const handleClose = () => setShow(false);
     */

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

export default ModalContent;