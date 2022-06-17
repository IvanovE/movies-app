import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import env from 'react-dotenv';
import {
  transformMoviesGroup,
  transformGetSingleMovie,
  transformReviews
} from './transformAdapter';
import {
  ITransformedMovieDetails,
  ITransformedMoviesGroup,
  ITransformedReviews
} from '../../types/transforms';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/'
  }),
  endpoints: (build) => ({
    getNowPlaying: build.query<ITransformedMoviesGroup, void>({
      query: () => `/movie/now_playing?api_key=${env.API_KEY}`,
      transformResponse: transformMoviesGroup
    }),
    getUpcoming: build.query<ITransformedMoviesGroup, void>({
      query: () => `/movie/upcoming?api_key=${env.API_KEY}`,
      transformResponse: transformMoviesGroup
    }),
    getTopRated: build.query<ITransformedMoviesGroup, void>({
      query: () => `/movie/top_rated?api_key=${env.API_KEY}`,
      transformResponse: transformMoviesGroup
    }),
    getPopular: build.query<ITransformedMoviesGroup, void>({
      query: () => `/movie/popular?api_key=${env.API_KEY}`,
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
