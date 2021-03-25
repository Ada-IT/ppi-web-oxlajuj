import Hero from "../components/hero/Hero";
import EquipoCard from "../components/EquipoCard/EquipoCard";
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
              <EquipoCard
                key={card.id}
                nombre={card.nombre}
                cargo={card.cargo}
              />
              <h1>borrar</h1>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Team;
