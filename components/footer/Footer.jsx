import style from "./Footer.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { MapFill, Whatsapp, Mailbox, Envelope } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";

const Footer = () => {
    return (
        <Container className={style.backFooter} fluid>
            <Row  >
                <Col>
                    <Row></Row>
                    <Row className={style.infoFooterConten}>
                        <Row className={style.infoFundConten}>
                            <Col>
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
                        </Row>
                    </Row>
                </Col>
                <Col>

                </Col>
                <Col>

                </Col>
            </Row>
        </Container>

    )
};

export default Footer;
