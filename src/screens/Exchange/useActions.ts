import {useGetAllExchangeQuery} from '@/api/exchange/exchangeApi';

export const useActions = () => {
  const {data = [], isLoading, isError} = useGetAllExchangeQuery();

  return {
    data,
    isLoading,
    isError,
  };
};
