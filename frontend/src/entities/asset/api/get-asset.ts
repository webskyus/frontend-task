import { Asset } from '@entities/asset/model/type';
import { API_URL } from '@shared/config/api';

const getAsset = async (id: string): Promise<Asset> => {
  const res = await fetch(`${API_URL}/api/assets`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch assets');
  }

  const assets: Asset[] = await res.json();

  const asset = assets.find((asset) => asset.id === Number(id));

  if (!asset) {
    throw new Error(`Asset with id ${id} not found`);
  }

  return asset;
};

export default getAsset;
