import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ageLimit from '../assets/ageLimit.png';

const styles = {
  container: {
    display: 'flex',
    textAlign: 'center',
    marginBottom: '1rem',
    height: '100%',
    _hover: {
      transition: '0.3s ease-in-out transform',
      transform: 'scale(1.01)'
    }
  },
  img: {
    borderRadius: '4px',
    imageRendering: '-webkit-optimize-contrast',
    aspectRatio: '2/3'
  },
  rating: {
    position: 'absolute',
    bottom: '1rem',
    left: '50%',
    color: 'white',
    background: 'rgba(0, 0, 0, .6)',
    padding: '.5rem',
    borderRadius: '20px',
    transform: 'translate(-50%, 0)'
  },
  imgAgeLimit: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: '3rem'
  },
  imgContainer: {
    position: 'relative'
  },
  title: {
    marginTop: 2,
    fontSize: 'xl'
  }
};

type PropTypes = {
  id: number
  poster?: string
  title: string
  adult: boolean
  rating: string
}

export const MovieCard = ({ id, poster, title, adult, rating }: PropTypes) => {
  return (
    <Box sx={styles.container}>
      <Link to={`/movie/${id}`}>
        <Box sx={styles.imgContainer}>
          <Image src={poster} alt={title} sx={styles.img} />
          {adult &&
            <Image src={ageLimit} alt='18+' sx={styles.imgAgeLimit} />
          }
          <Text sx={styles.rating}>
            {rating}
          </Text>
        </Box>
        <Text sx={styles.title}>
          {title}
        </Text>
      </Link>
    </Box>
  );
};
