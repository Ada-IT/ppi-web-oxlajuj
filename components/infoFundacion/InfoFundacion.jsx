import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { MapFill, Whatsapp, Mailbox, Envelope } from "react-bootstrap-icons";
import style from "../../styles/InfoFundacion.module.css";

const InfoFundacion = () => {
    return (
        <Row style={{ marginTop: 50 }}>
            <Col>
                <Row style={{ marginTop: 50 }}>
                    <Col xs="3" sm="3" md="3" lg="3">
                        <MapFill color='purple' size={35} />

                    </Col>
                    <Col xs="9" sm="9" md="9" lg="9">
                        <p>Domicilio de la fundacion</p>

                    </Col>
                </Row>
                <Row style={{ marginTop: 50 }}>
                    <Col xs="3" sm="3" md="3" lg="3">
                        <Envelope color='purple' size={35} />
                    </Col>
                    <Col xs="9" sm="9" md="9" lg="9">
                        <p>mail</p>
                    </Col>
                </Row>
                <Row style={{ marginTop: 50 }}>
                    <Col xs="3" sm="3" md="3" lg="3">
                        <Whatsapp color='purple' size={35} />
                    </Col>
                    <Col xs="9" sm="9" md="9" lg="9">
                        <p>WhatsApp</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default InfoFundacion;