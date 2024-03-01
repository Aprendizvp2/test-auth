import {useGetBreedRandomImageQuery} from '@/api/breeds/breedsApi';

export const useActions = () => {
  const {
    data: breedImage,
    refetch,
    isLoading,
    isError,
  } = useGetBreedRandomImageQuery();

  return {
    breedImage,
    refetch,
    isLoading,
    isError,
  };
};
