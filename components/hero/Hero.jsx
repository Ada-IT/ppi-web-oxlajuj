import Image from "react-bootstrap/Image";
import style from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={style.contentImage}>
      <Image
        className={style.img}
        src='./images/contact-bg.jpg'
        style={{ height: "200px", objectFit: "cover" }}
        fluid
      />
      <h1 className={style.textImage}>"Contacto"</h1>
    </div>
  );
};
export default Hero;
