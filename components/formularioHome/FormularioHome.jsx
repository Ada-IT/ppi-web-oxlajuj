import style from "./FormularioHome.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
//import Button from "react-bootstrap/Button";
//import Form from "react-bootstrap/Form";

const FormularioHome = () => {

    return (
        <Col className={style.formBk}> 
            <h1 className={style.formTitle}>Sumate a nuestro equipo de Voluntarios</h1>
            <div className={style.buttonCont}>
                <a href="https://forms.gle/hwZGp2mL3ppiHo6N8" className={style.formButton} variant='primary' type='submit'>
                    Mas info...
                </a>
            </div>
        </Col>
    )
};

export default FormularioHome;