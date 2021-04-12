import { Col, Row, Container } from "react-bootstrap";
import Hero from "../components/hero/Hero";
import style from "../styles/proyectos.module.css";
import ProyectoComp from "../components/ProyectoComp/ProyectoComp";

const Projects = () => {
  return (
    <>
      <Hero />
      <Container className={style.contProyecto}>
        <ProyectoComp />
      </Container>
    </>
  );
};

export default Projects;
