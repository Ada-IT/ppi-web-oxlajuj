import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../containers/header/Header";
import Layout from "../components/Layout";
import Footer from "../components/footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

export default MyApp;
