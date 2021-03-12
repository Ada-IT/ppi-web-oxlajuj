import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar/Navbar";
import Carrusel from "../components/carrusel/Carrusel"
export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Carrusel></Carrusel>
      </div>
    </>
  );
}
