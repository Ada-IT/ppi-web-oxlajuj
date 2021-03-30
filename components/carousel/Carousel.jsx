import React, { useState } from "react";
import { Carousel, Modal, Button } from "react-bootstrap";
import style from "./Carrousel.module.css";
const CarouselComponent = () => {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
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
          <Button variant="primary" onClick={handleShow}>
            DONAR
      </Button>
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
          <Button variant="primary" onClick={handleShow}>
            DONAR
      </Button>
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
          <Button variant="primary" onClick={handleShow}>
            DONAR      </Button>
        </Carousel.Caption>
      </Carousel.Item>
      {show ? <ModalContent /> : null}
    </Carousel>

  );
};

export default CarouselComponent;
