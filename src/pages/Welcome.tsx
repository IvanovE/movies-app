import React from 'react';
import {
  Flex,
  Heading,
  Image,
  Stack
} from '@chakra-ui/react';
import welcomeImage from '../assets/welcomeImage.jpg';
import { CircularProgressBar } from '../components/CircularProgressBar';
import { text } from '../constants/text';

const styles = {
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: '15rem',
    width: '100%',
    objectFit: 'cover',
    marginBottom: '2rem'
  },
  heading: {
    marginBottom: '5rem',
    textAlign: 'center'
  },
  stack: {
    justifyContent: 'center',
    width: '100%'
  }
};

export const Welcome = () => {
  return (
    <Flex sx={styles.container}>
      <Image src={welcomeImage} alt='Welcome image' sx={styles.image} />
      <Heading as='h1' sx={styles.heading}>
        {text.mainTitle}
      </Heading>
      <Stack sx={styles.stack} direction='row' spacing={10}>
        <CircularProgressBar color='blue.400' size='150px' value={90} text={text.goodReviews} />
        <CircularProgressBar color='blue.400' size='150px' value={94} text={text.kinopoiskRating} />
        <CircularProgressBar color='blue.400' size='150px' value={89} text={text.kinopubRating} />
        <CircularProgressBar color='blue.400' size='150px' value={99} text={text.userRating} />
      </Stack>
    </Flex>
  );
};
