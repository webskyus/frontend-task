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
        <p className='text-center font-bold text-[clamp(18px,4vw,24px)] text-white/80 animate-pulse'>
          No assets found
        </p>
      </React.Activity>

      <React.Activity mode={section.list.length ? 'visible' : 'hidden'}>
        <h2
          title={capitalizeText(section.label)}
          className='mb-[16px] font-bold line-clamp-1 overflow-ellipsis text-[clamp(18px,4vw,24px)] text-white'
        >
          {capitalizeText(section.label)}
        </h2>

        <section
          className={`
            grid gap-[10px] grid-cols-[repeat(auto-fit,minmax(170px,1fr))]  
            
            xs:grid-cols-[repeat(auto-fit,minmax(170px,170px))] 
            sm:grid-cols-[repeat(auto-fit,minmax(200px,200px))]  
            lg:grid-cols-[repeat(auto-fit,minmax(320px,320px))] lg:gap-[40px]
      `}
        >
          {section.list.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </section>
      </React.Activity>
    </section>
  );
};

export default AssetGridSingle;
