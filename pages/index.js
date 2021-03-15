import Header from "../containers/header/Header";
import Carrusel from "../components/carrusel/Carrusel";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Carrusel></Carrusel>
      </div>
    </>
  );
}
