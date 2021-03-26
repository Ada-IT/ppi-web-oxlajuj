import Hero from "../components/hero/Hero";
import { Container } from "react-bootstrap";
import style from "../styles/quienes-somos.module.css";

const WhoAre = () => {
  return (
    <>
      <Hero />
      <Container>
        <section className={style.section}>
          <div className='row'>
            <div className='col-lg-5 col-md-12'>
              <h2 className={style.title}>Nuestra Historia</h2>
              <p className={style.paragraph}>
                En el año 2007 surgió la Fundación Oxlajuj No’j, en Guatemala.
                Un proyecto en el que siete intelectuales e investigadoras de
                distintas disciplinas se conformaron como grupo académico; con
                la firme convicción que la academia y la investigación son
                fundamentales para el desarrollo de la humanidad.
              </p>
            </div>
            <div className='d-flex justify-content-center align-items-center offset-lg-1 col-lg-6 col-md-12'>
              <img src='./images/history.jpeg' alt='nuestra-historia' />
            </div>
          </div>
        </section>
        <section className={style.section}>
          <div className='row'>
            <div className='d-flex justify-content-center align-items-center col-lg-6 col-md-12 '>
              <img src='./images/mision.jpeg' alt='mision' />
            </div>
            <div class='offset-lg-1 col-lg-5 col-md-12'>
              <h2 className={style.title}>¿Quienes somos?</h2>
              <p>
                Somos una fundación cuya naturaleza es carácter privado, no
                partidista, sin fines de lucro, con proyección social y de
                asistencia humanitaria.
              </p>
            </div>
          </div>
        </section>
        <section className={style.section}>
          <div className='row'>
            <div className='col-lg-5 col-md-12 text-mision'>
              <h2 className={style.title}>Visión</h2>
              <p className={style.paragraph}>
                Educar a la población por medio de la formación e investigación
                en temas de género, ética y derechos humanos, fomentando un
                empoderamiento sostenible para las y los jóvenes y mujeres de la
                región centroamericana. Aacortando las brechas de género y
                disminuyendo la violencia basada en género.
              </p>
            </div>
            <div className='d-flex justify-content-center align-items-center offset-lg-1 col-lg-6 col-md-12 img-mision'>
              <img class='pb-3' src='./images/vision.jpeg' alt='vision' />
            </div>
          </div>
        </section>
        <section className={style.section}>
          <div className='row'>
            <div className='d-flex justify-content-center align-items-center  col-lg-6 col-md-12 img-mision'>
              <img src='./images/quienes-somos.jpeg' alt='quienes-somos' />
            </div>
            <div class='offset-lg-1 col-lg-5 col-md-12 text-mision'>
              <h2 className={style.title}>Misión</h2>
              <p>
                Fortalecemos la ejecución de proyectos con enfoque de género y
                empoderamiento sostenible para jóvenes y mujeres de áreas
                rurales, por medio de nuestros programas educativos,
                investigaciones y capacitaciones para profesionales.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default WhoAre;
