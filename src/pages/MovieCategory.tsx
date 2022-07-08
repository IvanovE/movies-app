import React from 'react';
import { useParams } from 'react-router-dom';
import {
  SimpleGrid,
  Box,
  Heading,
  Skeleton
} from '@chakra-ui/react';
import { useGetMoviesQuery } from '../services/moviesEndpoints';
import { MovieCard } from '../components/MovieCard';

const titles = {
  now_playing: 'Now Playing',
  top_rated: 'Top Rated',
  popular: 'Popular',
  upcoming: 'Upcoming'
};

export const MovieCategory = () => {
  const { list, page: strPage } = useParams<{list: keyof typeof titles, page: string}>();
  const page = Number(strPage);
  const { data, isLoading } = useGetMoviesQuery({ list, page });
  const movies = data?.results;

  return (
    <>
      <Heading size='2xl' mb='2rem'>
        {titles[list]}
      </Heading>
      <Skeleton isLoaded={!isLoading}>
        <SimpleGrid
          gap={6}
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
    </>
  );
};
