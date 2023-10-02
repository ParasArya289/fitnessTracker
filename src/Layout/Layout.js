import { Sidebar } from "../Components/Sidebar/Sidebar";
import "./Layout.css";


export const Layout = ({ children }) => {
  return (
    <main className="layout">
      <section className="sidebar">
        <Sidebar />
      </section>
      <section className="page">{children}</section>
    </main>
  );
};