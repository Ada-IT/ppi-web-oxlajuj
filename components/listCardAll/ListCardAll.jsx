import CardComponent from "../card/CardComponent";
import data from "./dataAll";
import { Container, Row, Col } from "react-bootstrap";


const ListCardAll = () => {
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
              btn=''
            />
          </Col>
        );
      })}
    </>
  );
};

export default ListCardAll;
