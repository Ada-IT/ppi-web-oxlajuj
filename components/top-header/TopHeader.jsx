import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import topHeader from "./TopHeader.module.css";

const TopHeader = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  /*   const toggleTrueFalse = () => {
      setShowModal(handleShow);
    } */

  const ModalContent = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Estas a punto de donar</Modal.Title>
        </Modal.Header>
        <Modal.Body>Esta pagina te rediccionara a nuestra pagina de Paypal para que nos puedas ayudar a financiar nuestros proyectos y cursos. Muchas gracias por colaborar con la Fundación Oxlajuj No’j  </Modal.Body>
        <Modal.Footer>
          <button /* variant="secondary" */ onClick={handleClose} className={topHeader.carBtnCerrar}>
            Cerrar
          </button>
          <a href="https://www.paypal.com/ar/home"> <button variant="primary" onClick={handleClose} className={topHeader.carBtn}>
            Donar          </button></a>
        </Modal.Footer>
      </Modal>
    )
  }

  return (
    <div className={topHeader.topHeaderBar}>
      <div className='container'>
        <div className='row flex-wrap justify-content-center justify-content-lg-between align-items-lg-center'>
          <div className='col-12 col-lg-8 d-none d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0'>
            <div className={topHeader.headerBarEmail}>
              MAIL:
              <a href='#'>
                <span
                  className='__cf_email__'
                  data-cfemail='a9cac6c7ddc8cadde9c6dcdbcac1c8dbc0ddd087cac6c4'
                >
                  fundacionoxlajuj@gmail.com
                </span>
              </a>
            </div>
            <div className={topHeader.headerBarText}>
              <p>
                PHONE: <span>+24 3772 120 091 / +56452 4567</span>
              </p>
            </div>
          </div>
          <div className='col-12 col-lg-4 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center'>
            <div className={topHeader.donate}>
              <button onClick={handleShow} className={topHeader.carBtn}>
                DONAR      </button>
            </div>
          </div>
        </div>
      </div>
      {show ? <ModalContent /> : null}
    </div>
  );
};

export default TopHeader;
