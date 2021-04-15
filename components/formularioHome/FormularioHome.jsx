import style from "./FormularioHome.module.css";
import Col from "react-bootstrap/Col";

const FormularioHome = () => {
  return (
    <Col className={style.formBk}>
      <h1 className={style.formTitle}>
        Sumate a nuestro equipo de Voluntarios
      </h1>
      <div className={style.buttonCont}>
        <a
          href='https://forms.gle/HNe6ZpEPwSLLhhfWA'
          className={style.formButton}
          variant='primary'
          type='submit'
        >
          Mas info...
        </a>
      </div>
    </Col>
  );
};

export default FormularioHome;
