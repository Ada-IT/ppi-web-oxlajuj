import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../containers/header/Header";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
