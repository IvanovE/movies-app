import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  SimpleGrid,
  Box,
  Heading,
  Skeleton
} from '@chakra-ui/react';
import { useGetMoviesQuery } from '../services/moviesEndpoints';
import { MovieCard } from '../components/MovieCard';
import { Pagination } from '../components/Pagination';

const titles = {
  now_playing: 'Now Playing',
  top_rated: 'Top Rated',
  popular: 'Popular',
  upcoming: 'Upcoming'
};

const moviesPerPage = 20;

type QueryParamTypes = {
  list: keyof typeof titles
  page: string
}

export const MovieCategory = () => {
  const { list, page: strPage } = useParams<QueryParamTypes>();
  const page = Number(strPage);
  const [currentPage, setCurrentPage,] = useState(page);
  const history = useHistory();
  const { data, isLoading } = useGetMoviesQuery({ list, page });
  const movies = data?.results;

  const onPageChange = (page: number): void => {
    setCurrentPage(page);
    history.push(`${page}`);
  };

  return (
    <>
      <Heading size='2xl' mb='2rem'>
        {titles[list]}
      </Heading>
      <Skeleton isLoaded={!isLoading}>
        <SimpleGrid
          gap={6}
          marginBottom='2rem'
          columns={{
            xs: 1,
            sm: 2,
            md: 2,
            lg: 3,
            xl: 4
          }}
        >
          {!isLoading &&
            movies?.map((movie) => (
              <Box key={movie.id}>
                <MovieCard
                  id={movie.id}
                  title={movie.title}
                  adult={movie.adult}
                  rating={movie.rating}
                  poster={movie.poster}
                />
              </Box>
            ))
          }
        </SimpleGrid>
      </Skeleton>
      {data?.totalResults &&
        <Pagination
          totalCount={data.totalResults}
          currentPage={currentPage}
          onPageChange={onPageChange}
          pageSize={moviesPerPage}
        />
      }
    </>
  );
};
