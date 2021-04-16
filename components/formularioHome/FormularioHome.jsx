import style from "./FormularioHome.module.css";
import Col from "react-bootstrap/Col";

const FormularioHome = () => {
  return (
    <Col className={style.formBk}>
      <h1 className={style.formTitle}>
        Súmate a nuestro equipo de voluntarios
      </h1>
      <div className={style.buttonCont}>
        <a
          href='https://forms.gle/Zf5VTgSLPyCeXkhP6'
          className={style.formButton}
          variant='primary'
          type='submit'
        >
          Más info...
        </a>
      </div>
    </Col>
  );
};

export default FormularioHome;
