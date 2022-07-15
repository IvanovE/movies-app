import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Slider } from '../Slider';
import { MovieCard } from '../../MovieCard';
import { ITransformedStandardMovie } from '../../../services/adapters/types/transforms';

type PropTypes = {
  config: {
    delay: number
    title: string
    link?: string
    linkText?: string
  }
  data: ITransformedStandardMovie[]
}

export const MovieSliderWrapper = ({ config, data }: PropTypes) => {
  const movieSlides = data.map((movie) => (
    <SwiperSlide key={movie.id}>
      <MovieCard
        id={movie.id}
        title={movie.title}
        adult={movie.adult}
        rating={movie.rating}
        poster={movie.poster}
      />
    </SwiperSlide>
  ));

  return (
    <Slider
      {...config}
      data={movieSlides}
    />
  );
};
