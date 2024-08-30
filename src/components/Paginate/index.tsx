import React from "react";
import ReactPaginate from "react-paginate";
import { TAudios } from "../../types";
import styles from "./Paginate.module.scss";

type PaginateProps = {
  handlePageChange: (page: number) => void;
  currentPage: number;
  data: TAudios;
};

const Paginate: React.FC<PaginateProps> = ({
  handlePageChange,
  currentPage,
  data,
}) => {
  const handlePageClick = (selectedItem: { selected: number }) => {
    handlePageChange(selectedItem.selected + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <ReactPaginate
      pageCount={Math.ceil(data.pagination.records / 18)}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      className={styles.paginate}
      onPageChange={handlePageClick}
      forcePage={currentPage - 1}
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      activeClassName={styles.selected}
      breakClassName={styles.break}
    />
  );
};

export default Paginate;
