import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MapFill, Whatsapp, Envelope } from "react-bootstrap-icons";
import style from "./InfoFundacion.module.css";

const InfoFundacion = () => {
    return (
        <Row className={style.infoFundConten}>
            <Col>
                <Row className={style.infoFund}>
                    <Col xs="3" sm="3" md="3" lg="3">
                        <MapFill color='#48133b' size={35} />

                    </Col>
                    <Col xs="9" sm="9" md="9" lg="9">
                        <p>Domicilio de la fundacion</p>

                    </Col>
                </Row>
                <Row className={style.infoFund}>
                    <Col xs="3" sm="3" md="3" lg="3">
                        <Envelope color='#48133b' size={35} />
                    </Col>
                    <Col xs="9" sm="9" md="9" lg="9">
                        <p>fundacionoxlajujnoj@FundacionOxlajujNoj.onmicrosoft.com</p>
                    </Col>
                </Row>
                <Row className={style.infoFund}>
                    <Col xs="3" sm="3" md="3" lg="3">
                        <Whatsapp color='#48133b' size={35} />
                    </Col>
                    <Col xs="9" sm="9" md="9" lg="9">
                    <a href="https://wa.link/u7lbgt" >502 41285119</a>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default InfoFundacion;