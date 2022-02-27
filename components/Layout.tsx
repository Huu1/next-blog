import Header from "./Header";

export default function Layout({ children }: any) {
  return (
    <div
      className="App px-5 pt-10 dark:bg-gray-800"
      style={{ minHeight: "100vh", margin: "0 auto", maxWidth: "980px" ,overflowX:'hidden'}}
    >
      <Header />
      <main>{children}</main>
    </div>
  );
}
