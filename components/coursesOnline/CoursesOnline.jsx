import React from "react";
import style from "./CoursesOnline.module.css";

const CoursesOnline = () => {
  return (
    <div className={style.container}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-12 img-programa'>
            <img
              src='images/collage.png'
              className={style.cursosImg}
              alt='cursos-online'
            />
          </div>
          <div className='offset-lg-1 col-lg-5 col-md-12 text-programa'>
            <h2 className={style.title}>Cursos online</h2>
            <p className={style.paragraph}>
              Los temas de los cursos que facilitamos son: Inteligencia
              emocional, Liderazgo colectivo, Prevención violencia sexual,Ciclo
              violencia de género, Acciones positivas por la igualdad,
              Elaboración de proyectos con perspectiva de género, Comunicación
              con enfoque de género, Epistemologías feministas, Teoría feminista
              para principiantes, Introducción a los ecofeminismos,
              Empoderamiento feminista I, Empoderamiento feminista II, Derechos
              de las mujeres y la Cedaw, Masculinidades disidentes, Mitos del
              amor romántico, Construcción relaciones saludable, Enfoque de
              género, Educación integral en sexualidad, Herramientas de
              Investigación, Etica y bioetica, Resolución de conflictos,
              Participación política de las mujeres, Democracias y juventudes
              activas, Derechos de la comunidad LGTBIQ+, Salud con enfoque de
              género, Estudios de la sexualidad, ODS y agenda 2030 y Feminismos
              interseccionales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesOnline;
