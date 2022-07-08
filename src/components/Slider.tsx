import React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Lazy, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import { MovieCard } from './MovieCard';
import { text } from '../constants/text';
import { ITransformedStandardMovie } from '../services/adapters/types/transforms';

const styles = {
  headingContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2rem'
  }
};

const breakpoints = {
  '1200': {
    'slidesPerView': 4
  },
  '992': {
    'slidesPerView': 3
  },
  '768': {
    'slidesPerView': 2
  },
  '576': {
    'slidesPerView': 1
  }
};

type PropTypes = {
  title: string
  list?: string
  page?: number
  delay: number
  moviesData: ITransformedStandardMovie[]
};

export const Slider = ({ title, list, page, delay, moviesData }: PropTypes) => {

  return (
    <Box paddingBottom={8} position='relative'>
      <Box sx={styles.headingContainer}>
        <Heading size='2xl' marginRight='1rem'>
          {title}
        </Heading>
        {list && page &&
            <Link to={`catalog/${list}/${page}`}>
              <Button
                rightIcon={<AiOutlineArrowRight/>}
                variant='solid'
                marginTop={2}
              >
                {text.showMore}
              </Button>
            </Link>
        }
      </Box>
      <Swiper
        modules={[Navigation, Scrollbar, Lazy, Autoplay,]}
        spaceBetween={30}
        navigation
        lazy
        autoplay={{ delay }}
        scrollbar={{ draggable: true }}
        breakpoints={breakpoints}
      >
        {moviesData &&
          moviesData.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard
                id={movie.id}
                title={movie.title}
                adult={movie.adult}
                rating={movie.rating}
                poster={movie.poster}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
};
