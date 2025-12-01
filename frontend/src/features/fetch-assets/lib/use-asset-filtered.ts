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
  const currentFilter = param as keyof typeof ASSET_STATUS_VALUES_LIST | undefined;

  if (currentFilter) {
    const filtered = assets.filter((a) => a.status === currentFilter);

    return {
      mode: ASSET_GRID_MODE.SINGLE,
      currentStatusLabel: ASSET_STATUS_SECTION_NAME_LIST[currentFilter],
      sections: [
        {
          key: ASSET_STATUS_SECTION_NAME_LIST[currentFilter],
          label: ASSET_STATUS_SECTION_NAME_LIST[currentFilter],
          list: filtered,
        },
      ],
    };
  }

  const sections = Object.entries(ASSET_STATUS_VALUES_LIST)
    .slice(1)
    .map(([key, value]) => {
      const label = ASSET_STATUS_SECTION_NAME_LIST[key as keyof typeof ASSET_STATUS_VALUES_LIST];
      const list = assets.filter((a) => a.status === value);

      return { key, label, list };
    })
    .filter((section) => section.list.length);

  return { mode: ASSET_GRID_MODE.MULTI, sections };
};

export default useAssetsFiltered;
