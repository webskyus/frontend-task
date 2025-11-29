import { Asset } from '@entities/asset/model/type';
import React from 'react';
import Image from 'next/image';
import StatusBadge from '@entities/asset/ui/status-badge';
import { Avatar, AvatarFallback, AvatarImage } from '@shared/ui/avatar';
import TagList from '@entities/tag/ui/tag-list';
import { tags } from '@widgets/asset-header/model/data';
import { GitPullRequestDraft, MessageCircleMore } from 'lucide-react';
import { ROUTES } from '@shared/config/routes';
import Link from 'next/link';

interface Props {
  asset: Asset;
}

const AssetCard: React.FC<Props> = ({ asset }) => {
  return (
    <article
      className={
        'relative max-w-[180px]  w-full h-full aspect-[3/6] p-[5px] lg:p-[10px] rounded-[8px] overflow-hidden lg:aspect-[9/16] lg:max-w-[320px]'
      }
    >
      <Link href={`${ROUTES.ASSETS}/${asset.id}`}>
        <div className='absolute inset-0 z-5 bg-black/20 pointer-events-none' />

        <Image
          src={asset.thumbnailUrl}
          fill={true}
          objectFit={'cover'}
          className={'z-0'}
          alt={asset.caption}
        />

        <div className={'relative z-10 flex flex-col h-full w-full'}>
          <StatusBadge status={asset.status} />

          <div className={'mt-auto h-auto p-[10px] rounded-[12px] bg-black/50'}>
            <header className={'flex items-center gap-[10px] mb-[10px]'}>
              <Avatar>
                <AvatarImage src={asset.creator.profilePictureUrl} />
                <AvatarFallback>
                  <span className={'text-[clamp(14px,4vw,18px)] text-white'}>
                    {asset.creator.name.slice(0, 2)}
                  </span>
                </AvatarFallback>
              </Avatar>

              <p
                className={
                  'leading-[18px] font-medium line-clamp-2 overflow-ellipsis text-[clamp(14px,4vw,16px)] text-white'
                }
              >
                {asset.creator.name}
              </p>
            </header>

            <footer className={'flex flex-col space-y-[4px]'}>
              <React.Activity mode={asset.deliverable.id % 3 === 0 ? 'visible' : 'hidden'}>
                <TagList items={tags} listClassNames={'py-0'} />
              </React.Activity>

              <div className={'flex items-center gap-[10px]'}>
                <GitPullRequestDraft width={14} height={14} className={'text-white'} />
                <span
                  className={
                    'text-[14px] line-clamp-1 overflow-ellipsis whitespace-nowrap text-white'
                  }
                >
                  {asset.deliverable.title}
                </span>
              </div>

              <div className={'flex items-center gap-[10px]'}>
                <MessageCircleMore width={14} height={14} className={'text-white'} />
                <span
                  className={
                    'text-[14px] line-clamp-1 overflow-ellipsis whitespace-nowrap text-white'
                  }
                >
                  0 comments
                </span>
              </div>
            </footer>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default AssetCard;
