'use client';

import React from 'react';
import useAssets from '@/features/fetch-assets/model/use-assets';
import AssetCard from '@widgets/asset/ui/asset-card';
import AssetStatusFilters from '@widgets/asset/ui/asset-status-filters';

// IMPORTANT: This grid is optimized for a non-paginated asset list
const AssetGrid = () => {
  const { data, isLoading, error } = useAssets();

  if (isLoading) return <div>Loading assets...</div>;
  if (error) return <div>Failed to load assets</div>;

  return (
    <section>
      <AssetStatusFilters />

      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        {data?.map((asset) => {
          return <AssetCard asset={asset} key={asset.id} />;
        })}
      </div>
    </section>
  );
};

export default AssetGrid;
