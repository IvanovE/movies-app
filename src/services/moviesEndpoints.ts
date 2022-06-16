import env from 'react-dotenv';
import { moviesService } from './baseService';
import {
  ITransformedMovieDetails,
  ITransformedMoviesGroup,
  ITransformedReviews
} from './adapters/types/transforms';
import {
  transformGetSingleMovie,
  transformMoviesGroup,
  transformReviews
} from './adapters/adapter';

export const IMG_URL_500 = 'https://image.tmdb.org/t/p/w500';
export const IMG_URL_ORIGINAL = 'https://image.tmdb.org/t/p/original';

export const moviesEndpoints = moviesService.injectEndpoints({
  endpoints: (build) => ({
    getMovies: build.query<ITransformedMoviesGroup, { list: string, page: number }>({
      query: ({ list, page }) => `/movie/${list}?api_key=${env.API_KEY}&page=${page}`,
      transformResponse: transformMoviesGroup
    }),
    getSimilar: build.query<ITransformedMoviesGroup, number>({
      query: (id) => `/movie/${id}/similar?api_key=${env.API_KEY}`,
      transformResponse: transformMoviesGroup
    }),
    getLatest: build.query<ITransformedMovieDetails, void>({
      query: () => `/movie/latest?api_key=${env.API_KEY}`,
      transformResponse: transformGetSingleMovie
    }),
    getMovieById: build.query<ITransformedMovieDetails, number>({
      query: (id) => `/movie/${id}?api_key=${env.API_KEY}`,
      transformResponse: transformGetSingleMovie
    }),
    getMovieReviews: build.query<ITransformedReviews, number>({
      query: (id) => `/movie/${id}/reviews?api_key=${env.API_KEY}`,
      transformResponse: transformReviews
    }),
    searchMovie: build.query<ITransformedMoviesGroup, string>({
      query: (query) => `search/movie?api_key=${env.API_KEY}&query=${query}`,
      transformResponse: transformMoviesGroup
    })
  })
});

export const {
  useGetMoviesQuery,
  useGetSimilarQuery,
  useGetLatestQuery,
  useGetMovieByIdQuery,
  useGetMovieReviewsQuery,
  useSearchMovieQuery
} = moviesEndpoints;