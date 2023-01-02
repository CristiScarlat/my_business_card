import Header from "../header/header";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Cristi Scarlat</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
      </Head>
      <Header />
      <>{children}</>
    </>
  );
}