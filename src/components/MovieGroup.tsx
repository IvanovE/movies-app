import React from 'react';
import { Skeleton } from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { useGetMoviesQuery } from '../services/moviesEndpoints';
import { Slider } from './Slider';

type PropTypes = {
  title: string
  list: string
  page: number
  delay: number
};

export const MovieGroup = ({ title, list, page, delay }: PropTypes) => {
  const { data, isLoading } = useGetMoviesQuery({ list, page });
  const moviesData = data?.results;

  return (
    <Skeleton isLoaded={!isLoading}>
      {moviesData &&
        <Slider
          title={title}
          list={list}
          page={page}
          delay={delay}
          moviesData={moviesData}
        />
      }
    </Skeleton>
  );
};
