import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const breedsApi = createApi({
  reducerPath: 'breedsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dog.ceo/api/breeds/image',
  }),
  tagTypes: [],
  endpoints: builder => ({
    getBreedRandomImage: builder.query<string, void>({
      query: () => 'random',
      transformResponse: (response: {message: string}) => response.message,
    }),
  }),
});

export const {useGetBreedRandomImageQuery} = breedsApi;
