import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUsers } from '../../types/common';
import { IAuthResponse } from '../../types/responses';

type AuthState = {
  isSignedIn: boolean,
  currentUser: string | null,
  users: IUsers
}

type TSignIn = Pick<IUser, 'password' | 'email'>

const initialState: AuthState = {
  isSignedIn: false,
  currentUser: null,
  users: {}
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    initAuth: (state, { payload }: PayloadAction<IAuthResponse>) => {
      state.users = payload.users || {};
      state.isSignedIn = payload.isSignedIn || false;
      state.currentUser = payload.currentUser || null;
    },
    signIn: (state, { payload }: PayloadAction<TSignIn>) => {
      const email = state.users[payload.email]?.email;
      const password = state.users[payload.email]?.password;
      const isValid = payload.email === email && payload.password === password;
      if (isValid) {
        state.currentUser = email;
        state.isSignedIn = true;
      }
    },
    signUp: (state, { payload }: PayloadAction<IUser>) => {
      if (!state.users[payload.email]) {
        state.users[payload.email] = payload;
      }
    },
    logout: (state) => {
      state.currentUser = null;
      state.isSignedIn = false;
    }
  }
});

export const authReducer = authSlice.reducer;
export const { initAuth, signIn, signUp, logout } = authSlice.actions;
