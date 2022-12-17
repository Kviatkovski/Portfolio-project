import { Link } from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to="/">All Projects</Link>
        </li>
        <li className={styles.li}>
          <Link to="htmlcss">Html/Css</Link>
        </li>
        <li className={styles.li}>
          <Link to="javascript">JavaScript</Link>
        </li>
        <li className={styles.li}>
          <Link to="react">React</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
