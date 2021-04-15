import style from "./Footer.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { MapFill, Facebook, Instagram, EnvelopeFill, Whatsapp } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";

const Footer = () => {
    return (
        <Container className={style.backFooter} fluid>
            <Row >
                <Col xs="12" md="4">
                    <Row className="justify-content-md-center mt-3">
                        <Col>
                            <Row>
                                <EnvelopeFill color='#FFFF' size={15} />
                                <p className={style.textStyle}>fundacionoxlajujnoj@FundacionOxlajujNoj.onmicrosoft.com</p>
                            </Row>
                            <Row>
                                <Whatsapp color='#FFFF' size={15} />
                                <a href="https://wa.link/u7lbgt" className={style.textStyle}>502 41285119</a>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xs="12" md="4">
                    <Row className="justify-content-md-center mt-3">
                        <h1 className={style.titleStyle}>Accesos rápidos </h1>
                    </Row>
                    <Row className="justify-content-md-center mt-3">
                        <a href="https://www.paypal.com/paypalme/13noj" className={style.access}>Doná</a>
                    </Row>
                    <Row className="justify-content-md-center mt-3">
                        <a href="./proyectos" className={style.access}>Proyectos</a>
                    </Row>
                    <Row className="justify-content-md-center mt-3">
                        <a href="./cursos" className={style.access}>Cursos y webinar</a>
                    </Row>
                </Col>
                <Col xs="12" md="4" >
                    <Row className="justify-content-md-center mt-3">
                        <h1 className={style.titleStyle}>Nuestras redes sociales</h1>
                    </Row>
                    <Row className="justify-content-md-center">
                        <a href="https://www.facebook.com/FundacionOxlajujnoj">
                            <Facebook className={style.redes} />
                        </a>
                        <a href="https://www.instagram.com/fundacionoxlajujnoj/?hl=es-la">
                            <Instagram className={style.redes} />
                        </a>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
};

export default Footer;