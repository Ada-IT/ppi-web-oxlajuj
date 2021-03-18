import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MapFill, Whatsapp, Twitter, Facebook } from "react-bootstrap-icons";
import style from "./IconosRedes.module.css";

const IconosRedes = () => {
    return (
        <div className={style.ContainerRedes}>
            <Row>
                <Col>
                    <MapFill color='#CE913B' size={18} />
                </Col>
                <Col>
                    <Whatsapp color='#CE913B' size={20} />
                </Col>
                <Col>
                    <Facebook color='#CE913B' size={20} />
                </Col>
                <Col>
                    <Twitter color='#CE913B' size={20} />
                </Col>
            </Row>
        </div>
    );
}

export default IconosRedes;