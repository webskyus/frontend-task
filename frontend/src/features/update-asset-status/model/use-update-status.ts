'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Asset, AssetStatusType } from '@entities/asset/model/type';

interface UpdateStatusDto {
  status: string;
}

const useUpdateStatus = (asset: Asset, onSuccess: () => void, onError: () => void) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (dto: UpdateStatusDto) => {
      const res = await fetch(`http://localhost:3000/api/assets/${asset.id}`, {
        method: 'PATCH',
        body: JSON.stringify(dto),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) throw new Error('Failed to update status');

      return res.json() as Promise<Asset>;
    },

    onMutate: async (dto) => {
      await queryClient.cancelQueries({ queryKey: ['asset', asset.id] });

      const previous = queryClient.getQueryData<Asset>(['asset', asset.id]);

      queryClient.setQueryData<Asset>(['asset', asset.id], (old) =>
        old
          ? {
              ...old,
              status: dto.status as AssetStatusType,
            }
          : old
      );

      return { previous };
    },

    onError: (_err, _dto, ctx) => {
      if (ctx?.previous) {
        queryClient.setQueryData(['asset', String(asset.id)], ctx.previous);
      }
      onError();
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['asset', String(asset.id)] });
      onSuccess();
    },
  });

  return {
    updateStatus: mutation.mutate,
    isPending: mutation.isPending,
  };
};

export default useUpdateStatus;
