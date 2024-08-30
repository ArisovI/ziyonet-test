import { useState } from "react";
import { TCategoryItem } from "../../types";
import { FaAngleDown } from "react-icons/fa";
import styles from "./CategoryItem.module.scss";
import { useNavigate } from "react-router-dom";

type CategoryItemProps = {
  data: TCategoryItem;
  handleCategorySelect: (e: any) => void;
  active: string;
};

export const CategoryItem: React.FC<CategoryItemProps> = ({
  data,
  handleCategorySelect,
  active,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleIsOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleSelect = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.stopPropagation();
    handleCategorySelect(id);
    localStorage.setItem("active number", id);
    navigate("/");
  };

  return (
    <li
      className={`${styles["category-item"]} ${
        active === data.id.toString() ? styles["active"] : ""
      }`}
    >
      <button
        onClick={(e) => handleSelect(e, data.id.toString())}
        type="button"
      >
        <p className={active === data.id.toString() ? styles["active"] : ""}>
          {data.name}
        </p>
        <span className={active === data.id.toString() ? styles["active"] : ""}>
          {data.total}
        </span>
        <button
          className={active === data.id.toString() ? styles["active"] : ""}
          onClick={handleIsOpen}
          type="button"
        >
          {data.childrens?.length > 0 ? (
            <FaAngleDown style={{ rotate: isOpen ? "180deg" : "0deg" }} />
          ) : (
            ""
          )}
        </button>
      </button>

      {isOpen ? (
        <ul className={styles.childrens}>
          {data.childrens?.map((item) => (
            <li
              key={item.id}
              className={active === item.id.toString() ? styles["active"] : ""}
            >
              <button
                type="button"
                onClick={(e) => handleSelect(e, item.id.toString())}
              >
                <p
                  className={
                    active === item.id.toString() ? styles["active"] : ""
                  }
                >
                  {item.name}
                </p>
                <span
                  className={
                    active === item.id.toString() ? styles["active"] : ""
                  }
                >
                  {item.total}
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </li>
  );
};
