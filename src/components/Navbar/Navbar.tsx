import styles from "./Navbar.module.css";
import { useState } from "react";
import MobileNav from "./MobileNav.tsx";
function Navbar() {
  const [hamburger, setHamburger] = useState(false);
  return (
    <div className={styles.navbarTop}>
      <div className={styles.navbar}>
        <h5 className={styles.logo}>Portfolio</h5>
        <ul className={styles.nav}>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#">Contact Me</a>
          </li>
        </ul>
        <div className={`${styles.navContainer}`}>
          <a
            href="https://github.com/hustlerZzZ"
            target="_blank"
            className={`${styles.navbarButton}`}
          >
            Github Profile
          </a>
        </div>
        <div
          className={styles.hamburger}
          onClick={() => setHamburger((prevState) => !prevState)}
        >
          <div
            className={`${styles.bar} ${hamburger ? styles.animateBar1 : ""}`}
          ></div>
          <div
            className={`${styles.bar} ${hamburger ? styles.animateBar2 : ""}`}
          ></div>
          <div
            className={`${styles.bar} ${hamburger ? styles.animateBar3 : ""}`}
          ></div>
        </div>
      </div>
      <MobileNav active={hamburger} />
    </div>
  );
}

export default Navbar;
