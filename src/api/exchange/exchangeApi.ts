import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ExchangeEntity} from './entities/exchangeEntity';

export const exchangeApi = createApi({
  reducerPath: 'exchangeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.wazirx.com/sapi/v1/tickers/',
  }),
  tagTypes: [],
  endpoints: builder => ({
    getAllExchange: builder.query<ExchangeEntity[], void>({
      query: () => '24hr',
    }),
  }),
});

export const {useGetAllExchangeQuery} = exchangeApi;
