
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { MapFill, Whatsapp, Mailbox } from "react-bootstrap-icons";

const Contacto = () => {
  return (
    <Container>
      <Image src='./images/contact-bg.jpg' fluid />
      <br />
      <Row>
        <Col>
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
        </Col>
        <Col>
          <Form>
            <Form.Group controlId='formGroupName'>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type='text'
                placeholder='Ingrese aqui su nombre completo.'
              />
            </Form.Group>
            <Form.Group controlId='formGroupEmail'>
              <Form.Label>Direccion de mail</Form.Label>
              <Form.Control type='email' placeholder='nombre@email.com' />
            </Form.Group>
            <Form.Group controlId='formGroupPhone'>
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type='text'
                placeholder='Ingrese aqui su numeero de teléfono.'
              />
            </Form.Group>
            <Form.Group controlId='form.ControlTextarea1'>
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as='textarea' rows={3} />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
      <br />
      <div class='mapouter'>
        <div class='gmap_canvas'>
          <iframe
            width='600'
            height='500'
            id='gmap_canvas'
            src='https://maps.google.com/maps?q=guatemala&t=&z=13&ie=UTF8&iwloc=&output=embed'
            frameborder='0'
            scrolling='no'
            marginheight='0'
            marginwidth='0'
          ></iframe>
          <a href='https://www.whatismyip-address.com'></a>
        </div>
      </div>
    </Container>
  );
};

export default Contacto;
