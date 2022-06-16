import {
  ISingleMovieResponse,
  IMoviesGroupResponse,
  IMovieReviewsResponse
} from '../../types/responses';
import {
  IStandardMovie,
  IReview
} from '../../types/common';
import {
  IMG_URL_500,
  IMG_URL_ORIGINAL
} from '../moviesEndpoints';

const standardMovieTransform = (movie: IStandardMovie) => {
  return {
    id: movie.id,
    adult: movie.adult,
    poster: movie.poster_path ? IMG_URL_500 + movie.poster_path : undefined,
    backdrop: movie.backdrop_path ? IMG_URL_ORIGINAL + movie.backdrop_path : undefined,
    overview: movie.overview,
    title: movie.title,
    release: movie.release_date,
    rating: movie.vote_average + ' / 10'
  };
};

const reviewTransform = (review: IReview) => {
  return {
    author: review.author,
    name: review.author_details.name,
    username: review.author_details.username,
    avatar: review.author_details.avatar_path,
    rating: review.author_details.rating,
    content: review.content,
    createdAt: review.created_at,
    id: review.id
  };
};

export const transformGetSingleMovie = (response: ISingleMovieResponse) => {
  return {
    id: response.id,
    poster: response.poster_path ? IMG_URL_500 + response.poster_path : undefined,
    backdrop: response.backdrop_path ? IMG_URL_ORIGINAL + response.backdrop_path : undefined,
    adult: response.adult,
    overview: response.overview,
    title: response.title,
    status: response.status,
    tagline: response.tagline,
    release: response.release_date,
    rating: response.vote_average + ' / 10',
    runtime: response.runtime ? response.runtime + ' min' : null,
    budget: response.budget + '$',
    revenue: response.revenue + '$',
    genres: response.genres.map((genre) => genre.name).join(', '),
    companies: response.production_companies.map((company) => company.name).join(', '),
    countries: response.production_countries.map((country) => country.name).join(', ')
  };
};

export const transformMoviesGroup = (response: IMoviesGroupResponse) => {
  const totalPages = response.total_pages;
  const totalResults = response.total_results;
  const results = response.results.map(standardMovieTransform);

  return {
    totalPages,
    totalResults,
    results
  };
};

export const transformReviews = (response: IMovieReviewsResponse) => {
  const totalResults = response.total_results;
  const reviews = response.results.map(reviewTransform);
  return {
    totalResults,
    results: reviews
  };
};
