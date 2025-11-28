import AssetCard from './asset-card';
import React from 'react';
import { Asset } from '@entities/asset/model/type';
import { capitalizeText } from '@shared/lib/helpers';

interface Props {
  sections: { key: string; label: string; list: Asset[] }[];
}

const AssetGridSections: React.FC<Props> = ({ sections }) => {
  return sections.map((section) => (
    <section key={section.key} className='mb-10'>
      <h2 className='mb-[16px] font-bold text-[clamp(18px,4vw,24px)] text-black dark:text-white'>
        {capitalizeText(section.label)}
      </h2>

      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        {section.list.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>
    </section>
  ));
};

export default AssetGridSections;
