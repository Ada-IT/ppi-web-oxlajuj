import Hero from "../components/hero/Hero";
import CardComponent from "../components/CardComponent/CardComponent";
import data from "../components/ListCard/data";
import { Container, Row, Col } from "react-bootstrap";

const Team = () => {
  return (
    <>
      <Hero />
      {data.map((card) => {
        return (
          <div>
            <div> 
              <CardComponent key={card.id} nombre={card.nombre} cargo={card.cargo} />
            </div>
          </div>
        )
      })}
    </>
  );
};

export default Team;
