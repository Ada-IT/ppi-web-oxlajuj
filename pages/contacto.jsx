import Container from "react-bootstrap/Container";
import FormularioContacto from "../components/formularioContacto/formularioContacto";
import MapaContacto from "../components/mapaContacto/MapaContacto";
import InfoFundacion from "../components/infoFundacion/InfoFundacion";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Hero from "../components/hero/Hero";
import style from "../styles/contacto.module.css";


const Contacto = () => {
  return (
    <>
      <Hero />
      <Container className='infoContainer' style={{ marginTop: 25 }}>
        <Row className={style.contForm}>
          <Col xs='12' sm='4' md='4' lg='4'>
            <InfoFundacion />
          </Col>
          <Col>
            <MapaContacto />
          </Col>
        </Row>      
      </Container>
      <Row className={style.formBk} fluid>
        <h3 className={style.formTitle}>Dejanos tus datos y a la brevedad nos contactaremos con vos.</h3>
        <div className={style.more}>
          <a href="https://forms.gle/ms5NtQkFJPhSnkrs9" className={style.buttonMore} variant='primary' type='submit'>
            Mas info...
              </a>
        </div>
      </Row>
    </>
  );
};
export default Contacto;
