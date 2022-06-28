export interface ITransformedMovieDetails {
  id: number
  poster?: string
  backdrop?: string
  adult: boolean
  overview: string | null
  title: string
  status: string
  tagline: string | null
  release: string
  rating: string
  runtime: string | null
  budget: string
  revenue: string
  genres: string
  companies: string
  countries: string
}

interface ITransformedStandardMovie {
  id: number
  adult: boolean
  backdrop?: string
  poster?: string
  overview: string | null
  title: string
  release: string
  rating: string
}

export interface ITransformedMoviesGroup {
  results: ITransformedStandardMovie[]
  totalPages: number
  totalResults: number
}

interface ITransformedReview {
  author: string
  name: string
  username: string
  avatar: string | null
  rating: number | null
  content: string
  createdAt: string
  id: string
}

export interface ITransformedReviews {
  results: ITransformedReview[]
  totalResults: number
}
