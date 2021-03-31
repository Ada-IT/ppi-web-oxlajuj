import React, { useState } from "react";
import { Carousel, Modal, Button } from "react-bootstrap";
import style from "./Carrousel.module.css";
const CarouselComponent = () => {
  const [index, setIndex] = useState(0);
  /*   const [showModal, setShowModal] = useState(false); */

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
          <button /* variant="secondary" */ onClick={handleClose} className={style.carBtnCerrar}>
            Cerrar
          </button>
          <a href="https://www.paypal.com/ar/home"> <Button variant="primary" onClick={handleClose} className={style.carBtn}>
            Donar          </Button></a>
        </Modal.Footer>
      </Modal>
    )
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='w-100'>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='./images/1.jpg?text=First slide&bg=black'
          alt='First slide'
        />

        <Carousel.Caption className={style.carBtnCont}>
          {/* <a className={style.carBtn} href="https://www.paypal.com/ar/webapps/mpp/home">DONAR</a> */}
          <button /* variant="primary" */ onClick={handleShow} className={style.carBtn}>
            DONAR
      </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='./images/2.jpg?text=First slide&bg=black'
          alt='Second slide'
        />

        <Carousel.Caption className={style.carBtnCont}>
          {/*           <a className={style.carBtn} href="https://www.paypal.com/ar/webapps/mpp/home">DONAR</a>
 */}
          <button variant="primary" onClick={handleShow} className={style.carBtn}>
            DONAR
      </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='./images/3.jpg?text=First slide&bg=black'
          alt='Third slide'
        />

        <Carousel.Caption className={style.carBtnCont}>
          {/*   <a className={style.carBtn} href="https://www.paypal.com/ar/webapps/mpp/home">DONAR</a> */}
          <button onClick={handleShow} className={style.carBtn}>
            DONAR      </button>
        </Carousel.Caption>
      </Carousel.Item>
      {show ? <ModalContent /> : null}
    </Carousel>

  );
};

export default CarouselComponent;
