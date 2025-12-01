import React from 'react';
import { NextPage } from 'next';
import AssetGrid from '@widgets/asset-grid/ui/asset-grid';
import AssetHeaderWidget from '@widgets/asset-header/ui/asset-header';

const Assets: NextPage = () => {
  return (
    <section className={'container mx-auto'}>
      <AssetHeaderWidget />
      <AssetGrid />
    </section>
  );
};

export default Assets;
