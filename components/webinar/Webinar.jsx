import style from "./Webinar.module.css";

const Webinar = () => {
    return (
        <div className={style.banner}>
            <img className={style.bannerImage} src='./images/webinar.png' />
            <div className={style.bannerText}>
                INGRESA TODOS LOS JUEVES PARTICIPÁ
                             <br />
                            DE NUESTROS WEBINARS POR FACEBOOK LIVE
                             <br />
                <span className={style.bannerTextStrong}>HORARIO: JUEVES 18 HS</span>
            </div>
            <div className={style.donate}>
                <button className={style.carBtn}>
                    PARTICIPAR DEL WEBINAR     </button>
            </div>
        </div>
    );
};

export default Webinar;
