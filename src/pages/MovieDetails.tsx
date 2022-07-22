import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Heading, Skeleton } from '@chakra-ui/react';
import {
  useGetMovieByIdQuery,
  useGetMovieReviewsQuery,
  useGetRecommendationsQuery,
  useGetMovieTeamQuery
} from '../services/moviesEndpoints';
import { ActorSliderWrapper } from '../components/Slider/Wrappers/ActorSliderWrapper';
import { MovieSliderWrapper } from '../components/Slider/Wrappers/MovieSliderWrapper';
import { ReviewsSection } from '../components/ReviewsSection';
import { getMovieDescription } from '../utils/utils';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { BoxWithColorMode } from '../theme/components/CustomBox';
import { BREAKPOINTS } from '../theme/theme';
import { ITransformedMovieDetails } from '../services/adapters/types/transforms';
import ageLimit from '../assets/ageLimit.png';

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
    borderRadius: '4px',
    imageRendering: '-webkit-optimize-contrast',
    aspectRatio: '2/3'
  },
  ageLimitPng: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: '3rem'
  },
  description: {
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
  'status'
];

const sliderConfig = {
  recommendations: {
    title: 'Recommendations',
    delay: 5000
  },
  actors: {
    title: 'Actors',
    delay: 10_000
  }
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
    data: movieRecommendations,
    isLoading: isMovieRecommendationsLoading
  } = useGetRecommendationsQuery(id);
  const {
    data: movieReviews,
    isLoading: isMovieReviewsLoading
  } = useGetMovieReviewsQuery(id);
  const {
    data: movieTeam,
    isLoading: isMovieTeamLoading
  } = useGetMovieTeamQuery(id);

  const isLaptop = useMediaQuery(BREAKPOINTS.lg);
  const isTablet = useMediaQuery(BREAKPOINTS.md);

  const movieDescription = movieDetails
    ? getMovieDescription(movieDetails, properties)
    : [];

  const { results: recommendations } = movieRecommendations || {};
  const { results: reviews } = movieReviews || {};
  const { actors } = movieTeam || {};

  const shouldShowRecommendations = !!recommendations?.length; // Boolean(...) crash ts, ts bug?
  const shouldShowReviews = !!reviews?.length && !!movieReviews?.totalResults;
  const shouldShowActors = !!actors?.length;

  const hasBackdrop = Boolean(movieDetails?.backdrop);

  return (
    <>
      <Skeleton isLoaded={!isMovieDetailsLoading}>
        {movieDetails &&
        <Box sx={styles.container}>
          {!isLaptop && hasBackdrop &&
            <Image src={movieDetails.backdrop} sx={styles.backdrop}/>
          }
          <Box
            sx={styles.infoContainer}
            display={isTablet ? 'block' : 'flex'}
            position={isLaptop || !hasBackdrop ? 'relative' : 'absolute'}
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
            <BoxWithColorMode
              sx={styles.description}
              width={isTablet ? '100%' : '50%'}
            >
              <Heading sx={styles.title} colorScheme='lightTheme'>
                {movieDetails.title}
              </Heading>
              {movieDescription?.map((field, index) => (
                <Box key={index}>
                  {field}
                </Box>
              ))}
            </BoxWithColorMode>
          </Box>
        </Box>
        }
      </Skeleton>

      <Skeleton isLoaded={!isMovieReviewsLoading}>
        {shouldShowReviews &&
          <ReviewsSection
            results={reviews}
            totalResults={movieReviews?.totalResults}
            movieId={id}
          />
        }
      </Skeleton>

      <Skeleton isLoaded={!isMovieTeamLoading}>
        {shouldShowActors &&
          <ActorSliderWrapper
            config={sliderConfig.actors}
            data={actors}
          />
        }
      </Skeleton>

      <Skeleton isLoaded={!isMovieRecommendationsLoading}>
        {shouldShowRecommendations &&
            <MovieSliderWrapper
              config={sliderConfig.recommendations}
              data={recommendations}
            />
        }
      </Skeleton>
    </>
  );
};
