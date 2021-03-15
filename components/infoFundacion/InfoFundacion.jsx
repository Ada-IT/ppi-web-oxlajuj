import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MapFill, Whatsapp, Mailbox } from "react-bootstrap-icons";

const InfoFundacion = () => {
    return (
        <div>
            <Row>
                <Col>
                    <MapFill color='purple' size={35} />
                </Col>
                <Col>
                    <p>Domicilio de la fundacion</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Whatsapp color='purple' size={35} />
                </Col>
                <Col>
                    <p>WhatsApp</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Mailbox color='purple' size={35} />
                </Col>
                <Col>
                    <p>mail</p>
                </Col>
            </Row>
        </div>
    );
}

export default InfoFundacion;