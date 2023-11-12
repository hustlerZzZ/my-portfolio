import styles from "./MobileNav.module.css";

interface Props {
  active: boolean;
}
function MobileNav({ active }: Props) {
  return (
    <div className={`${styles.nav} ${active ? styles.active : styles.hidden}`}>
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
          <a href="#">Contact Me</a>
        </li>
      </ul>
      <div className={styles.btn}>
        <a href="https://github.com/hustlerZzZ" target="_blank">
          Github Profile
        </a>
      </div>
    </div>
  );
}

export default MobileNav;
