import Carousel from "../components/carousel/Carousel";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Carousel />
      </div>
    </>
  );
}
