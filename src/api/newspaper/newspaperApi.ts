import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {NewspaperEntity} from './entities/newspaperEntity';

export const newspaperApi = createApi({
  reducerPath: 'newspaperApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://chroniclingamerica.loc.gov/',
  }),
  tagTypes: [],
  endpoints: builder => ({
    getAllNewspaper: builder.query<NewspaperEntity, void>({
      query: () => 'newspapers.json',
    }),
  }),
});

export const {useGetAllNewspaperQuery} = newspaperApi;
