import AssetCard from '@widgets/asset/ui/asset-card';
import { Asset } from '@entities/asset/model/type';
import React from 'react';
import { capitalizeText } from '@shared/lib/helpers';

interface Props {
  section: { label: string; list: Asset[] };
}

const AssetGridSingle: React.FC<Props> = ({ section }) => {
  return (
    <section className='mb-[10px] px-[10px] lg:px-[unset]'>
      <React.Activity mode={!section.list.length ? 'visible' : 'hidden'}>
        <p className='text-center font-bold text-[clamp(18px,4vw,24px)] text-dark dark:text-white/80 animate-pulse'>
          No assets found
        </p>
      </React.Activity>

      <React.Activity mode={section.list.length ? 'visible' : 'hidden'}>
        <h2 className='mb-[16px] font-bold line-clamp-1 overflow-ellipsis text-[clamp(18px,4vw,24px)] text-black dark:text-white'>
          {capitalizeText(section.label)}
        </h2>

        <div className='grid gap-[10px] grid-cols-[repeat(auto-fit,minmax(170px,1fr))]  lg:grid-cols-[repeat(auto-fit,minmax(320px,320px))] lg:gap-[40px]'>
          {section.list.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>
      </React.Activity>
    </section>
  );
};

export default AssetGridSingle;
