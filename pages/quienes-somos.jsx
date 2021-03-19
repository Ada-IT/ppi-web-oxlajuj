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
            En el año 2007 un grupo de siete investigadores de Guatemala se
            conforman como grupo académico de distintas disciplinas; con la
            firme convicción que la academia y la investigación son
            fundamentales para el desarrollo de la humanidad, reconociendo los
            saberes originarios de los pueblos indigenas, es así como surge
            Fundación Oxlajuj No’j. Trás diez años de experiencia en trabajo de
            campo en comunidades rurales con población indígena con incidencia
            en 11 diferentes departamentos del país, en septiembre de 2018 se
            crea dos nuevos proyecto dentro de Fundación Oxlajuj N’oj, 1) la
            Dirección de Juventudes y 2) Instituto de género y empoderamiento.
            Estos proyectos dieron la oportunidad de sumar el área de formación
            a las líneas de trabajo de la fundación. En los últimos años hemos
            creado nuevos programas como la pasantía profesionales para jóvenes
            y Embajadores deparatementales a nivel nacional. Nos hemos
            especializado en temas de género, prevención de violencia sexual,
            empoderamiento juventudes y Agenda 2030.
          </p>
        </div>
        <div>
          <h2>Visión</h2>
          <p>
            Educar a la población por medio de la formación e investigación en
            temas de género, ética y derechos humanos, fomentando un
            empoderamiento sostenible para las y los jóvenes y mujeres de la
            región centroamericana. Aacortando las brechas de género y
            disminuyendo la violencia basada en género.{" "}
          </p>
        </div>
        <div>
          <h2>Misión</h2>
          <p>
            Fortalecemos la ejecución de proyectos con enfoque de género y
            empoderamiento sostenible para jóvenes y mujeres de áreas rurales,
            por medio de nuestros programas educativos, investigaciones y
            capacitaciones para profesionales.{" "}
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
