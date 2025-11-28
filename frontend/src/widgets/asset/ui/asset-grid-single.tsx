import AssetCard from '@widgets/asset/ui/asset-card';
import { Asset } from '@entities/asset/model/type';
import React from 'react';
import { capitalizeText } from '@shared/lib/helpers';

interface Props {
  section: { label: string; list: Asset[] };
}

const AssetGridSingle: React.FC<Props> = ({ section }) => {
  return (
    <section>
      <React.Activity mode={!section.list.length ? 'visible' : 'hidden'}>
        <p className='text-center font-bold text-[clamp(18px,4vw,24px)] text-dark dark:text-white/80 animate-pulse'>
          No assets found
        </p>
      </React.Activity>

      <React.Activity mode={section.list.length ? 'visible' : 'hidden'}>
        <h2 className='mb-[16px] font-bold text-[clamp(18px,4vw,24px)] text-black dark:text-white'>
          {capitalizeText(section.label)}
        </h2>

        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
          {section.list.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>
      </React.Activity>
    </section>
  );
};

export default AssetGridSingle;
