import {
  IUsers,
  IGenre,
  ICompany,
  ICountry,
  IReview,
  IStandardMovie
} from './common';

export interface IAuthResponse {
  users: IUsers
  isSignedIn: boolean
  currentUser: string | null
}

export interface ISingleMovieResponse {
  id: number
  adult: boolean
  backdrop_path: string | null
  poster_path: string | null
  overview: string | null
  status: string
  tagline: string | null
  title: string
  release_date: string
  runtime: number | null
  budget: number
  revenue: number
  vote_average: number
  genres: IGenre[]
  production_companies: ICompany[]
  production_countries: ICountry[]
}

export interface IMoviesGroupResponse {
  results: IStandardMovie[]
  total_pages: number
  total_results: number
}

export interface IMovieReviewsResponse {
  results: IReview[]
  total_results: number
}
