import React from "react";
import Testimonials from "../testimonials/Testimonials";
import style from "./CoursesOnline.module.css";
import courses from "./data";
import { Container } from "react-bootstrap";

const CoursesOnline = () => {
    return (
        <>

            <h2 className={style.title}>Cursos online</h2>
            <p className={style.paragraph}>
                Los temas de los cursos que facilitamos son:
          </p>
            <div className='row'>
                {courses.map((course) => (
                    <div className='col-3'>
                        <div className='p-3 m-2 border bg-light'>{course}</div>
                    </div>
                ))}
            </div>
            <Testimonials />

        </>
    );
};

export default CoursesOnline;