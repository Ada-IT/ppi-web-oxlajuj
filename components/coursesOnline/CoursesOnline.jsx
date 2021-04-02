import React from "react";
import Testimonials from "../testimonials/Testimonials";
import style from "./CoursesOnline.module.css";
import courses from "./data";

const CoursesOnline = () => {
  return (
    <div className={style.container}>
      <div className='container'>
        <div className=''>
          <h2 className={style.title}>Cursos online</h2>
          <p className={style.paragraph}>
            Los temas de los cursos que facilitamos son:
          </p>
          <div className='row'>
            {courses.map((course) => (
              <div className='col-6'>
                <div className='p-3 m-2 border bg-light'>{course}</div>
              </div>
            ))}
          </div>
        </div>

        <div className='row'>
          {/* <div className='col-lg-5 col-md-12 img-programa'>
            <img
              src='images/collage.png'
              className={style.cursosImg}
              alt='cursos-online'
            />
          </div> */}
        </div>
      </div>
      <div>
        <Testimonials />
      </div>
    </div>
  );
};

export default CoursesOnline;
