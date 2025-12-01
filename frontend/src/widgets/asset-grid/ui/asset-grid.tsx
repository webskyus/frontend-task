'use client';

import React from 'react';
import useAssets from '@/features/fetch-assets/model/use-assets';
import AssetStatusFilters from '@widgets/asset/ui/asset-status-filters';
import AssetGridSingle from '@widgets/asset/ui/asset-grid-single';
import AssetGridSections from '@widgets/asset/ui/asset-grid-sections';
import { ASSET_GRID_MODE } from '@/entities/asset/model/type';
import useAssetsFiltered from '@features/fetch-assets/lib/use-asset-filtered';
import { Spinner } from '@shared/ui/spinner';

const AssetGrid = () => {
  const { data, isLoading, error } = useAssets();
  const filtered = useAssetsFiltered(data || []);

  if (isLoading)
    return (
      <div
        className={
          'w-full flex items-center justify-center space-x-[10px] p-[20px] text-[16px] text-white/80'
        }
      >
        <Spinner />
        <span>Loading...</span>
      </div>
    );
  if (error)
    return <p className={'w-full p-[20px] text-[16px] text-white'}>Something went wrong...</p>;

  return (
    <section className={'my-[10px] pb-[10px]'}>
      <AssetStatusFilters data={data} />

      <React.Activity mode={filtered.mode === ASSET_GRID_MODE.MULTI ? 'visible' : 'hidden'}>
        <AssetGridSections sections={filtered.sections} />
      </React.Activity>

      <React.Activity mode={filtered.mode === ASSET_GRID_MODE.SINGLE ? 'visible' : 'hidden'}>
        <AssetGridSingle section={filtered.sections[0]} />
      </React.Activity>
    </section>
  );
};

export default AssetGrid;
