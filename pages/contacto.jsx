import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import FormularioContacto from "../components/formularioContacto/formularioContacto";
import MapaContacto from "../components/mapaContacto/MapaContacto";
import InfoFundacion from "../components/infoFundacion/InfoFundacion";
import Hero from "../components/hero/Hero";

const Contacto = () => {
  return (
    <>
      <Hero />
      <Container className='infoContainer' style={{ marginTop: 25 }}>
        <Row>
          <Col xs='12' sm='4' md='4' lg='4'>
            <InfoFundacion />
          </Col>
          <Col xs='12' sm='8' md='8' lg='8'>
            <FormularioContacto />
          </Col>
        </Row>
        <Row style={{ marginTop: 25 }}>
          <Col>
            <MapaContacto />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Contacto;
