import NavbarComponent from "../components/header/Navbar";
import TopHeader from "../components/header/TopHeader";
import Carrusel from "../components/carrusel/Carrusel";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <TopHeader />
      <NavbarComponent />

      <div className={styles.container}>
        <Carrusel></Carrusel>
      </div>
    </>
  );
}
