import {
  ISingleMovieResponse,
  IMoviesGroupResponse,
  IMovieReviewsResponse,
  IMovieTeamResponse
} from '../../types/responses';
import {
  IStandardMovie,
  IReview,
  IStandardActor, IStandardCrewMember
} from '../../types/common';
import {
  IMG_URL_500,
  IMG_URL_ORIGINAL
} from '../moviesEndpoints';
import noImageAvailable from '../../assets/noImageAvailable.png';

const transformStandardMovie = (movie: IStandardMovie) => {
  return {
    id: movie.id,
    adult: movie.adult,
    poster: movie.poster_path ? IMG_URL_500 + movie.poster_path : noImageAvailable,
    backdrop: movie.backdrop_path ? IMG_URL_ORIGINAL + movie.backdrop_path : undefined,
    overview: movie.overview,
    title: movie.title,
    release: movie.release_date,
    rating: Math.round((movie.vote_average + Number.EPSILON) * 10) / 10 + ' / 10'
  };
};

const transformStandardActor = (actor: IStandardActor) => {
  return {
    id: actor.id,
    gender: actor.gender,
    adult: actor.adult,
    knownForDepartment: actor.known_for_department,
    name: actor.name,
    originalName: actor.original_name,
    popularity: actor.popularity + ' / 100',
    poster: actor.profile_path ? IMG_URL_500 + actor.profile_path : noImageAvailable,
    castId: actor.cast_id,
    character: actor.character,
    creditId: actor.credit_id,
    order: actor.order
  };
};

const transformStandardCrewMember = (member: IStandardCrewMember) => {
  return {
    id: member.id,
    gender: member.gender,
    adult: member.adult,
    knownForDepartment: member.known_for_department,
    name: member.name,
    originalName: member.original_name,
    popularity: member.popularity + ' / 100',
    poster: member.profile_path ? IMG_URL_500 + member.profile_path : noImageAvailable,
    creditId: member.credit_id,
    job: member.job,
    department: member.department
  };
};

const transformReview = (review: IReview) => {
  return {
    author: review.author,
    name: review.author_details.name,
    username: review.author_details.username,
    avatar: review.author_details.avatar_path,
    rating: review.author_details.rating + ' / 10',
    content: review.content,
    createdAt: review.created_at,
    id: review.id
  };
};

export const transformGetSingleMovie = (response: ISingleMovieResponse) => {
  return {
    id: response.id,
    poster: response.poster_path ? IMG_URL_500 + response.poster_path : noImageAvailable,
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
  const results = response.results.map(transformStandardMovie);

  return {
    totalPages,
    totalResults,
    results
  };
};

export const transformGetMovieReviews = (response: IMovieReviewsResponse) => {
  const totalResults = response.total_results;
  const reviews = response.results.map(transformReview);
  return {
    totalResults,
    results: reviews
  };
};

export const transformGetMovieTeam = (response: IMovieTeamResponse) => {
  return {
    id: response.id,
    actors: response.cast.map(transformStandardActor),
    crew: response.crew.map(transformStandardCrewMember)
  };
};
