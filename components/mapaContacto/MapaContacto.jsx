import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const MapaContacto = () => {
  return (
    <Row>
      <Col>
        <div className='gmap_canvas'>
          <iframe
            width='100%'
            height='300'
            id='gmap_canvas'
            src='https://maps.google.com/maps?q=guatemala&t=&z=13&ie=UTF8&iwloc=&output=embed'
            scrolling='no'
            style={{ borderStyle: "none" }}
          ></iframe>
          <a href='https://www.whatismyip-address.com'></a>
        </div>
      </Col>
    </Row>
  );
};

export default MapaContacto;
