import NavbarComponent from "../components/header/Navbar";
import TopHeader from "../components/header/TopHeader";
import Carrusel from "../components/carrusel/Carrusel";
import Contacto from "./contacto";

export default function Home() {
  return (
    <>
      <TopHeader />
      <NavbarComponent />
      <Navbar />
      <div className={styles.container}>
        <Carrusel></Carrusel>
      </div>
      <Contacto />
    </>
  );
}
