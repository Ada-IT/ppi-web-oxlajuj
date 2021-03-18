import Carousel from "../components/carousel/Carousel";
import Card from "../components/card/Card";
import { Container, Row } from "react-bootstrap"
import Col from "react-bootstrap/Col";
import styles from "../styles/Home.module.css";
import FormularioHome from "../components/formularioHome/FormularioHome";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Carousel />
      </div>
      <div>
        <h1 className={styles.title} >CONOCE A NUESTROS PROYECTOS</h1>
        <Row className={styles.cardContainer} >
          <Col> <Card /></Col>
          <Col> <Card /></Col>
          <Col> <Card /></Col>
          <Col> <Card /></Col>
        </Row>
        <h1 className={styles.title} >CONOCE A NUESTRO EQUIPO</h1>
        <Row className={styles.cardContainer}  >
          <Col> <Card /></Col>
          <Col> <Card /></Col>
          <Col> <Card /></Col>
          <Col> <Card /></Col>
        </Row>
      </div>
      <div>
        <FormularioHome></FormularioHome>
      </div>

    </>
  );
}
