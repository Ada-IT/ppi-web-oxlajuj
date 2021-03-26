import Hero from "../components/hero/Hero";
import EquipoCard from "../components/EquipoCard/EquipoCard";
import ListCardAll from "../components/ListCardAll/ListCardAll";
import { Container, Row, Col } from "react-bootstrap";
import style from "../styles/equipo.module.css";

const Team = () => {
  return (
    <>
      <Hero />
      <div>        
        <p className={style.titleEquipo}>"Trabajamos en empoderar a la juventud y mujeres en redes de pensamiento, para fortalecer el aprendizaje de género en el
         espacio de educación e investigación."</p>
      </div>
      <div className={style.contCardEquipo}>
        <Row xs={12} sm={2} md={2} lg={6}>
          <ListCardAll />
        </Row>
      </div>
    </>
  );
};

export default Team;
