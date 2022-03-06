import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Music from "../components/Music/MusicInit";
import ScrollTop from "../components/ScrollTop";

export default function Layout({ children }: any) {
  useEffect(() => {
    document.querySelector("body")?.classList.add("dark:bg-gray-800");
  }, []);
  return (
    <div
      className="App px-5 pt-10 flex flex-col"
      style={{
        minHeight: "100vh",
        margin: "0 auto",
        maxWidth: "980px",
        overflowX: "hidden",
      }}
    >
      <Header />
      <main>{children}</main>
      <Music />
      <ScrollTop
        speed={250}
        target={0}
      />
      <Footer />
    </div>
  );
}
