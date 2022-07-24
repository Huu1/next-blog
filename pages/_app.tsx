import type { AppProps } from "next/app";
import React from "react";
import Layout from "../Layout/PageLayout";
import DarkContext from "../context/themeContext";

import "../styles/globals.css";

// initRouterListeners();
// function initRouterListeners() {
//   const routes: any = [];
//   let timer:NodeJS.Timeout;
//   Router.events.on("routeChangeStart", (url) => {
//     pushCurrentRouteInfo();
//     timer = setTimeout(() => {
//       NProgress.start();
//     }, 500);
//   });
//   Router.events.on("routeChangeComplete", (url) => {
//     if(timer) {
//       clearTimeout(timer)
//     }
//     NProgress.done();
//     window.requestAnimationFrame(() => window.scrollTo(0, 1));
//     fixScrollPosition();
//   });
//   Router.events.on("routeChangeError", NProgress.done);

//   function pushCurrentRouteInfo() {
//     routes.push({ pathname: Router.pathname, scrollY: window.scrollY });
//   }
//   function isBack() {
//     return (
//       routes.length >= 2 &&
//       Router.pathname === routes[routes.length - 2].pathname
//     );
//   }
//   function fixScrollPosition() {
//     let scrollY = 0;
//     if (isBack()) {
//       routes.pop();
//       const targetRoute = routes.pop() as any;
//       scrollY = targetRoute?.scrollY;
//     }
//     window.requestAnimationFrame(() => window.scrollTo(0, scrollY));
//   }
// }

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
