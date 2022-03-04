import type { AppProps } from "next/app";
import React from "react";
import Layout from "../components/Layout";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import DarkContext from "../context/themeContext";

import "../styles/globals.css";
import "../styles/markdown-body.css";
import "../styles/mardwon-body-dark.css";
import "../styles/nprogress.css";

initRouterListeners();
function initRouterListeners() {
  const routes: any = [];
  Router.events.on("routeChangeStart", (url) => {
    pushCurrentRouteInfo();
  });
  Router.events.on("routeChangeComplete", (url) => {
    window.requestAnimationFrame(() => window.scrollTo(0, 1));
    fixScrollPosition();
  });
  function pushCurrentRouteInfo() {
    routes.push({ pathname: Router.pathname, scrollY: window.scrollY });
  }
  function isBack() {
    return (
      routes.length >= 2 &&
      Router.pathname === routes[routes.length - 2].pathname
    );
  }
  function fixScrollPosition() {
    let scrollY = 0;
    if (isBack()) {
      routes.pop();
      const targetRoute = routes.pop() as any;
      scrollY = targetRoute?.scrollY;
    }
    window.requestAnimationFrame(() => window.scrollTo(0, scrollY));
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router?.events?.on) {
    router.events.on("routeChangeStart", NProgress.start);
    router.events.on("routeChangeComplete", NProgress.done);
    router.events.on("routeChangeError", NProgress.done);
  }

  return (
    <DarkContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DarkContext>
  );
}

export default MyApp;
