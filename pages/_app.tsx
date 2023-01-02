import Layout from '../components/layout/layout';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap");
  // }, []);

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
