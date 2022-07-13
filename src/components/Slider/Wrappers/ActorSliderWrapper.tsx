import { ITransformedActor } from '../../../services/adapters/types/transforms';
import { Slider } from '../Slider';
import { SwiperSlide } from 'swiper/react';
import React from 'react';
import { ActorCard } from '../../ActorCard';

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
