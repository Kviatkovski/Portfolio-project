import logo1 from "../../assets/icons/icons8-facebook.svg";
import logo2 from "../../assets/icons/icons8-instagram.svg";
import logo3 from "../../assets/icons/icons8-linkedin-circled.svg";
import logo4 from "../../assets/icons/icons8-github.svg";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.p}>Tel: 599-400-471</p>
        <p className={styles.p}>Mail: kviatkovsky21@gmail.com</p>
      </div>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a
            className={styles.a}
            href="https://www.facebook.com/kviat.kovsky.9"
          >
            <img src={logo1} alt="facebook icon" />
          </a>
        </li>
        <li className={styles.li}>
          <a
            className={styles.a}
            href="https://www.instagram.com/luka.kviatkovski/?next=%2F"
          >
            <img src={logo2} alt="instagram logo" />
          </a>
        </li>
        <li className={styles.li}>
          <a
            className={styles.a}
            href="https://www.linkedin.com/in/luka-kviatkovski-64b037242/"
          >
            <img src={logo3} alt="linkedin logo" />
          </a>
        </li>
        <li className={styles.li}>
          <a
            className={styles.a}
            href="https://github.com/CatUnderNewTent?tab=repositories"
          >
            <img src={logo4} alt="github logo" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
