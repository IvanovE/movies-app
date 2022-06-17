export interface IUser {
  email: string
  password: string
  username: string
}

export interface IGenre {
  id: number
  name: string
}

export interface ICountry {
  iso_3166_1: string
  name: string
}

export interface ICompany {
  id: number,
  logo_path: string | null,
  name: string,
  origin_country: string
}

export interface IStandardMovie {
  id: number
  adult: boolean
  backdrop_path: string | null
  poster_path: string | null
  overview: string | null
  title: string
  release_date: string
  vote_average: number
}

export interface IReview {
  author: string
  author_details: {
    name: string
    username: string
    avatar_path: string | null
    rating: number | null
  }
  content: string
  created_at: string
  id: string
}

export interface IUsers {
  [key: string]: IUser
}
