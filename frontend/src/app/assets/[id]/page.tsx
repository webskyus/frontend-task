import React from 'react';
import { NextPage } from 'next';
import AssetDetailsHeader from '@widgets/asset-details-header/ui/asset-details-header';

const AssetDetails: NextPage = () => {
  return (
    <section className={'container mx-auto'}>
      <AssetDetailsHeader />
    </section>
  );
};

export default AssetDetails;
