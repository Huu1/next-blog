import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: any) {
  useEffect(() => {
    document.querySelector("body")?.classList.add("dark:bg-gray-800");
  }, []);
  return (
    <div
      className="App px-5 pt-10  flex flex-col"
      style={{
        minHeight: "100vh",
        margin: "0 auto",
        maxWidth: "980px",
        overflowX: "hidden",
      }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
