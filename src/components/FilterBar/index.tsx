import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../api/getCategories";
import { CategoryItem } from "../CategoryItem";
import { TCategoryItem } from "../../types";
import styles from "./FilterBar.module.scss";
import { useActive } from "../../hooks/useActive";
import { useLocation } from "react-router-dom";

type IFilterBarProps = {
  handleCategorySelect: (e: any) => void;
};

export const FilterBar: React.FC<IFilterBarProps> = ({
  handleCategorySelect,
}) => {
  const { active } = useActive();
  const { pathname } = useLocation();
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div
      className={styles["filter-bar"]}
      style={{ display: pathname === "/create" ? "none" : "" }}
    >
      <ul>
        {data.data.map((item: TCategoryItem) => (
          <CategoryItem
            key={item.id}
            data={item}
            handleCategorySelect={handleCategorySelect}
            active={active}
          />
        ))}
      </ul>
    </div>
  );
};
