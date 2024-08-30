import { AiFillBook, AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./Skeleton.module.scss";

export const SkeletonBlock = () => {
  return (
    <div
      className={styles.audios}
      style={{
        display:
          location.pathname === "/create" || location.pathname.includes("book")
            ? "none"
            : "",
      }}
    >
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <h2>
            <AiFillBook />
            Аудиокниги
          </h2>
          <Link to="/create" className={styles.create}>
            +
          </Link>
          <div className={styles.select}>
            <button>
              <AiFillSetting />
            </button>
          </div>
        </div>

        <ul className={styles["audios-content"]}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
