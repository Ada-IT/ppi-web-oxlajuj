import React from "react";
import style from "./Card.module.css";
import { Row, Card, Image } from "react-bootstrap";
import Link from "next/link";

const CardComponent = ({ nombre, cargo, btn1, btn2, img }) => {
  return (
    <div className='card' className={style.card}>
      <div className={style.cardImgCont}>
        <img className='card-img-top' className={style.cardImg} src={img} />
      </div>
      <div className={style.cardBody}>
        <div className='card-body' className={style.infoCard}>
          <h4 className='card-title' className={style.cardTitle}>{nombre}</h4>
          <h5 className='card-subtitle mb-2 ' className={style.cardSubtitle}>{cargo}</h5>
         
        </div>
      </div>
      <Row className={style.formButtonCont}>
            <Link href='/junta-directiva' legacyBehavior>
              <a className={style.formButton} variant='primary'>
                {btn1}
              </a>
            </Link>
            <Link href='/equipo' legacyBehavior>
              <a className={style.formButton} variant='primary'>
                {btn2}
              </a>
            </Link>
      </Row>
    </div>

  );
};

export default CardComponent;
