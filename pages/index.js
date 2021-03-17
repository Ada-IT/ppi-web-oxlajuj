import Header from "../containers/header/Header";
import Carousel from "../components/carousel/Carousel";
import Card from "../components/card/Card";
import { Container, Row } from "react-bootstrap"
import Col from "react-bootstrap/Col";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Carousel />
      </div>
      <div>
        <Row  >
          <Col> <Card /></Col>
          <Col> <Card /></Col>
          <Col> <Card /></Col>
          <Col> <Card /></Col>
        </Row>
        <Row  >
          <Col> <Card /></Col>
          <Col> <Card /></Col>
          <Col> <Card /></Col>
          <Col> <Card /></Col>
        </Row>
      </div>

    </>
  );
}
