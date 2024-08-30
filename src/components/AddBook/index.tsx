import { Link, useLocation } from "react-router-dom";
import styles from "./AddBook.module.scss";
export const AddBook = () => {
  const location = useLocation();

  return (
    <div
      className={`${styles["add-book"]} ${
        location.pathname === "/login" ? styles["visible"] : ""
      }`}
    >
      <Link to="/create">
        <span>+</span>
        <p>Добавить аудиокнигу</p>
      </Link>
    </div>
  );
};
