import { Middleware } from 'redux';
import { initApp } from '../slices/appSlice';
import { storage } from '../../utils/storage';
import { initAuth, signUp, signIn, logout } from '../slices/authSlice';

export const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  next(action);
  if (initApp.match(action)) {
    const users = storage('users');
    const isSignedIn = storage('isSignedIn');
    const currentUser = storage('currentUser');
    store.dispatch(initAuth({
      users,
      isSignedIn,
      currentUser
    }));
  }
  if (signUp.match(action)) {
    const users = store.getState().auth.users;
    storage('users', users);
  }
  if (signIn.match(action)) {
    const currentUser = store.getState().auth.currentUser;
    const isSignedIn = store.getState().auth.isSignedIn;
    storage('currentUser', currentUser);
    storage('isSignedIn', isSignedIn);
  }
  if (logout.match(action)) {
    storage('currentUser', null);
    storage('isSignedIn', false);
  }
};
