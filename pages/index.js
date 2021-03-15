import Header from "../containers/header/Header";
import Carousel from "../components/carousel/Carousel";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Carousel />
      </div>
    </>
  );
}
