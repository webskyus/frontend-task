import React from 'react';
import { NextPage } from 'next';
import AssetHeaderWidget from '@widgets/asset-header/ui/asset-header';
import AssetGridWrapper from '@widgets/asset-grid/ui/asset-grid-wrapper';
import { Spinner } from '@shared/ui/spinner';

const Assets: NextPage = () => {
  return (
    <section className={'container mx-auto'}>
      <AssetHeaderWidget />

      <React.Suspense
        fallback={
          <div
            className={
              'w-full flex items-center justify-center space-x-[10px] p-[20px] text-[16px] text-white/80'
            }
          >
            <Spinner />
            <span>Loading...</span>
          </div>
        }
      >
        <AssetGridWrapper />
      </React.Suspense>
    </section>
  );
};

export default Assets;
