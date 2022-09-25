import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="bg-ct-grayish-20">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
