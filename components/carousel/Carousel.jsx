import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import style from "./Carrousel.module.css";
import ModalContent from "../ModalContent/ModalContent";

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='w-100'>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='./images/1.jpg?text=First slide&bg=black'
          alt='First slide'
        />

        <Carousel.Caption className={style.carBtnCont}>
          <button onClick={handleShow} className={style.carBtn}>
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
          <button
            variant='primary'
            onClick={handleShow}
            className={style.carBtn}
          >
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
            DONAR
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      {show ? <ModalContent show={show} handleClose={handleClose} /> : null}
    </Carousel>
  );
};

export default CarouselComponent;
