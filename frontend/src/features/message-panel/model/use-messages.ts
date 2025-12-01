'use client';

import { useQuery } from '@tanstack/react-query';
import { Message } from '@entities/message/model/type';
import getMessages from '@entities/message/api/get-messages';
import { Asset } from '@entities/asset/model/type';

const useMessages = (asset: Asset) => {
  const { data, isLoading, error } = useQuery<Message[]>({
    queryKey: ['messages', asset.id],
    queryFn: () => getMessages(asset.id),
    staleTime: 1000 * 100,
  });

  return {
    messages: data ?? [],
    isLoading,
    error,
  };
};

export default useMessages;
