import Image from "react-bootstrap/Image";
import style from "./Hero.module.css";
import imgs from "./imgs";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();

  const heroType = imgs.find((img) => router.asPath == img.type);

  return (
    <div className={style.contentImage}>
      <Image
        className={style.img}
        src={heroType.img}
        style={{ height: "200px", objectFit: "cover" }}
        fluid
      />
      <h1 className={style.textImage}>{heroType.title}</h1>
    </div>
  );
};
export default Hero;

