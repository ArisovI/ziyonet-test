import { AudioItem } from "../AudioItem";
import { TAudios, TAudiosItem } from "../../types";
import Paginate from "../Paginate";
import styles from "./Audios.module.scss";
import { AiFillBook } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

type IAudiosProps = {
  data: TAudios;
  isLoading: boolean;
  handleSelect: (e: string) => void;
  selectValue: string;
  handlePageChange: (page: number) => void;
  currentPage: number;
};

export const Audios: React.FC<IAudiosProps> = ({
  data,
  isLoading,
  handleSelect,
  selectValue,
  handlePageChange,
  currentPage,
}) => {
  const location = useLocation();

  if (isLoading) {
    return <div>loading...</div>;
  }

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
          <select
            onChange={(event) => handleSelect(event.target.value)}
            value={selectValue}
          >
            <option value="">Все аудиокниги</option>
            <option value="recent">Недавно добавленные</option>
            <option value="popular">По рейтингу</option>
            <option value="downloads">По загрузкам</option>
            <option value="best">По прослушиваниям</option>
          </select>
        </div>

        <ul className={styles["audios-content"]}>
          {data.data.map((item: TAudiosItem) => (
            <AudioItem key={item.id} data={item} />
          ))}
        </ul>

        <Paginate
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          data={data}
        />
      </div>
    </div>
  );
};
