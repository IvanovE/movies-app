import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

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
  img: {
    borderRadius: '4px',
    imageRendering: '-webkit-optimize-contrast',
    aspectRatio: '2/3'
  },
  title: {
    marginTop: 2,
    fontSize: 'xl'
  }
};

type PropTypes = {
  id: number
  name: string
  popularity: string
  poster: string
  character: string
}

export const ActorCard = ({ id, name, popularity, poster, character }: PropTypes) => {
  return (
    <Box sx={styles.container}>
      <Link to={`/actor/${id}`}>
        <Box sx={styles.imgContainer}>
          <Image src={poster} alt={name} sx={styles.img} />
          <Text sx={styles.rating}>
            {popularity}
          </Text>
        </Box>
        <Text sx={styles.title}>
          {character
            ? `${name} (${character})`
            : name
          }
        </Text>
      </Link>
    </Box>
  );
};
