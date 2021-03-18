import Image from "react-bootstrap/Image";
import style from "./Hero.module.css";

const Hero = () => {
    return (
        <div className={style.contentImage}>
                <Image src='./images/contact-bg.jpg' fluid style={{ height: 300 }} />
                <h1 className={style.textImage}>Contacto</h1>
        </div>
    );
}
export default Hero;

