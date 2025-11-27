'use client';

import React from 'react';
import useAssets from '@/features/fetch-assets/model/use-assets';
import AssetCard from '@widgets/asset/ui/asset-card';
import AssetStatusFilters from '@widgets/asset/ui/asset-status-filters';

// IMPORTANT: This grid is optimized for a non-paginated asset list.
// Once pagination is implemented, we must update the loading behavior,
// since `isLoading` will trigger on every page fetch and cause UI flickering.
// Possible solutions: keepPreviousData, isFetchingNextPage, infinite scroll.
const AssetGrid = () => {
  const { data, isLoading, error } = useAssets();

  if (isLoading) return <div>Loading assets...</div>;
  if (error) return <div>Failed to load assets</div>;

  // If we need different AssetCard components (e.g., AssetCardPhoto, AssetCardVideo, AssetCardSlider),
  // we can create a getCardComponent(templateName) function that maps template names
  // to the corresponding component and returns the correct one.
  return (
    <>
      <AssetStatusFilters />

      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        {data?.map((asset) => {
          return <AssetCard asset={asset} key={asset.id} />;
        })}
      </div>
    </>
  );
};

export default AssetGrid;
