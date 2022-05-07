import React from 'react';
import {
  Box,
  Heading,
  Image,
  CircularProgress,
  CircularProgressLabel,
  Text,
  Flex,
  Stack
} from '@chakra-ui/react';
import welcomeImage from '../assets/welcomeImage.jpg';
import { text } from '../constants/constants';

export const Welcome = () => {
  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
      <Image src={welcomeImage} alt='Welcome image' h='15rem' w='100%' objectFit='cover' mb={15} />
      <Heading as='h1' mb={20} textAlign='center'>
        {text.mainTitle}
      </Heading>
      <Stack justifyContent='center' width='100%' direction='row' spacing={10}>
        <Flex direction='column' align='center' justify='center'>
          <CircularProgress value={90} color='blue.400' size='150px'>
            <CircularProgressLabel>90%</CircularProgressLabel>
          </CircularProgress>
          <Text fontSize='3xl'>
            {text.goodReviews}
          </Text>
        </Flex>
        <Flex direction='column' align='center' justify='center'>
          <CircularProgress value={94} color='blue.400' size='150px'>
            <CircularProgressLabel>94%</CircularProgressLabel>
          </CircularProgress>
          <Text fontSize='3xl'>
            {text.kinoposikRating}
          </Text>
        </Flex>
        <Flex direction='column' align='center' justify='center'>
          <CircularProgress value={89} color='blue.400' size='150px'>
            <CircularProgressLabel>89%</CircularProgressLabel>
          </CircularProgress>
          <Text fontSize='3xl'>
            {text.kinopubRating}
          </Text>
        </Flex>
        <Flex flexDirection='column' align='center' justify='center'>
          <CircularProgress value={99} color='blue.400' size='150px'>
            <CircularProgressLabel>99%</CircularProgressLabel>
          </CircularProgress>
          <Text fontSize='3xl'>
            {text.userRating}
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
};
