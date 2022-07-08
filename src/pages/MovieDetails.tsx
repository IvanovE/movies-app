import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Flex, Heading, Skeleton } from '@chakra-ui/react';
import { useGetMovieByIdQuery, useGetRecommendationsQuery } from '../services/moviesEndpoints';
import ageLimit from '../assets/ageLimit.png';
import { pickMoviePropertiesToArray } from '../utils/utils';
import { ITransformedMovieDetails } from '../services/adapters/types/transforms';
import { Slider } from '../components/Slider';

const properties: Array<keyof ITransformedMovieDetails> = [
  'tagline',
  'genres',
  'overview',
  'rating',
  'runtime',
  'budget',
  'revenue',
  'companies',
  'countries',
  'release',
  'status',
];

const recommendationsConfig = {
  title: 'Recommendations',
  delay: 5000
};

export const MovieDetails = () => {
  const { id } = useParams<{list: string, page: string, id: string}>();
  const { data: movieDetails, isLoading: isMovieDetailsLoading } = useGetMovieByIdQuery(Number(id));
  const { data: recommendedMoviesData, isLoading: isRecommendedMoviesLoading } = useGetRecommendationsQuery(Number(id));
  const recommendedMovies = recommendedMoviesData?.results;

  const movieDescription = movieDetails
    ? pickMoviePropertiesToArray(
      movieDetails,
      properties)
    : [];

  return (
    <>
      <Skeleton isLoaded={!isMovieDetailsLoading}>
        {movieDetails &&
        <Box width='100%' position='relative'>
          <Image src={movieDetails.backdrop} sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(40%)',
            borderRadius:'4px'
          }} />
          <Flex zIndex={2} justifyContent='space-around' alignItems='center' height='100%' position='absolute' top={0} left={0}>
            <Box position='relative'>
              <Image src={movieDetails.poster} alt={movieDetails.title} maxW='300px' borderRadius='4px' />
              {movieDetails.adult &&
                <Image src={ageLimit} alt='18+' sx={{
                  position: 'absolute',
                  top: 2,
                  right: 2,
                  width: '3rem'
                }} />
              }
            </Box>
            <Box width='50%' background='rgba(255, 255, 255, .6)' padding='1rem' borderRadius='4px'>
              <Heading size='xl' textAlign='center' marginBottom='.5rem'>
                {movieDetails.title}
              </Heading>
              {movieDescription?.map((field, index) => (
                <Box key={index}>
                  {field}
                </Box>
              ))}
            </Box>
          </Flex>
        </Box>
        }
      </Skeleton>
      <Skeleton isLoaded={!isRecommendedMoviesLoading}>
        {recommendedMovies &&
          <Slider
            {...recommendationsConfig}
            moviesData={recommendedMovies}
          />
        }
      </Skeleton>
    </>
  );
};
