import { AudioItem } from "../AudioItem";
import { TAudios, TAudiosItem, TSelectValues } from "../../types";
import Paginate from "../Paginate";
import styles from "./Audios.module.scss";
import { AiFillBook } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { AiFillSetting } from "react-icons/ai";
import { useState } from "react";
import CustomSelect from "../ui/CustomSelect";
import { SkeletonBlock } from "../Skeleton";

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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(selectValue);

  const options: TSelectValues[] = [
    { value: "", label: "Все аудиокниги" },
    { value: "recent", label: "Недавно добавленные" },
    { value: "popular", label: "По рейтингу" },
    { value: "downloads", label: "По загрузкам" },
    { value: "best", label: "По прослушиваниям" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelected = (value: string, label: string) => {
    setSelected(label);
    setIsOpen(false);
    handleSelect(value);
  };

  if (isLoading) {
    return <SkeletonBlock />;
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
          <div className={styles.select}>
            <button onClick={toggleDropdown}>
              <AiFillSetting />
            </button>
            {isOpen && (
              <CustomSelect
                options={options}
                handleSelected={handleSelected}
                selected={selected}
              />
            )}
          </div>

          {/* <select
            onChange={(event) => handleSelect(event.target.value)}
            value={selectValue}
          >
            <option value="">Все аудиокниги</option>
            <option value="recent">Недавно добавленные</option>
            <option value="popular">По рейтингу</option>
            <option value="downloads">По загрузкам</option>
            <option value="best">По прослушиваниям</option>
          </select> */}
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
