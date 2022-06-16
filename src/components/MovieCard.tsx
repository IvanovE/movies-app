import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ageLimit from '../assets/ageLimit.png';

const styles = {
  container: {
    display: 'flex',
    textAlign: 'center',
    marginBottom: '1rem',
    _hover: {
      transition: '0.3s ease-in-out transform',
      transform: 'scale(1.01)'
    }
  },
  rating: {
    position: 'absolute',
    bottom: '1rem',
    left: '50%',
    color: 'white',
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

type PropsType = {
  id: number
  list: string
  page: number
  poster: string | undefined
  title: string
  adult: boolean
  rating: string
}

export const MovieCard = ({ id, list, page, poster, title, adult, rating }: PropsType) => {
  return (
    <Box sx={styles.container}>
      <Link to={`/catalog/${list}/${page}/${id}`}>
        <Box sx={styles.imgContainer}>
          <Image src={poster} alt={title} />
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
