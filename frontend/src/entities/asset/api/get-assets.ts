import { Asset } from '@entities/asset/model/type';

const getAssets = async (): Promise<Asset[]> => {
  const res = await fetch('http://localhost:3000/api/assets', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch assets');
  }

  return res.json();
};

export default getAssets;
