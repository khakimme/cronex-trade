import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="bg-grayish-blue-78">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
