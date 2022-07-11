import React, { useMemo } from "react";

const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 2,
  currentPage,
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;
    const range = (start, end) => {
      let length = end - start + 1;
      return Array.from({ length }, (_, id) => id + start);
    };

    /* 
    Case 1: If the number of pages is less than the page numbers we want to show in our pagination component, we return the range [1..totalPageCount] 
    */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    /* 
    Calculate left and rigth sibling index and make sure they are within range 1 and totalPageCount
    */
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    /* 
    We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2 
    */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;
    /*     
    Case 2: No left dots to show, but right dots to be shown 
    */
    // if (!shouldShowLeftDots  && shouldShowRightDots) {
    //   let leftItemCount = 3 + 2 * siblingCount;
    //   let leftRange = range(1, leftItemCount);
    //   return [...leftRange, DOTS]
    // }
  }, [totalCount, pageSize, siblingCount, currentPage]);
  return paginationRange;
};

export default usePagination;
