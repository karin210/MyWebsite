import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import styles from "./styles/Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div>{children}</div>
      <Footer />
      <Nav />
    </div>
  );
}
