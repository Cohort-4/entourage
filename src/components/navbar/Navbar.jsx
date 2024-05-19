import styles from "./navbar.module.css";
import navLinks from "./data";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className={styles.navbarContainer}>
      <nav className={styles.nav}>
        <section className={styles.logo}>Entourage</section>
        <ul className={styles.navLists}>
          {navLinks.map((link) => {
            return (
              <li key={link.id} className={styles.navList}>
                <Link className={styles.linkWrapper} to={link.path}> {link.title}</Link>
              </li>
            );
          })}
        </ul>
        <section className={styles}>
          <button className={styles.authBtn}>Login/Register</button>
        </section>
      </nav>
    </section>
  );
};
export default Navbar;
