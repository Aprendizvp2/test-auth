import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
  JournalsEntity,
  JournalsSearchResponse,
} from './entities/journalsEntity';

export const journalsApi = createApi({
  reducerPath: 'journalsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.crossref.org/journals/',
  }),
  tagTypes: [],
  endpoints: builder => ({
    getAllJournals: builder.query<JournalsEntity[], void>({
      query: () => '',
      transformResponse: (response: {message: JournalsSearchResponse}) =>
        response.message.items,
    }),
  }),
});

export const {useGetAllJournalsQuery} = journalsApi;
