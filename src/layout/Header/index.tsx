import { FaAlignRight, FaCircleUser } from "react-icons/fa6";
import { AiOutlineSearch, AiFillMessage, AiFillBell } from "react-icons/ai";
import { FaKey, FaUserLock } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import styles from "./Header.module.scss";

export const Header = () => {
  const { isUser } = useAuth();

  return (
    <>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <a href="#">
            <img
              src="https://audio.ziyonet.uz/images/logo/logo-white-ru.svg"
              alt=""
            />
          </a>

          <div className={styles.search}>
            <input type="text" />

            <button>
              <AiOutlineSearch />
              <span>Поиск</span>
            </button>
          </div>

          <div className={styles.right}>
            <select name="" id="" className={styles.select}>
              <option value="">O'zbekcha</option>
              <option value="">Узбекча</option>
              <option value="">Qaraqalpaqsha</option>
              <option value="">Русский</option>
            </select>

            {isUser === null ? (
              <div className={styles["right-auth"]}>
                <a href="#">
                  <FaKey />
                  <span>Войти</span>
                </a>
                <a href="#">
                  <FaUserLock />
                  <span>Регистрация</span>
                </a>
              </div>
            ) : (
              <>
                <button type="button" className={styles.col}>
                  <AiFillMessage />
                </button>

                <button type="button" className={styles.col}>
                  <AiFillBell />
                </button>

                <button type="button" className={styles.login}>
                  <FaCircleUser />
                </button>
              </>
            )}
            <button type="button" className={styles.menu}>
              <FaAlignRight />
            </button>
          </div>
        </div>
      </div>

      {!isUser === null ? (
        ""
      ) : (
        <div className={styles.auth}>
          <a href="#">
            <FaKey />
            <span>Войти</span>
          </a>
          <a href="#">
            <FaUserLock />
            <span>Регистрация</span>
          </a>
        </div>
      )}

      <div className={styles["search-bottom"]}>
        <div>
          <input type="text" />

          <button>
            <AiOutlineSearch />
            <span>Поиск</span>
          </button>
        </div>
      </div>
    </>
  );
};
