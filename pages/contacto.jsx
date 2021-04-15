import Container from "react-bootstrap/Container";
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

      <Container fluid>
        <Col className={style.formBk} fluid>
          <h3 className={style.formTitle}>
            Dejanos tus datos y a la brevedad nos contactaremos con vos.
          </h3>
          <div className={style.more}>
            <a
              href='https://forms.gle/ms5NtQkFJPhSnkrs9'
              className={style.buttonMore}
              variant='primary'
              type='submit'
            >
              Mas info...
            </a>
          </div>
        </Col>

        <div className={style.contImg}>
          <img src='/images/quienesSomos/nuestraHistoria2.png' />
        </div>
      </Container>
    </>
  );
};
export default Contacto;
