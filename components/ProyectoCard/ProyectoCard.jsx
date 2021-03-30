import React from "react";
//import { Container } from "react-bootstrap"
import {Row, Col } from "react-bootstrap";

const ProjectoCard = ({ texto, titulo, img }) => {

    return (
        <>       
            <Row >
                <Col lg={4} >
                    <img src={img} />
                </Col>
                <Col>
                    <h1 >{titulo}</h1>
                    <p >{texto}</p>
                </Col>
            </Row>
        
        </>
    );
};
export default ProjectoCard;