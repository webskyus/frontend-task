'use client';

import React from 'react';
import useAssets from '@/features/fetch-assets/model/use-assets';
import AssetStatusFilters from '@widgets/asset/ui/asset-status-filters';
import AssetGridSingle from '@widgets/asset/ui/asset-grid-single';
import AssetGridSections from '@widgets/asset/ui/asset-grid-sections';
import { ASSET_GRID_MODE } from '@/entities/asset/model/type';
import useAssetsFiltered from '@features/fetch-assets/lib/use-asset-filtered';

const AssetGrid = () => {
  const { data, isLoading, error } = useAssets();
  const filtered = useAssetsFiltered(data || []);

  if (isLoading) return <div>Loading assets...</div>;
  if (error) return <p className={'w-full text-[16px] text-white'}>Failed to load assets</p>;

  return (
    <section className={'my-[10px]'}>
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
