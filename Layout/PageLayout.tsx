import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import PageTransition from "../components/pagetransition";

export default function Layout({ children }: any) {
  return (
    <>
      <div className="App dark:bg-dark-bg bg-light-bg   transition-all duration-200 ">
        <div className="flex-col min-h-screen mr-auto ml-auto mt-0 mb-0 flex  overflow-hidden">
          <Header />
          <main className="mt-6 flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>
        <ScrollTop speed={250} target={0} />
      </div>
    </>
  );
}
