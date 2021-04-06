import Hero from "../components/hero/Hero";
import { Row, Col, Container } from "react-bootstrap";
import style from "../styles/quienes-somos.module.css";

const WhoAre = () => {
  return (
    <>
      <Hero />
      <Container className={style.ContQuienes}>
        <Row >
          <Col sm={6} className={style.imgHistory} >
            <img src='./images/proyecto/DerechosGeneroM.png' className={style.imgPro} />
          </Col>
          <Col sm={4}className={style.contenProy}>
            <h1 className={style.title}>Nuestra Historia</h1>
            <p className={style.textCenter}>En el año 2007 surgió la Fundación Oxlajuj No’j, en Guatemala.
            Un proyecto en el que siete intelectuales e investigadoras de
            distintas disciplinas se conformaron como grupo académico; con
            la firme convicción que la academia y la investigación son
        fundamentales para el desarrollo de la humanidad.</p>
          </Col>
        </Row>
        <hr noshade="noshade" className={style.linea} />
        <Row className={style.rowPro2}>
          <Col className={style.contenProy}>
            <h1 className={style.proyTitle} >¿Quienes somos?</h1>
            <p className={style.proyDesc} >Somos una fundación cuya naturaleza es carácter privado, no
            partidista, sin fines de lucro, con proyección social y de
                asistencia humanitaria.</p>
          </Col>
          <Col lg={4}  >
            <img src='./images/proyecto/DerechosGeneroM.png' className={style.imgPro} />
          </Col>
        </Row>
        <hr noshade="noshade" className={style.linea} />
        <Row >
          <Col lg={4} className={style.imgHistory} >
            <img src='./images/proyecto/DerechosGeneroM.png' className={style.imgPro} />
          </Col>
          <Col className={style.contenProy}>
            <h1 className={style.title}>Visión</h1>
            <p className={style.textCenter}>Educar a la población por medio de la formación e investigación
                en temas de género, ética y derechos humanos, fomentando un
                empoderamiento sostenible para las y los jóvenes y mujeres de la
                región centroamericana. Aacortando las brechas de género y
                disminuyendo la violencia basada en género.</p>
          </Col>
        </Row>
        <hr noshade="noshade" className={style.linea} />
        <Row className={style.rowPro2}>
          <Col className={style.contenProy}>
            <h1 className={style.proyTitle} >Misión</h1>
            <p className={style.proyDesc} >Fortalecemos la ejecución de proyectos con enfoque de género y
                empoderamiento sostenible para jóvenes y mujeres de áreas
                rurales, por medio de nuestros programas educativos,
                investigaciones y capacitaciones para profesionales.</p>
          </Col>
          <Col lg={4}  >
            <img src='./images/proyecto/DerechosGeneroM.png' className={style.imgPro} />
          </Col>
        </Row>
        <hr noshade="noshade" className={style.linea} />
        <Row >
          <Col lg={4} className={style.imgHistory} >
            <img src='./images/proyecto/DerechosGeneroM.png' className={style.imgPro} />
          </Col>          
          <Col className={style.contenProy}>
            <h1 className={style.title}>¿Donde trabajamos?</h1>
            <p className={style.textCenter}>Estamos en los siguientes departamentos: Guatemala, Jutiapa,
                Sololá, Quetzaltenango, Chimaltenango, Sacatepéquez, Alta,
                Verapaz, San Marcos, Chiquimula, Escuintla y Totonicapán.</p>
          </Col>
        </Row>
      </Container>

      {/* <section className={style.section}>
          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              <h2 className={style.title}>Nuestra Historia</h2>
              <p className={style.textCenter}>
                En el año 2007 surgió la Fundación Oxlajuj No’j, en Guatemala.
                Un proyecto en el que siete intelectuales e investigadoras de
                distintas disciplinas se conformaron como grupo académico; con
                la firme convicción que la academia y la investigación son
                fundamentales para el desarrollo de la humanidad.
              </p>
            </div>
            <div className='col-lg-6 col-md-12 text-center'>
              <img
                className={style.imgHistory}
                src='./images/quienesSomos1.png'
                alt='nuestra-historia'
              />
            </div>            
          </div>
        </section>
        <section className={style.section}>
          <div className={style.reverse}>
            <div className='col-lg-6 col-md-12 text-center '>
              <img
                className={style.img}
                src='./images/quienesSomos4.png'
                alt='mision'
              />
            </div>
            <div className='col-lg-6 col-md-12'>
              <h2 className={style.title}>¿Quienes somos?</h2>
              <p className={style.text}>
                Somos una fundación cuya naturaleza es carácter privado, no
                partidista, sin fines de lucro, con proyección social y de
                asistencia humanitaria.
              </p>
            </div>
          </div>
        </section>
        <section className={style.section}>
          <div className='row'>
            <div className='col-lg-6 col-md-12 text-mision'>
              <h2 className={style.title}>Visión</h2>
              <p className={style.textCenter}>
                Educar a la población por medio de la formación e investigación
                en temas de género, ética y derechos humanos, fomentando un
                empoderamiento sostenible para las y los jóvenes y mujeres de la
                región centroamericana. Aacortando las brechas de género y
                disminuyendo la violencia basada en género.
              </p>
            </div>
            <div className='d-flex justify-content-center text-center align-items-center col-lg-6 col-md-12 img-mision'>
              <img
                className={style.img}
                src='./images/quienesSomos3.png'
                alt='vision'
              />
            </div>
          </div>
        </section>
        <section className={style.section}>
          <div className={style.reverse}>
            <div className='text-center col-lg-6 col-md-12 img-mision'>
              <img
                className={style.img}
                src='./images/quienesSomos2.png'
                alt='quienes-somos'
              />
            </div>
            <div className='col-lg-6 col-md-12 text-mision'>
              <h2 className={style.title}>Misión</h2>
              <p className={style.text}>
                Fortalecemos la ejecución de proyectos con enfoque de género y
                empoderamiento sostenible para jóvenes y mujeres de áreas
                rurales, por medio de nuestros programas educativos,
                investigaciones y capacitaciones para profesionales.
              </p>
            </div>
          </div>
        </section>

        <section className={style.section}>
          <div className='row'>
            <div className='col-lg-6 col-md-12 text-mision'>
              <h2 className={style.title}>¿Donde trabajamos?</h2>
              <p className={style.textCenter}>
                Estamos en los siguientes departamentos: Guatemala, Jutiapa,
                Sololá, Quetzaltenango, Chimaltenango, Sacatepéquez, Alta,
                Verapaz, San Marcos, Chiquimula, Escuintla y Totonicapán.
              </p>
            </div>
            <div className='d-flex text-center justify-content-center align-items-center col-lg-6 col-md-12 img-mision'>
              <img
                className={style.img}
                src='./images/quienesSomos.png'
                alt='vision'
              />
            </div>
          </div>
        </section>
      </Container> */}
    </>
  );
};

export default WhoAre;
