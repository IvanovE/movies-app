import React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Swiper } from 'swiper/react';
import { Navigation, Scrollbar, Lazy, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';

const styles = {
  container: {
    paddingBottom: 8,
    position: 'relative'
  },
  headingContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2rem'
  },
  title: {
    size: '2xl',
    marginRight: '1rem'
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
  link?: string
  linkText?: string
  delay: number
  data: React.ReactNode[]
};

export const Slider = ({ title, link, linkText, delay, data }: PropTypes) => {

  return (
    <Box sx={styles.container}>
      <Box sx={styles.headingContainer}>
        <Heading sx={styles.title}>
          {title}
        </Heading>
        {link &&
            <Link to={link}>
              <Button
                rightIcon={<AiOutlineArrowRight/>}
                variant='solid'
                marginTop={2}
              >
                {linkText}
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
        {data}
      </Swiper>
    </Box>
  );
};
