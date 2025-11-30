import { useQuery } from '@tanstack/react-query';
import getAsset from '@entities/asset/api/get-asset';

const useAsset = (id: string) => {
  return useQuery({
    queryKey: ['asset', id],
    queryFn: () => getAsset(id),
    staleTime: 1000 * 100,
  });
};

export default useAsset;
