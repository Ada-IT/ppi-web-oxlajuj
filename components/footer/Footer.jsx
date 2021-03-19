import style from "./Footer.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { MapFill, Whatsapp, Envelope, Facebook, Instagram } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";

const Footer = () => {
    return (
        <Container className={style.backFooter} fluid>
            <Row >
                <Col  className={style.aca}>
                    <div>
                        <Col>
                            <img style={{ width: "200px" }} src='.\images\LOGO_OXLAJU_BLANCO-1.png' />
                            <Row>
                                <MapFill color='#FFFF' size={15} />
                                <p className={style.textStyle}>Domicilio de la fundacion</p>
                            </Row>
                            <Row>
                                <Envelope color='#FFFF' size={15} />
                                <p className={style.textStyle}>fundacionoxlajuj@gmail.com</p>
                            </Row>
                            <Row>
                                <Whatsapp color='#FFFF' size={15} />
                                <p className={style.textStyle}>41285119</p>
                            </Row>
                        </Col>
                    </div>
                </Col>
                <Col md="auto">
                    <Row className="justify-content-md-center">
                        <h1 className={style.titleStyle}>Accesos rápidos </h1>
                    </Row>
                    <Row className="justify-content-md-center">
                        <a href="https://www.google.com" className={style.access}>Google</a>
                    </Row>
                    <Row className="justify-content-md-center">
                        <a href="https://www.google.com" className={style.access}>Google</a>
                    </Row>
                    <Row className="justify-content-md-center">
                        <a href="https://www.google.com" className={style.access}>Google</a>
                    </Row>
                </Col>
                <Col >
                    <Row className="justify-content-md-center">
                        <h1 className={style.titleStyle}>Nuestras redes sociales</h1>
                    </Row>
                    <div className={style.ContainerRedes}>
                        <Row >
                            <Col>
                                <a href="https://www.facebook.com/FundacionOxlajujnoj">
                                    <Facebook className={style.redes} />
                                </a>
                            </Col>
                            <Col>
                                <a href="https://www.instagram.com/fundacionoxlajujnoj/?hl=es-la"><Instagram className={style.redes} /></a>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>

    )
};

export default Footer;