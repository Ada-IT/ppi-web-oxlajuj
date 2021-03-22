import Hero from "../components/hero/Hero";
import { Container } from "react-bootstrap";
import style from "../styles/quienes-somos.module.css";

const WhoAre = () => {
  return (
    <>
      <Hero />

      <Container>
        <div>
          <h4 className={style.title}>
            Fundación cuya naturaleza es carácter privado, no partidista, sin
            fines de lucro, cuya proyección es social y de asistencia
            humanitaria.
          </h4>
        </div>

        <div>
          <h2>Nuestra Historia</h2>
          <p>
            En el año 2007 surgió la Fundación Oxlajuj No’j, en Guatemala. Un
            proyecto en el que siete intelectuales e investigadoras de distintas
            disciplinas se conformaron como grupo académico; con la firme
            convicción que la academia y la investigación son fundamentales para
            el desarrollo de la humanidad.
          </p>
        </div>
        <div>
          <h2>Visión</h2>
          <p>
            Educar a la población por medio de la formación e investigación en
            temas de género, ética y derechos humanos, fomentando un
            empoderamiento sostenible para las y los jóvenes y mujeres de la
            región centroamericana. Aacortando las brechas de género y
            disminuyendo la violencia basada en género. Con más de diez años de
            experiencia en trabajo de campo en comunidades rurales con población
            indígena, y con incidencia en once departamentos del país, además de
            alianzas en países como Nicaragua, México y España.
          </p>
        </div>
        <div>
          <h2>Misión</h2>
          <p>
            Fortalecemos la ejecución de proyectos con enfoque de género y
            empoderamiento sostenible para jóvenes y mujeres de áreas rurales,
            por medio de nuestros programas educativos, investigaciones y
            capacitaciones para profesionales.
          </p>
        </div>
        <div>
          <h2>Donde trabajamos</h2>
          <ul>
            <li>Guatemala</li>
            <li>Jutiapa</li>
            <li>Sololá</li>
            <li>Quetzaltenango</li>
            <li>Chimaltenango</li>
            <li>Sacatepéquez</li>
            <li>Alta Verapaz</li>
            <li>San Marcos</li>
            <li>Chiquimula</li>
            <li>Escuintla</li>
            <li>Totonicapán</li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default WhoAre;
