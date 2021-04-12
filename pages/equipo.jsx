import Hero from "../components/hero/Hero";
import ListCardAll from "../components/listCardAll/ListCardAll";
import { Container, Row } from "react-bootstrap";
import style from "../styles/equipo.module.css";

const Team = () => {
  return (
    <>
      <Hero />
      <Row className={style.contEquipo} flow>
        <p className={style.titleEquipo}>
          "Trabajamos en empoderar a la juventud y mujeres en redes de
          pensamiento, para fortalecer el aprendizaje de género en el espacio de
          educación e investigación."
        </p>
      </Row>
      <div className={style.contCardEquipo}>
        <Container fluid>
          <Row>
            <ListCardAll />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Team;
