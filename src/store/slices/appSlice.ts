import { createSlice } from '@reduxjs/toolkit';

type AppState = {
  init: boolean
}

const initialState: AppState = {
  init: false
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    initApp: (state) => {
      state.init = true;
    }
  }
});

export const appReducer = appSlice.reducer;
export const { initApp } = appSlice.actions;
