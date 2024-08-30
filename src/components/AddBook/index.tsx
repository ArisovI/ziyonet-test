import { Link } from "react-router-dom";
import styles from "./AddBook.module.scss";
export const AddBook = () => {
  return (
    <div className={styles["add-book"]}>
      <Link to="/create">
        <span>+</span>
        <p>Добавить аудиокнигу</p>
      </Link>
    </div>
  );
};
