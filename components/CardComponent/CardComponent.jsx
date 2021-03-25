import React from 'react';
import style from "./Card.module.css";
import { Container, Card } from 'react-bootstrap';

const CardComponent = ({ nombre, id, cargo }) => {

    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <img className={style.cardImg} src="./images/b.jpg" />
                <div className={style.cardBody}>
                    <Card.Body >
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{cargo}</Card.Subtitle>
                        {/* <Card.Link href="/equipo">Nuestro equipo...</Card.Link> */}
                        <a href="/equipo" className={style.formButton} variant='primary' type='submit'>
                        Nuestro equipo...
                        </a>
                    </Card.Body>
                </div>
            </Card>
        </Container>
    );
}

export default CardComponent;