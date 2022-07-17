import React, { useMemo } from 'react';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import { Box, List, ListItem } from '@chakra-ui/react';
import { ListItemWithColorMode } from '../theme/components/CustomListItem';

const styles = {
  container: {
    marginBottom: '2rem',
    width: '100%'
  },
  list: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 2
  },
  item: {
    cursor: 'pointer',
    padding: '.5rem .8rem',
    borderRadius: '4px'
  },
  activeItem: {
    cursor: 'pointer',
    backgroundColor: '#A0A0A0',
    padding: '.5rem .8rem',
    borderRadius: '4px'
  },
  activeArrow: {
    cursor: 'pointer',
    padding: '.5rem .8rem'
  },
  disabledArrow: {
    cursor: 'not-allowed',
    padding: '.5rem .8rem',
    color: '#A0A0A0'
  }
};

const DOTS = '...';

type PropTypes = {
  onPageChange: (page: number) => void
  totalCount: number
  currentPage: number
  siblingCount?: number
  pageSize?: number
}

const range = (start: number, end: number): (string | number)[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => i + start);
};

export const Pagination = ({
  onPageChange,
  totalCount,
  currentPage,
  siblingCount = 1,
  pageSize = 1
}: PropTypes) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const totalPageNumbers = siblingCount + 5;
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount,];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange,];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex,];
    }
    return [];
  }, [totalCount, pageSize, siblingCount, currentPage,]);

  const onNext = () => onPageChange(currentPage + 1);

  const onPrevious = () => onPageChange(currentPage - 1);

  const lastPage = paginationRange[paginationRange.length - 1];

  if (paginationRange.length < 2) {
    return null;
  }

  return (
    <Box sx={styles.container}>
      <List sx={styles.list}>
        <ListItem
          onClick={onPrevious}
          sx={currentPage === 1
            ? styles.disabledArrow
            : styles.activeArrow
          }
        >
          <RiArrowLeftSLine/>
        </ListItem>

        {paginationRange.map((pageNumber, i) => {
          if (pageNumber === DOTS) {
            return <ListItem key={i}>&#8230;</ListItem>;
          }
          return (
            <ListItemWithColorMode
              key={i}
              variant='solid'
              onClick={() => onPageChange(Number(pageNumber))}
              sx={pageNumber === currentPage
                ? styles.activeItem
                : styles.item
              }
            >
              {pageNumber}
            </ListItemWithColorMode>
          );
        })}

        <ListItemWithColorMode
          onClick={onNext}
          variant='ghost'
          sx={currentPage === lastPage
            ? styles.disabledArrow
            : styles.activeArrow
          }
        >
          <RiArrowRightSLine/>
        </ListItemWithColorMode>
      </List>
    </Box>
  );
};
