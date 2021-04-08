import React from "react";
import Testimonials from "../testimonials/Testimonials";
import style from "./CoursesOnline.module.css";
import courses from "./data";
import { Container, Col, Row } from "react-bootstrap";

const CoursesOnline = () => {
    return (
        <>

            <h2 className={style.title}>Cursos online</h2>
            <p className={style.paragraph}>
                Los temas de los cursos que facilitamos son:
          </p>
            <div className={style.cursosContainer}>
                <Row>
                    {courses.map((course) => (


                        <Col xs={12} sm={6} md={6} lg={4}>
                            <li className={style.cursos}><span className={style.cursosLi}>{course}</span></li>
                        </Col>


                    ))}
                </Row>
            </div>
            <div className={style.testimonials}>
                <Testimonials />
            </div>

        </>
    );
};

export default CoursesOnline;