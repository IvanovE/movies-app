import React from 'react';
import { Skeleton } from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { useGetMoviesQuery } from '../services/moviesEndpoints';
import { MovieSliderWrapper } from './Slider/Wrappers/MovieSliderWrapper';
import { text } from '../constants/text';

type PropTypes = {
  title: string
  list: string
  page: number
  delay: number
};

export const MovieGroup = ({ title, list, page, delay }: PropTypes) => {
  const { data, isLoading } = useGetMoviesQuery({ list, page });
  const moviesData = data?.results;

  const link = `catalog/${list}/${page}`;
  const linkText = text.showMore;

  return (
    <Skeleton isLoaded={!isLoading}>
      {moviesData &&
        <MovieSliderWrapper
          config={{
            title,
            delay,
            link,
            linkText
          }}
          data={moviesData}
        />
      }
    </Skeleton>
  );
};
