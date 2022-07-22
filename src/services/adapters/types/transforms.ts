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

export interface ITransformedActor {
  id: number
  adult: boolean
  gender: number
  knownForDepartment: string
  name: string
  originalName: string
  popularity: string
  poster: string
  castId: number
  character: string
  creditId: string
  order: number
}

interface ITransformedCrewMember extends Omit<ITransformedActor, 'castId' | 'character' | 'order'> {
  department: string
  job: string
}

export interface ITransformedStandardMovie {
  id: number
  adult: boolean
  backdrop?: string
  poster: string
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
  rating: string | null
  content: string
  createdAt: string
  id: string
}

export interface ITransformedReviews {
  results: ITransformedReview[]
  totalResults: number
}

export interface ITransformedMovieTeam {
  id: number
  actors: ITransformedActor[]
  crew: ITransformedCrewMember[]
}
