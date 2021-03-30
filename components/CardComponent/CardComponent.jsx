import React from "react";
import style from "./Card.module.css";
import { Container, Card, Image } from "react-bootstrap";
import Link from "next/link";

const CardComponent = ({ nombre, cargo, btn, img }) => {
  return (
    <Container>
      <div className='card' className={style.card}>
        <img className='card-img-top' className={style.cardImg} src={img} />
        <div className={style.cardBody}>
          <div className='card-body' className={style.infoCard}>
            <h4 className='card-title' className={style.cardTitle}>{nombre}</h4>
            <h5 className='card-subtitle mb-2 'className={style.cardSubtitle}>{cargo}</h5>           
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
