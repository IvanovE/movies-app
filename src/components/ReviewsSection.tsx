import React, { useState, useRef, useEffect } from 'react';
import { Avatar, Box, Text } from '@chakra-ui/react';
import { Pagination } from './Pagination';
import { ReadMore } from './ReadMore';
import { ITransformedReviews } from '../services/adapters/types/transforms';
import { normalizeDate } from '../utils/utils';
import { useUpdatedEffect } from '../hooks/useUpdatedEffect';

const styles = {
  container: {
    border: '2px solid',
    borderColor: 'cyan.600',
    borderRadius: '4px',
    marginBottom: '2rem'
  },
  card: {
    padding: '1rem'
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1rem'
  },
  info: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: '1rem'
  },
  author: {
    fontWeight: 'bold',
    fontSize: 'xl'
  },
  date: {
    fontStyle: 'italic'
  }
};

const REVIEWS_PER_PAGE = 3;

export const ReviewsSection = ({ results: movieReviews, totalResults }: ITransformedReviews) => {
  const [currentPage, setCurrentPage,] = useState(1);
  const reviewSectionRef = useRef<HTMLDivElement>(null);

  // todo Остаемся на том же компоненте, нажав на фильм в реках, state комментов остается
  useUpdatedEffect(
    () => setCurrentPage(1),
    [window.location.pathname,]
  );

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    reviewSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const reviews = movieReviews.slice(REVIEWS_PER_PAGE * (currentPage - 1), REVIEWS_PER_PAGE * currentPage);

  return (
    <Box sx={styles.container} ref={reviewSectionRef}>
      {reviews?.map((review) => (
        <Box key={review.id} sx={styles.card}>
          <Box sx={styles.heading}>
            <Box sx={styles.info}>
              <Avatar
                name={review.author}
                src={review.avatar?.slice(1)}
                sx={styles.avatar}
              />
              <Text sx={styles.author}>
                {review.author}
              </Text>
            </Box>
            <Text sx={styles.date}>
              {normalizeDate(review.createdAt)}
            </Text>
          </Box>
          <ReadMore text={review.content} />
        </Box>
      ))}
      <Pagination
        totalCount={totalResults}
        currentPage={currentPage}
        onPageChange={onPageChange}
        pageSize={REVIEWS_PER_PAGE}
      />
    </Box>
  );
};
