import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import style from "../styles/contacto.module.css";
import FormularioContacto from "../components/formularioContacto/formularioContacto";
import Headers from "../containers/header/Header";
import MapaContacto from "../components/mapaContacto/MapaContacto";
import InfoFundacion from "../components/infoFundacion/InfoFundacion";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Contacto = () => {
    return (
        < >
            <Headers />
            <div className={style.contentImage}>
                <Image src='./images/contact-bg.jpg' fluid style={{ height: 300 }} />
                <h1 className={style.textImage}>Contacto</h1>
            </div>
            <Container className="infoContainer" style={{ marginTop: 25 }}>
                <Row>
                    <Col xs="12" sm="4" md="4" lg="4">
                        <InfoFundacion />
                    </Col>
                    <Col xs="12" sm="8" md="8" lg="8">
                        <FormularioContacto />
                    </Col>
                </Row>
                <Row style={{ marginTop: 25 }}>
                    <Col>
                        <MapaContacto />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Contacto;
