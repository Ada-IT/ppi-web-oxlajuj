import Image from "react-bootstrap/Image";
import hero from "./Hero.module.css";
import imgs from "./imgs";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();

  const heroType = imgs.filter((img) => router.asPath == img.type);

  return (
    <div className={hero.contentImage}>
      <Image className={hero.img} src={heroType[0].img} fluid />
      <h1 className={hero.textImage}>{heroType[0].title}</h1>
    </div>
  );
};
export default Hero;
