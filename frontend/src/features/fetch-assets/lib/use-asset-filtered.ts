'use client';

import { useSearchParams } from 'next/navigation';
import {
  Asset,
  ASSET_GRID_MODE,
  ASSET_STATUS_SECTION_NAME_LIST,
  ASSET_STATUS_VALUES_LIST,
} from '@/entities/asset/model/type';

const useAssetsFiltered = (assets: Asset[]) => {
  const params = useSearchParams();
  const param = params.get('status');
  const filter = param as keyof typeof ASSET_STATUS_VALUES_LIST | undefined;

  if (filter) {
    const filtered = assets.filter((a) => a.status === filter);

    return {
      mode: ASSET_GRID_MODE.SINGLE,
      currentStatusLabel: ASSET_STATUS_SECTION_NAME_LIST[filter],
      sections: [
        {
          key: ASSET_STATUS_SECTION_NAME_LIST[filter],
          label: ASSET_STATUS_SECTION_NAME_LIST[filter],
          list: filtered,
        },
      ],
    };
  }

  return {
    mode: ASSET_GRID_MODE.MULTI,
    sections: Object.entries(ASSET_STATUS_VALUES_LIST).reduce(
      (acc, [key, value], index) => {
        if (index === 0) return acc;

        const label = ASSET_STATUS_SECTION_NAME_LIST[key as keyof typeof ASSET_STATUS_VALUES_LIST];
        const list = assets.filter((a) => a.status === value);

        if (list.length) {
          acc.push({ key, label, list });
        }

        return acc;
      },
      [] as { key: string; label: string; list: Asset[] }[]
    ),
  };
};

export default useAssetsFiltered;
