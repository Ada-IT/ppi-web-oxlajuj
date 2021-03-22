import Hero from "../components/hero/Hero";
import { Container } from "react-bootstrap";
import style from "../styles/quienes-somos.module.css";

const WhoAre = () => {
  return (
    <>
      <Hero />

      <Container>
        <div>
          <h2 className={style.title}>Nuestros Valores</h2>
        </div>
        <div className='row'>
          <div className='col-12  p-4 col-lg-5 offset-lg-1 text-center text-lg-left'>
            <h3 class='value-title pt-1'>Nuestra Historia</h3>
            <p>
              En el año 2007 surgió la Fundación Oxlajuj No’j, en Guatemala. Un
              proyecto en el que siete intelectuales e investigadoras de
              distintas disciplinas se conformaron como grupo académico; con la
              firme convicción que la academia y la investigación son
              fundamentales para el desarrollo de la humanidad.
            </p>
            <img
              className='pb-3'
              aria-hidden='true'
              src='./simbolo.png'
              alt='nuestra-historia'
            />
          </div>
          <div class='col-12  p-4 col-lg-5  text-center text-lg-left'>
            <h3 class='value-title pt-1'>¿Quienes somos?</h3>
            <p>
              Somos una fundación cuya naturaleza es carácter privado, no
              partidista, sin fines de lucro, con proyección social y de
              asistencia humanitaria.
            </p>
            <img
              class='pb-3'
              aria-hidden='true'
              src='./img3.png'
              alt='mision'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-12  p-4 col-lg-5 offset-lg-1 text-center text-lg-left'>
            <h3 class='value-title pt-1'>Visión</h3>
            <p>
              Educar a la población por medio de la formación e investigación en
              temas de género, ética y derechos humanos, fomentando un
              empoderamiento sostenible para las y los jóvenes y mujeres de la
              región centroamericana. Aacortando las brechas de género y
              disminuyendo la violencia basada en género.
            </p>
            <img
              class='pb-3'
              aria-hidden='true'
              src='./img1.png'
              alt='vision'
            />
          </div>
          <div class='col-12  p-4 col-lg-5 offset-lg-1 text-center text-lg-left'>
            <h3 class='value-title pt-1'>Misión</h3>
            <p>
              Fortalecemos la ejecución de proyectos con enfoque de género y
              empoderamiento sostenible para jóvenes y mujeres de áreas rurales,
              por medio de nuestros programas educativos, investigaciones y
              capacitaciones para profesionales.
            </p>
            <img
              class='pb-3'
              aria-hidden='true'
              src='./img2.png'
              alt='quienes-somos'
              style={{ borderRadius: "50%", width: "196px", height: "212px" }}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default WhoAre;
