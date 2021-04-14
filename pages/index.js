import Carousel from "../components/carousel/Carousel";
import CardComponent from "../components/card/CardComponent";
import { Container, Row } from "react-bootstrap";
import styles from "../styles/home.module.css";
import Partners from "../components/Partners/Partners";
import FormularioHome from "../components/formularioHome/FormularioHome";
import ListCard from "../components/listCard/ListCard";
import HomeProyectos from "../components/HomeProyectos/HomeProyectos";
import Partners2 from "../components/Partners2/Partners2";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Carousel />
      </div>
      <div>
        <h1 className={styles.title}>CONOCE A NUESTROS PROYECTOS</h1>
        <Container fluid>
          <Row className={styles.cardContainer}>
            <HomeProyectos></HomeProyectos>
          </Row>
        </Container>
        <div className={styles.lineCont}>
          <br />
          <div className={styles.line}></div>
        </div>
        <h1 className={styles.title}>CONOCE A NUESTRO EQUIPO</h1>
        <Container fluid>
          <Row className={styles.cardContainer}>
            <ListCard />
          </Row>
        </Container>
      </div>
      <div>
        <FormularioHome></FormularioHome>
      </div>
      <div>
        <Partners></Partners>
      </div>
      <div>
        <Partners2></Partners2>
      </div>
    </>
  );
}
