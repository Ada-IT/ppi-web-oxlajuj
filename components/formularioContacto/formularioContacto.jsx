import style from "../../styles/FormularioContacto.module.css"; 
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const FormularioContacto = () => {    

    return (
        <Col>
            <Form>
                <Form.Group controlId='formGroupName'>
                    <Form.Label className={style.prueba}>Nombre</Form.Label>
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
    )   
};

export default FormularioContacto;