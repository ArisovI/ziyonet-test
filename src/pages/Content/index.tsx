import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Audios } from "../../components/Audios";
import { FilterBar } from "../../components/FilterBar";
import { getAudios } from "../../api/getAudios";
import styles from "./Content.module.scss";
import { Outlet } from "react-router-dom";

export const Content = () => {
  const [selectValue, setSelectValue] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const { data, isLoading } = useQuery({
    queryKey: ["audios", selectValue, selectedCategory, currentPage],
    queryFn: () => getAudios(selectValue, selectedCategory, currentPage),
  });

  const handleSelect = (value: string) => {
    setSelectValue(value);
    setCurrentPage(1);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.content}>
      <FilterBar handleCategorySelect={handleCategorySelect} />
      <Audios
        data={data}
        isLoading={isLoading}
        handleSelect={handleSelect}
        selectValue={selectValue}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />

      <Outlet />
    </div>
  );
};
