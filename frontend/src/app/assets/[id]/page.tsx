import React from 'react';
import AssetDetailsHeader from '@widgets/asset-details-header/ui/asset-details-header';
import AssetDetailsWidget from '@widgets/asset-details/ui/asset-details';

const AssetDetails = () => {
  return (
    <main className={'h-full'}>
      <header className={'container mx-auto'}>
        <AssetDetailsHeader />
      </header>

      <AssetDetailsWidget />
    </main>
  );
};

export default AssetDetails;
