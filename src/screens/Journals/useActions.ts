import {useGetAllJournalsQuery} from '@/api/journals/journalsApi';

export const useActions = () => {
  const {data = [], isLoading, isError} = useGetAllJournalsQuery();
  console.log('dataPharmacyJournals', data);

  return {
    data,
    isLoading,
    isError,
  };
};
