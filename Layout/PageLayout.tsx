import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";

export default function Layout({ children }: any) {
  return (
    <div className="App dark:bg-dark-bg bg-light-bg min-h-screen transition-all duration-200">
      <div className=" px-5 pt-5 flex flex-col h-full mr-auto ml-auto mt-0 mb-0 max-w-4xl">
        <Header />
        <main className="mt-5">{children}</main>
        {/* <ScrollTop
          speed={250}
          target={0}
         /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}
