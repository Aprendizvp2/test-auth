import {useGetAllNewspaperQuery} from '@/api/newspaper/newspaperApi';

export const useActions = () => {
  const {data, isLoading, isError} = useGetAllNewspaperQuery();
  console.log('dataNews', data);

  return {
    data,
    isLoading,
    isError,
  };
};
