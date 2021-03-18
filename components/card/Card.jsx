import React from 'react';
/* import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; */
import style from "./Card.module.css";
import { Container } from 'react-bootstrap';
import IconosRedes from "../IconosRedes/IconosRedes";

const Card = () => {

    return (
        <Container className={style.cardContainer}>
            <article className={style.card}>
                <div className={style.cardHeader}>
                    <div type="button"><img className={style.cardImg} src="./images/b.jpg" /></div>
                </div>
                <div className={style.cardContent}>
                    <h3 className={style.cardContentTitle} >
                        Nombre de la persona
                </h3>
                    <p className={style.cardContentText}>Cargo de la persona</p>
                </div>
                <IconosRedes></IconosRedes>
            </article>
        </Container>
    );
}

export default Card;