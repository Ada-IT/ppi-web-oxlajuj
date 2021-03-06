import Hero from "../components/hero/Hero";
import { Row, Col, Container } from "react-bootstrap";
import style from "../styles/quienes-somos.module.css";

const WhoAre = () => {
  return (
    <>
      <Hero />
      <div className='container-fluid'>
        <Row className={style.row1}>
          <Col sm={6} className={style.imgHistory}>
            <div className={style.contentImgHistory}>
              <img
                src='./images/quienesSomos/nuestraHistoria2.png'
                className={style.img}
              />
            </div>
          </Col>
          <Col sm={6}>
            <p className={style.title}>Nuestra historia</p>
            <p className={style.textQuienes}>
              En el año 2007, surgió la Fundación Oxlajuj No’j, en Guatemala. Se
              trata de un proyecto en el que siete intelectuales e
              investigadoras de distintas disciplinas se conformaron como grupo
              académico, con la firme convicción que la academia y la
              investigación son fundamentales para el desarrollo de la
              humanidad.
            </p>
          </Col>
        </Row>
        <Row className={style.row2}>
          <Col sm={6} className={style.rowQuienes2}>
            <h1 className={style.title2}>¿Quiénes somos?</h1>
            <p className={style.textQuienes2}>
              Somos una fundación cuya naturaleza es de carácter privado, no
              partidista, sin fines de lucro, con proyección social y de
              asistencia humanitaria.
            </p>
          </Col>
          <Col sm={6}>
            <div className={style.contentImg}>
              <img
                src='./images/quienesSomos/quienesSomos2.jpg'
                className={style.img}
              />
            </div>
          </Col>
        </Row>
        <Row className={style.row1}>
          <Col sm={6} className={style.imgHistory}>
            <div className={style.contentImg}>
              <img
                src='./images/quienesSomos/vision2.jpg'
                className={style.img}
              />
            </div>
          </Col>
          <Col sm={6}>
            <p className={style.title}>Visión</p>
            <p className={style.textQuienes}>
              Educar a la población por medio de la formación e investigación en
              temas de género, ética y derechos humanos, fomentando un
              empoderamiento sostenible para las y los jóvenes y mujeres de la
              región centroamericana, acortando las brechas de género y
              disminuyendo la violencia basada en género.
            </p>
          </Col>
        </Row>
        <Row className={style.row2}>
          <Col sm={6} className={style.rowQuienes2}>
            <p className={style.title2}>Misión</p>
            <p className={style.textQuienes2}>
              Fortalecemos la ejecución de proyectos con enfoque de género y
              empoderamiento sostenible para jóvenes y mujeres de áreas rurales,
              por medio de nuestros programas educativos, investigaciones y
              capacitaciones para profesionales.
            </p>
          </Col>
          <Col sm={6}>
            <div className={style.contentImg}>
              <img
                src='./images/quienesSomos/mision2.jpg'
                className={style.img}
              />
            </div>
          </Col>
        </Row>
        <Row className={style.row1}>
          <Col sm={6} className={style.imgHistory}>
            <div className={style.contentImg}>
              <img
                src='./images/quienesSomos/dondeTrabajamos2.jpg'
                className={style.img}
              />
            </div>
          </Col>
          <Col sm={6}>
            <p className={style.title}>¿Dónde trabajamos?</p>
            <p className={style.textQuienes}>
              Estamos en los siguientes departamentos: Guatemala, Jutiapa,
              Sololá, Quetzaltenango, Chimaltenango, Sacatepéquez, Alta,
              Verapaz, San Marcos, Chiquimula, Escuintla y Totonicapán.
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default WhoAre;
