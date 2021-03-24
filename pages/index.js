import Carousel from "../components/carousel/Carousel";
import CardComponent from "../components/CardComponent/CardComponent";
import { Container, Row } from "react-bootstrap"
import Col from "react-bootstrap/Col";
import styles from "../styles/Home.module.css";
import Partners from "../components/Partners/Partners";
import FormularioHome from "../components/formularioHome/FormularioHome";
import ListCard from "../components/ListCard/ListCard";

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
        <div className={styles.lineCont}>
          <br />
          <div className={styles.line}></div>
        </div>
        <h1 className={styles.title} >CONOCE A NUESTRO EQUIPO</h1>
        <Row className={styles.cardContainer}  >
          <ListCard />
          
        </Row>
      </div>
      <div>
        <FormularioHome></FormularioHome>
      </div>
      <div>
        <Partners></Partners>
      </div>
    </>
  );
}
