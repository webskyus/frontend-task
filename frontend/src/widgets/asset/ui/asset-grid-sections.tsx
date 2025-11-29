import AssetCard from './asset-card';
import React from 'react';
import { Asset } from '@entities/asset/model/type';
import { capitalizeText } from '@shared/lib/helpers';

interface Props {
  sections: { key: string; label: string; list: Asset[] }[];
}

const AssetGridSections: React.FC<Props> = ({ sections }) => {
  return sections.map((section) => (
    <section key={section.key} className='mb-[20px] px-[10px] lg:px-[unset]'>
      <h2
        title={capitalizeText(section.label)}
        className='mb-[16px] line-clamp-1 font-bold text-[clamp(18px,4vw,24px)] text-black dark:text-white'
      >
        {capitalizeText(section.label)}
      </h2>

      <div className='grid gap-[10px] grid-cols-[repeat(auto-fit,minmax(170px,1fr))]  lg:grid-cols-[repeat(auto-fit,minmax(320px,320px))] lg:gap-[40px]'>
        {section.list.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>
    </section>
  ));
};

export default AssetGridSections;
