import { Modal } from "react-bootstrap";
import style from "./Modal.module.css";

const ModalContent = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Estás a punto de donar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Esta página te redireccionará a nuestra página de Paypal para que nos
        puedas ayudar a financiar nuestros proyectos y cursos. Muchas gracias
        por colaborar con la Fundación Oxlajuj No’j.
      </Modal.Body>
      <Modal.Footer>
        <button
          /* variant="secondary" */ onClick={handleClose}
          className={style.carBtnCerrar}
        >
          Cerrar
        </button>
        <a href='https://www.paypal.com/paypalme/13noj'>
          {" "}
          <button
            variant='primary'
            onClick={handleClose}
            className={style.carBtn}
          >
            Donar{" "}
          </button>
        </a>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalContent;
