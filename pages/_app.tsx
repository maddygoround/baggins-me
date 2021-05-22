import "../assets/styles/main.css";
import "../assets/styles/prism.css";
import "react-notion/src/styles.css";
import { AppProps } from "next/app";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Baggins.me blog – RSS Feed"
          href="https://baggins.me/api/blog.xml"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
