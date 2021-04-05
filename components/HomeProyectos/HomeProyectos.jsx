import React from "react";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import style from "./HomeProyectos.module.css";

const HomeProyectos = () => {
    return (
        <>
            <Col xs={12} sm={6} md={4} lg={3}>
                <div className='card' className={style.cardProyecto}>
                    <div className={style.cardImgCont}>
                        <div className={style.cardImg}><img className='card-img-top' src='./images/proyectos/enfoqueGenero.png' /></div>
                    </div>
                    <div className={style.cardBody}>
                        <div className='card-body' className={style.infoCard}>
                            <p>ENFOQUE DE GENERO</p>
                            <Link href='/proyectos'>
                                <a className={style.formButton} variant='primary'>
                                    VER MAS
                        </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
                <div className='card' className={style.cardProyecto}>
                    <div className={style.cardImgCont}>
                        <div className={style.cardImg}><img className='card-img-top' src='./images/proyectos/empoderamiento-01.png' /></div>
                    </div>
                    <div className={style.cardBody}>
                        <div className='card-body' className={style.infoCard}>
                            <p>EMPODERAMIENTO JUVENTUDES Y MUJERES</p>
                            <Link href='/proyectos'>
                                <a className={style.formButton} variant='primary'>
                                    VER MAS
                        </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
                <div className='card' className={style.cardProyecto}>
                    <div className={style.cardImgCont}>
                        <div className={style.cardImg}><img className='card-img-top' src='./images/proyectos/democracia-01.png' /></div>
                    </div>
                    <div className={style.cardBody}>
                        <div className='card-body' className={style.infoCard}>
                            <p>DEMOCRACIA Y CULTURA CIVICA</p>
                            <Link href='/proyectos'>
                                <a className={style.formButton} variant='primary'>
                                    VER MAS
                        </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
                <div className='card' className={style.cardProyecto}>
                    <div className={style.cardImgCont}>
                        <div className={style.cardImg}><img className='card-img-top' src='./images/proyectos/prevencionViolenciaGenero-01.png' /></div>
                    </div>
                    <div className={style.cardBody}>
                        <div className='card-body' className={style.infoCard}>
                            <p>PREVENCION DE VIOLENCIA DE GENERO</p>
                            <Link href='/proyectos'>
                                <a className={style.formButton} variant='primary'>
                                    VER MAS
                        </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    );
};
export default HomeProyectos;