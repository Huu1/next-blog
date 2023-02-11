/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/google-font-display */
import type { AppProps } from "next/app";
import React from "react";
import Layout from "../Layout/PageLayout";
import DarkContext from "../context/themeContext";

import "../styles/globals.css";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <DarkContext>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AnimatePresence initial={true}>
        <Layout key={router.route}>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </DarkContext>
  );
}

export default MyApp;
