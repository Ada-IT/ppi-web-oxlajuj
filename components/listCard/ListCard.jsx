import CardComponent from "../card/CardComponent";
import data from "./data";
import { Container, Row, Col } from "react-bootstrap";

const ListCard = () => {
  return (
    <>
      {data.map((card) => {
        return (
          <Col xs={12} sm={6} md={4} lg={3}>
          <CardComponent
            img={card.img}
            key={card.id}
            nombre={card.nombre}
            cargo={card.cargo}
            btn='Nuestro equipo'
          />
          </Col>
        );
      })}
    </>
  );
};

export default ListCard;
