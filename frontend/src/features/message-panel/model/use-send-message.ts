'use client';

import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Message } from '@entities/message/model/type';
import { Asset } from '@entities/asset/model/type';

const useSendMessage = (asset: Asset, bottomRef: React.RefObject<HTMLDivElement | null>) => {
  const queryClient = useQueryClient();

  const [input, setInput] = React.useState('');

  const scrollDown = () => {
    if (!bottomRef?.current) return;

    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const mutation = useMutation({
    mutationFn: async (text: string) => {
      const res = await fetch(`http://localhost:3000/api/messages?assetId=${asset.id}`, {
        method: 'POST',
        body: JSON.stringify({ text }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) throw new Error('Failed to send message');

      return res.json();
    },

    onMutate: async (text: string) => {
      await queryClient.cancelQueries({ queryKey: ['messages', asset.id] });

      const prevMessages = queryClient.getQueryData<Message[]>(['messages', asset.id]);

      const optimisticMessage: Message = {
        id: Date.now(),
        assetId: asset.id,
        name: 'You',
        comment: text,
        timestamp: new Date().toLocaleTimeString(),
      };

      queryClient.setQueryData<Message[]>(['messages', asset.id], (old = []) => [
        ...old,
        optimisticMessage,
      ]);

      scrollDown();
      return { prevMessages };
    },

    onError: (_err, _text, ctx) => {
      if (ctx?.prevMessages) {
        queryClient.setQueryData(['messages', asset.id], ctx.prevMessages);
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['messages', asset.id] });
      scrollDown();
    },
  });

  const send = () => {
    if (!input.trim()) return;

    mutation.mutate(input.trim());
    setInput('');
  };

  return {
    input,
    setInput,
    send,
    isPending: mutation.isPending,
    bottomRef,
  };
};

export default useSendMessage;
