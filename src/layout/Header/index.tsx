import { useState, useCallback, useMemo } from "react";
import { FaAlignRight, FaCircleUser } from "react-icons/fa6";
import { AiOutlineSearch, AiFillMessage, AiFillBell } from "react-icons/ai";
import { FaKey, FaUserLock, FaAngleDown } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

const options: string[] = ["O'zbekcha", "Узбекча", "Qaraqalpaqsha", "Русский"];

export const Header = () => {
  const { isUser } = useAuth();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("O'zbekcha");
  const navigate = useNavigate();

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleSelect = useCallback((option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  }, []);

  const filteredOptions = useMemo(
    () => options.filter((option) => option !== selectedOption),
    [selectedOption]
  );

  console.log(isUser);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <Link to="/">
            <img
              src="https://audio.ziyonet.uz/images/logo/logo-white-ru.svg"
              alt="Logo"
            />
          </Link>

          <div className={styles.search}>
            <input type="text" />

            <button>
              <AiOutlineSearch />
              <span>Поиск</span>
            </button>
          </div>

          <div className={styles.right}>
            <div className={styles.select}>
              <button className={styles.selectButton} onClick={toggleDropdown}>
                <span>{selectedOption}</span>
                <FaAngleDown />
              </button>
              {isOpen && (
                <ul>
                  {filteredOptions.map((option, index) => (
                    <li key={index} onClick={() => handleSelect(option)}>
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {isUser === null ? (
              <div className={styles["right-auth"]}>
                <Link to="/login">
                  <FaKey />
                  <span>Войти</span>
                </Link>
                <Link to="/login">
                  <FaUserLock />
                  <span>Регистрация</span>
                </Link>
              </div>
            ) : (
              <>
                <button type="button" className={styles.col}>
                  <AiFillMessage />
                </button>

                <button type="button" className={styles.col}>
                  <AiFillBell />
                </button>

                <button
                  type="button"
                  className={styles.login}
                  onClick={() => navigate("/login")}
                >
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

      {isUser === null && (
        <div className={styles.auth}>
          <Link to="/login">
            <FaKey />
            <span>Войти</span>
          </Link>
          <Link to="/login">
            <FaUserLock />
            <span>Регистрация</span>
          </Link>
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
