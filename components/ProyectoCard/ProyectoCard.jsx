import React from "react";
import {Row, Col } from "react-bootstrap";
import style from "./proyectoCard.module.css";

const ProyectoCard = ({ texto, titulo, img, titulo2, texto2, img2 }) => {

    return (
        <>       
            <Row className={style.rowPro1}>
                <Col lg={4} xl={4} className={style.colPro} >
                    <img src={img} className={style.imgPro} />
                </Col>
                <Col>
                    <h1 className={style.proyTitle}>{titulo}</h1>
                    <p className={style.proyDesc}>{texto}</p>
                </Col>
            </Row>
            <hr noshade="noshade" className={style.linea} />
            <Row className={style.rowPro2}>                
                <Col>
                    <h1 className={style.proyTitle} >{titulo2}</h1>
                    <p className={style.proyDesc} >{texto2}</p>
                </Col>
                <Col lg={4}className={style.colPro} >
                    <img src={img2} className={style.imgPro}/>
                </Col>
            </Row>
            <hr noshade="noshade" className={style.linea} />
        </>
    );
};
export default ProyectoCard;