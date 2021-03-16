import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const MapaContacto = () => { 
    return(
        <Row>
            <Col>
            <div class='gmap_canvas'>
                <iframe
                    width='100%'
                    height='300'
                    id='gmap_canvas'
                    src='https://maps.google.com/maps?q=guatemala&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    frameborder='0'
                    scrolling='no'
                    marginheight='0'
                    marginwidth='0'
                ></iframe>
                <a href='https://www.whatismyip-address.com'></a>
            </div>
            </Col>
        </Row>
    )
};

export default MapaContacto;