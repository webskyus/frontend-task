import React from 'react';
import { NextPage } from 'next';
import AssetGrid from '@widgets/asset-grid/ui/asset-grid';
import HeaderWidget from '@widgets/header/ui/header';

const Assets: NextPage = () => {
  return (
    <section className={'container mx-auto px-[10px] lg:px-[inherit]'}>
      <HeaderWidget />
      <AssetGrid />
    </section>
  );
};

export default Assets;
