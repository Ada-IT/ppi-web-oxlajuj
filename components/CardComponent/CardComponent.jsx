import React from 'react';
import style from "./Card.module.css";
import { Container, Row, Col, Card} from 'react-bootstrap';

const CardComponent = ({ nombre, id, cargo }) => {

    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <img className={style.cardImg} src="./images/b.jpg" />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{cargo}</Card.Subtitle>
                    <Card.Link href="/equipo">Ver más...</Card.Link>
                </Card.Body>
            </Card>         
        </Container>
    );
}

export default CardComponent;