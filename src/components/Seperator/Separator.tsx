import { BsCircle } from "react-icons/bs";
import styles from "./Seperator.module.css";
function Separator() {
  return (
    <div className={styles.separator}>
      <BsCircle className={styles.circle} />
      <div className={styles.stick}></div>
    </div>
  );
}

export default Separator;
