import React from "react";
import { Container, Card } from "react-bootstrap";

const EquipoCard = ({ nombre, id, cargo }) => {
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <img src='./images/b.jpg' />
        <div>
          <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>{cargo}</Card.Subtitle>
          </Card.Body>
        </div>
      </Card>
    </Container>
  );
};

export default EquipoCard;
