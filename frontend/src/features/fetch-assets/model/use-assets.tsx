import { useQuery } from '@tanstack/react-query';
import getAssets from '@entities/asset/api/get-assets';

const useAssets = () => {
  return useQuery({
    queryKey: ['assets'],
    queryFn: getAssets,
    staleTime: 1000,
  });
};

export default useAssets;
