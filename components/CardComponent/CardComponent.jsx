import React from "react";
import style from "./Card.module.css";
import { Container, Card, Image } from "react-bootstrap";
import Link from "next/link";

const CardComponent = ({ nombre, cargo, btn, img }) => {
  return (
    <Container>
      <div className='card'>
        <img className='card-img-top' className={style.cardImg} src={img} />
        <div className={style.cardBody}>
          <div className='card-body' className={style.infoCard}>
            <h4 className='card-title'>{nombre}</h4>
            <h5 className='card-subtitle mb-2 '>{cargo}</h5>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link href='/equipo'>
              <a className={style.formButton} variant='primary'>
                {btn}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CardComponent;
