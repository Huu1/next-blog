import type { AppProps } from "next/app";
import React from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import "tailwindcss/tailwind.css";
import "../styles/react-markdown.css";
import '../styles/globals.css';

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
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
