import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../containers/header/Header";
import Hero from "../components/hero/Hero"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Hero />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
