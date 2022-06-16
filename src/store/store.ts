import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { appReducer } from './slices/appSlice';
import { authReducer } from './slices/authSlice';
import { localStorageMiddleware } from './middlewares/localStorageMiddleware';
import { moviesService } from '../services/baseService';

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    [moviesService.reducerPath]: moviesService.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      moviesService.middleware,
      localStorageMiddleware
    );
  }
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
