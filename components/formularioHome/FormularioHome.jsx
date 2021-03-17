import style from "./FormularioHome.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const FormularioHome = () => {

    return (
        <Col className={style.formBk}>
            <Form className={style.form}>
                <Form.Group className={style.formInput} controlId='formGroupName'>
                    <Form.Label >Nombre</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Ingrese aqui su nombre completo.'
                    />
                </Form.Group>
                <Form.Group className={style.formInput} controlId='formGroupEmail'>
                    <Form.Label color='# FFFFFF'>Direccion de mail</Form.Label>
                    <Form.Control type='email' placeholder='nombre@email.com' />
                </Form.Group>
            </Form>
            <Button className={style.formButton} variant='primary' type='submit'>
                Enviar
                </Button>
        </Col>
    )
};

export default FormularioHome;