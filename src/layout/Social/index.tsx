import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import styles from "./Social.module.scss";

export const Social = () => {
  return (
    <ul className={styles.social}>
      <li>
        <a href="#">
          <FaFacebookF />
        </a>
      </li>

      <li>
        <a href="#">
          <FaInstagram />
        </a>
      </li>

      <li>
        <a href="#">
          <FaTelegramPlane />
        </a>
      </li>

      <li>
        <a href="#">
          <FaYoutube />
        </a>
      </li>
    </ul>
  );
};
