import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseService = fetchBaseQuery({
  baseUrl: 'https://api.themoviedb.org/3/'
});

export const moviesService = createApi({
  reducerPath: 'moviesService',
  baseQuery: baseService,
  endpoints: () => ({
  })
});
