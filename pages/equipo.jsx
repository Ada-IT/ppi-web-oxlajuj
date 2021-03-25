import Hero from "../components/hero/Hero";
import EquipoList from "../components/EquipoList/EquipoList";
import data from "../components/ListCard/data";
//import { Container, Row, Col } from "react-bootstrap";

const Team = () => {
  return (
    <>
      <Hero />
      {data.map((card) => {
        return (
          <div>
            <div> 
              <EquipoList key={card.id} nombre={card.nombre} cargo={card.cargo} />
            </div>
          </div>
        )
      })}
    </>
  );
};

export default Team;
