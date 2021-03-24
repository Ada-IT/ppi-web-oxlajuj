import React from 'react';
import style from "./Card.module.css";
import { Container } from 'react-bootstrap';


const CardComponent = ({nombre, id, cargo}) => {

    return (
        <Container className={style.cardContainer}>
            <article className={style.card}>
                <div className={style.cardHeader}>                    
                    <img className={style.cardImg} src="./images/b.jpg" />                    
                </div>
                <div className={style.cardContent}>
                    <h3 className={style.cardContentTitle}>
                        {nombre}
                    </h3>
                    <p className={style.cardContentText}>{cargo}</p>
                </div>
                <a className={style.viewMore} href='/equipo'>Ver más...</a>                
            </article>
        </Container>
    );
}

export default CardComponent;