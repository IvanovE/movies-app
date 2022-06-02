export interface IUser {
  email: string
  password: string
  username: string
}

export interface IUsers {
  [key: string]: IUser
}
