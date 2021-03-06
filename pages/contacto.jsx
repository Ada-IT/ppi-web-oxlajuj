import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Hero from "../components/hero/Hero";
import style from "../styles/contacto.module.css";

const Contacto = () => {
  return (
    <>
      <Hero />
      <Container fluid>
        <Col className={style.formBk} fluid>
          <h3 className={style.formTitle}>
            Déjanos tus datos y a la brevedad nos contactaremos contigo.
          </h3>
          <div className={style.more}>
            <a
              href='https://forms.gle/i6TuuGKLsCTe8SVSA'
              className={style.buttonMore}
              variant='primary'
              type='submit'
            >
              Más info...
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
