import { Message } from '@entities/message/model/type';

const getMessages = async (assetId: number) => {
  const res = await fetch(`http://localhost:3000/api/assets/${assetId}/comments`, {
    cache: 'no-cache',
  });

  if (!res.ok) throw new Error('Failed to fetch messages');

  const messages: Message[] = await res.json();

  return messages.filter((message) => message.assetId === Number(assetId));
};

export default getMessages;
