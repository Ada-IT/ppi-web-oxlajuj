import React from "react";
import style from "./Card.module.css";
import { Container, Card } from "react-bootstrap";

const CardComponent = ({ nombre, cargo, btn, img }) => {
  return (
    <Container>
      {/* <div class="card" style={{width: "18rem"}}>
        <img scr={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div> */}
      <Card className={style.cardCont}>
          <img scr={img} className={style.cardImg} />
          <div className={style.cardBody}>
            <Card.Body className={style.infoCard}>
              <Card.Title>{nombre}</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>{cargo}</Card.Subtitle>
              <a
                href='/equipo'
                className={style.formButton}
                variant='primary'
                type='submit'
              >
                {btn}
              </a>
            </Card.Body>
          </div>
        </Card>
    </Container>
  );
};

export default CardComponent;
