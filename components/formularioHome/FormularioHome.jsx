import style from "./FormularioHome.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const FormularioHome = () => {

    return (
        <Col className={style.formBk}>
            <h1 className={style.formTitle}>Sumate a nuestro equipo de Voluntarios</h1>
            <Form className={style.form}>
                <Form.Group className={style.formInput} controlId='formGroupName'>
                    <Form.Label className={style.formLabel} >Nombre</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Ingrese aqui su nombre completo.'
                    />
                </Form.Group>
                <Form.Group className={style.formInput} controlId='formGroupEmail'>
                    <Form.Label className={style.formLabel}>Direccion de mail</Form.Label>
                    <Form.Control type='email' placeholder='nombre@email.com' />
                </Form.Group>
                <div clasname={style.buttonCont}>
                    <a className={style.formButton} variant='primary' type='submit'>
                        Enviar
                </a>
                </div>
            </Form>

        </Col>
    )
};

export default FormularioHome;