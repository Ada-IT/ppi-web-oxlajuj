import Image from "react-bootstrap/Image";
import style from "./Partners.module.css";
/* import imgs from "./imgs";
import { useRouter } from "next/router"; */

const Partners = () => {
  /*   const router = useRouter();
  
    const heroType = imgs.find((img) => router.asPath == img.type); */

  return (
    <>
      <div className={style.contentImage}>
        <h1 className={style.textImage}>Estas son nuestras Alianzas</h1>
        <Image
          src="./images/shape_03.png"
          className={style.img}
        />
        <Image
          src="./images/shape_03.png"
          className={style.img}
        />
        <Image
          src="./images/shape_03.png"
          className={style.img}
        />
        <Image
          src="./images/shape_03.png"
          className={style.img}
        />
        <Image
          src="./images/shape_03.png"
          className={style.img}
        />
        <Image
          src="./images/shape_03.png"
          className={style.img}
        />
      </div>
    </>
  );
};
export default Partners;

