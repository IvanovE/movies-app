import React from 'react';
import { Slider } from '../components/Slider';

const catalogConfig = [
  { title: 'Now Playing', list: 'now_playing', page: 1, delay: 5000 },
  { title: 'Top Rated', list: 'top_rated', page: 1, delay: 6000 },
  { title: 'Popular', list: 'popular', page: 1, delay: 7000 },
  { title: 'Upcoming', list: 'upcoming', page: 1, delay: 5000 },
];

export const Catalog = () => {
  return (
    <>
      {
        catalogConfig.map((conf) => (
          <Slider
            key={conf.title}
            title={conf.title}
            list={conf.list}
            page={conf.page}
            delay={conf.delay}
          />
        ))
      }
    </>
  );
};
