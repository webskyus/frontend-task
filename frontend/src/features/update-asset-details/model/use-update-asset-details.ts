'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Asset } from '@entities/asset/model/type';

interface UpdateAssetDto {
  soundUrl: string;
  caption: string;
}

const useUpdateAssetDetails = (asset: Asset, onSuccess: () => void, onError: () => void) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (dto: UpdateAssetDto) => {
      const res = await fetch(`http://localhost:3001/api/assets/${asset.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dto),
      });

      if (!res.ok) throw new Error('Failed to update asset details');

      return res.json() as Promise<Asset>;
    },

    onMutate: async (dto) => {
      await queryClient.cancelQueries({ queryKey: ['asset', String(asset.id)] });

      const previous = queryClient.getQueryData<Asset>(['asset', String(asset.id)]);

      queryClient.setQueryData<Asset>(['asset', String(asset.id)], (old) =>
        old
          ? {
              ...old,
              caption: dto.caption,
              soundUrl: dto.soundUrl,
            }
          : old
      );

      return { previous };
    },

    onError: (_err, _dto, ctx) => {
      if (ctx?.previous) {
        queryClient.setQueryData(['asset', String(asset.id)], ctx.previous);
        onError();
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['asset', String(asset.id)] });
      onSuccess();
    },
  });

  return {
    isPending: mutation.isPending,
    updateDetails: mutation.mutate,
  };
};

export default useUpdateAssetDetails;
