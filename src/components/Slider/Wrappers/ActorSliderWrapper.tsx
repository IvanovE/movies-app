import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Slider } from '../Slider';
import { ActorCard } from '../../ActorCard';
import { ITransformedActor } from '../../../services/adapters/types/transforms';

type PropTypes = {
  config: {
    delay: number
    title: string
  }
  data: ITransformedActor[]
}

export const ActorSliderWrapper = ({ config, data }: PropTypes) => {
  const movieSlides = data.map((actor) => (
    <SwiperSlide key={actor.id}>
      <ActorCard
        id={actor.id}
        poster={actor.poster}
        name={actor.name}
        character={actor.character}
        popularity={actor.popularity}
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
