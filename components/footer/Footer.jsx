import style from "./Footer.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { MapFill, Whatsapp, Envelope, Facebook, Instagram } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";

const Footer = () => {
    return (
        <Container className={style.backFooter} fluid>
            <Row  >
                <Col>
                    <Row className="justify-content-md-center">
                        <img style={{ width: "200px" }} src='.\images\LOGO_OXLAJU_BLANCO-1.png' />
                    </Row>
                    <Row className={style.infoFooterConten}>
                        <Row className={style.infoFundConten}>
                            <Col >
                                <Col >
                                    <Row className={style.infoFund}>
                                        <Col xs="3" sm="3" md="3" lg="3">
                                            <MapFill color='#FFFF' size={20} />

                                        </Col>
                                        <Col xs="9" sm="9" md="9" lg="9">
                                            <p className={style.textStyle}>Domicilio de la fundacion</p>

                                        </Col>
                                    </Row>
                                    <Row className={style.infoFund}>
                                        <Col xs="3" sm="3" md="3" lg="3">
                                            <Envelope color='#FFFF' size={20} />
                                        </Col>
                                        <Col xs="9" sm="9" md="9" lg="9">
                                            <p className={style.textStyle}>Mail</p>
                                        </Col>
                                    </Row>
                                    <Row className={style.infoFund}>
                                        <Col xs="3" sm="3" md="3" lg="3">
                                            <Whatsapp color='#FFFF' size={20} />
                                        </Col>
                                        <Col xs="9" sm="9" md="9" lg="9">
                                            <p className={style.textStyle}>WhatsApp</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Col>
                        </Row>
                    </Row>
                </Col>
                <Col>
                    <Row className="justify-content-md-center">
                        <Row>
                            <h1 className={style.titleStyle}>Accesos rápidos </h1>
                        </Row>
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
                    <Row className="justify-content-md-center">
                        <a href="https://www.facebook.com/FundacionOxlajujnoj"><Facebook className={style.redes} /></a>
                    </Row>
                    <Row className="justify-content-md-center">
                        <a href="https://www.instagram.com/fundacionoxlajujnoj/?hl=es-la"><Instagram className={style.redes} /></a>
                    </Row>
                </Col>
            </Row>
        </Container>

    )
};

export default Footer;