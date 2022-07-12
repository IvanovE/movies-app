import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Heading, Skeleton } from '@chakra-ui/react';
import {
  useGetMovieByIdQuery,
  useGetMovieReviewsQuery,
  useGetRecommendationsQuery
} from '../services/moviesEndpoints';
import ageLimit from '../assets/ageLimit.png';
import { pickMoviePropertiesToArray } from '../utils/utils';
import { ITransformedMovieDetails } from '../services/adapters/types/transforms';
import { Slider } from '../components/Slider';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { BREAKPOINTS } from '../theme/theme';
import { ReviewsSection } from '../components/ReviewsSection';

const styles = {
  container: {
    width: '100%',
    position: 'relative',
    marginBottom: '2rem'
  },
  backdrop: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(40%)',
    borderRadius: '4px'
  },
  infoContainer: {
    zIndex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    top: 0,
    left: 0
  },
  poster: {
    maxW: '300px',
    borderRadius: '4px'
  },
  ageLimitPng: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: '3rem'
  },
  description: {
    background: 'rgba(255, 255, 255, .5)',
    padding: '1rem',
    borderRadius: '4px'
  },
  title: {
    size:'xl',
    textAlign: 'center',
    marginBottom: '.5rem'
  }
};

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

type QueryParamTypes = {
  list: string
  page: string
  id: string
}

export const MovieDetails = () => {
  const { id: strId } = useParams<QueryParamTypes>();
  const id = Number(strId);

  const {
    data: movieDetails,
    isLoading: isMovieDetailsLoading
  } = useGetMovieByIdQuery(id);
  const {
    data: recommendedMoviesData,
    isLoading: isRecommendedMoviesLoading
  } = useGetRecommendationsQuery(id);
  const {
    data: movieReviews,
    isLoading: isMovieReviewsLoading
  } = useGetMovieReviewsQuery(id);

  const recommendedMovies = recommendedMoviesData?.results;
  const reviews = movieReviews?.results || [];

  const isLaptop = useMediaQuery(BREAKPOINTS.lg);
  const isTablet = useMediaQuery(BREAKPOINTS.md);

  const movieDescription = movieDetails
    ? pickMoviePropertiesToArray(
      movieDetails,
      properties)
    : [];

  const shouldShowComments = !!movieReviews?.totalResults;
  const shouldShowRecommendations = !!recommendedMovies?.length;

  return (
    <>
      <Skeleton isLoaded={!isMovieDetailsLoading}>
        {movieDetails &&
        <Box sx={styles.container}>
          {!isLaptop &&
            <Image src={movieDetails.backdrop} sx={styles.backdrop}/>
          }
          <Box
            sx={styles.infoContainer}
            display={isTablet ? 'block' : 'flex'}
            position={isLaptop ? 'relative' : 'absolute'}
          >
            <Box position='relative'>
              <Image
                src={movieDetails.poster}
                alt={movieDetails.title}
                sx={styles.poster}
                margin={isTablet ? '0 auto 2rem' : '0 auto'}
              />
              {movieDetails.adult &&
                <Image
                  src={ageLimit}
                  alt='18+'
                  sx={styles.ageLimitPng}
                />
              }
            </Box>
            <Box
              sx={styles.description}
              width={isTablet ? '100%' : '50%'}
            >
              <Heading sx={styles.title}>
                {movieDetails.title}
              </Heading>
              {movieDescription?.map((field, index) => (
                <Box key={index}>
                  {field}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        }
      </Skeleton>

      <Skeleton isLoaded={!isMovieReviewsLoading}>
        {shouldShowComments &&
          <ReviewsSection
            results={reviews}
            totalResults={movieReviews?.totalResults}
          />
        }
      </Skeleton>

      <Skeleton isLoaded={!isRecommendedMoviesLoading}>
        {shouldShowRecommendations &&
          <Slider
            {...recommendationsConfig}
            moviesData={recommendedMovies}
          />
        }
      </Skeleton>
    </>
  );
};
