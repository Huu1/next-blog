import type { AppProps } from "next/app";
import React from "react";
import Layout from "../Layout/PageLayout";
import DarkContext from "../context/themeContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DarkContext>
  );
}

export default MyApp;
