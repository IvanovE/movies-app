import { RootState } from '../store';

export const auth = {
  isSignedIn: (state: RootState) => {
    return state.auth.isSignedIn;
  },
  currentUser: (state: RootState) => {
    return state.auth.currentUser;
  },
  users: (state: RootState) => {
    return state.auth.users;
  }
};
