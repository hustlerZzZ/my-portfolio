import styles from "./Footer.module.css";
import { FaSquareXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.nav}>
        <ul>
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
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className={styles.icons}>
        <ul>
          <li>
            <a href="https://www.twitter.com/iamhustlerzzz">
              <FaSquareXTwitter className={styles.icon} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/princepal0/">
              <FaLinkedin className={styles.icon} />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/iamhustler.z">
              <FaInstagram className={styles.icon} />
            </a>
          </li>
        </ul>
      </div>
      <p className={styles.copyright}>
        &copy; 2024 Prince Pal. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
