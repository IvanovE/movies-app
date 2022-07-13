import { moviesService } from './baseService';
import {
  ITransformedMovieTeam,
  ITransformedMovieDetails,
  ITransformedMoviesGroup,
  ITransformedReviews
} from './adapters/types/transforms';
import {
  transformGetSingleMovie,
  transformMoviesGroup,
  transformGetMovieReviews,
  transformGetMovieTeam
} from './adapters/adapter';

export const IMG_URL_500 = 'https://image.tmdb.org/t/p/w500';
export const IMG_URL_ORIGINAL = 'https://image.tmdb.org/t/p/original';

const API_KEY = `api_key=${process.env.REACT_APP_API_KEY}`;

export const moviesEndpoints = moviesService.injectEndpoints({
  endpoints: (build) => ({
    getMovies: build.query<ITransformedMoviesGroup, { list: string, page: number }>({
      query: ({ list, page }) => `/movie/${list}?${API_KEY}&page=${page}`,
      transformResponse: transformMoviesGroup
    }),
    getRecommendations: build.query<ITransformedMoviesGroup, number>({
      query: (id) => `/movie/${id}/recommendations?${API_KEY}`,
      transformResponse: transformMoviesGroup
    }),
    getLatest: build.query<ITransformedMovieDetails, void>({
      query: () => `/movie/latest?${API_KEY}`,
      transformResponse: transformGetSingleMovie
    }),
    getMovieById: build.query<ITransformedMovieDetails, number>({
      query: (id) => `/movie/${id}?${API_KEY}`,
      transformResponse: transformGetSingleMovie
    }),
    getMovieReviews: build.query<ITransformedReviews, number>({
      query: (id) => `/movie/${id}/reviews?${API_KEY}`,
      transformResponse: transformGetMovieReviews
    }),
    getMovieTeam: build.query<ITransformedMovieTeam, number>({
      query: (id) => `movie/${id}/credits?${API_KEY}&language=en-US`,
      transformResponse: transformGetMovieTeam
    }),
    searchMovie: build.query<ITransformedMoviesGroup, string>({
      query: (query) => `search/movie?${API_KEY}&query=${query}`,
      transformResponse: transformMoviesGroup
    })
  })
});

export const {
  useGetMoviesQuery,
  useGetRecommendationsQuery,
  useGetLatestQuery,
  useGetMovieByIdQuery,
  useGetMovieReviewsQuery,
  useGetMovieTeamQuery,
  useSearchMovieQuery
} = moviesEndpoints;
