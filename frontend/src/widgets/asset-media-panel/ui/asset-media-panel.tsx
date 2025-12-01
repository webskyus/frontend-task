import React from 'react';
import Image from 'next/image';
import { Asset } from '@entities/asset/model/type';

interface Props {
  asset: Asset;
}

const AssetMediaPanel: React.FC<Props> = ({ asset }) => {
  return (
    <section className='flex flex-nowrap gap-[20px] justify-center'>
      <article
        className='
          flex flex-col w-full h-full justify-center items-center
          space-y-[10px] max-w-[180px]

          lg:max-w-[320px]
      '
      >
        <div
          className='
          relative max-w-[180px] w-full h-full
          aspect-[3/6] p-[5px] lg:p-[10px]
          rounded-[12px] overflow-hidden

          lg:aspect-[9/16] lg:max-w-[320px] lg:rounded-[30px]
      '
        >
          <video
            src={asset.assetUrl}
            poster={asset.thumbnailUrl}
            autoPlay={false}
            loop
            muted
            playsInline
            controls
            className='absolute inset-0 w-full h-full object-cover'
          />
        </div>

        <h2 className={'text-white/80 font-medium'}>Video</h2>
      </article>

      <article
        className='
          flex flex-col w-full h-full justify-center items-center
          space-y-[10px] max-w-[180px]

          lg:max-w-[320px]
      '
      >
        <div
          className='
            relative max-w-[180px] w-full h-full
            aspect-[3/6] p-[5px] lg:p-[10px]
            rounded-[12px] overflow-hidden

            lg:aspect-[9/16] lg:max-w-[320px] lg:rounded-[30px]
      '
        >
          <Image
            src={asset.thumbnailUrl}
            fill
            loading='eager'
            priority
            quality={80}
            sizes='(max-width: 768px) 50vw, 33vw'
            className='object-cover'
            alt={asset.caption}
          />
        </div>

        <h2 className={'text-white/80 font-medium'}>Thumbnail</h2>
      </article>
    </section>
  );
};

export default AssetMediaPanel;
