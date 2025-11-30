import { API_URL } from '@/shared/config/api';
import { Asset } from '@entities/asset/model/type';

const getAssets = async (): Promise<Asset[]> => {
  const res = await fetch(`${API_URL}/api/assets`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch assets');
  }

  return res.json();
};

export default getAssets;
