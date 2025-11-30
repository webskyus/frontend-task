import { Message } from '@entities/message/model/type';
import { API_URL } from '@shared/config/api';

const getMessages = async (assetId: number) => {
  const res = await fetch(`${API_URL}/api/assets/${assetId}/comments`, {
    cache: 'no-cache',
  });

  if (!res.ok) throw new Error('Failed to fetch messages');

  const messages: Message[] = await res.json();

  return messages.filter((message) => message.assetId === Number(assetId));
};

export default getMessages;
