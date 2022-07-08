import React, { useMemo } from "react";

const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 2,
  currentPage,
}) => {
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize);
        const range = (start, end) => {
            
        }

  }, [
    totalCount,
    pageSize,
    siblingCount,
    currentPage,
  ]);
  return paginationRange;
};

export default usePagination;
