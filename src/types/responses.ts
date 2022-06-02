import { IUsers } from './common';

export interface IAuthResponse {
  users: IUsers
  isSignedIn: boolean
  currentUser: string | null
}
