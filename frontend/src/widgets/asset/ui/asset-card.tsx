import { Asset } from '@entities/asset/model/type';
import React from 'react';
import Image from 'next/image';
import StatusBadge from '@entities/asset/ui/status-badge';
import { Avatar, AvatarFallback, AvatarImage } from '@shared/ui/avatar';
import Tags from '@entities/tag/ui/tags';
import { tags } from '@widgets/asset-header/model/data';
import { GitPullRequestDraft, MessageCircleMore } from 'lucide-react';
import { ROUTES } from '@shared/config/routes';
import Link from 'next/link';
import useMessages from '@features/message-panel/model/use-messages';

interface Props {
  asset: Asset;
}

const AssetCard: React.FC<Props> = ({ asset }) => {
  const { messages } = useMessages(asset);

  return (
    <article
      className='
        group relative max-w-[180px] w-full h-full
        aspect-[3/6] p-[5px] lg:p-[10px]
        rounded-[8px] overflow-hidden
        transition-transform duration-300 ease-out
        hover:scale-[1.03] hover:shadow-lg hover:shadow-black/30

        lg:aspect-[9/16] lg:max-w-[320px]
      '
    >
      <Link href={`${ROUTES.ASSETS}/${asset.id}`}>
        <div
          className='
            absolute inset-0 z-5
            bg-black/20  pointer-events-none transition-colors
            duration-300 group-hover:bg-black/40
          '
        />

        <div className='absolute inset-0'>
          <Image
            src={asset.thumbnailUrl}
            fill
            loading='eager'
            priority
            quality={80}
            sizes='(max-width: 768px) 50vw, 33vw'
            className='object-cover transition-transform duration-500 group-hover:scale-110'
            alt={asset.caption}
          />
        </div>

        <div
          className='
            relative z-10 flex flex-col h-full w-full
            transition-transform duration-300
            group-hover:-translate-y-1
          '
        >
          <StatusBadge status={asset.status} />

          <div
            className={`
            mt-auto h-auto p-[10px] 
            rounded-[12px] bg-black/50  transition-all 
            group-hover:bg-black/70 group-hover:translate-y-[10px]
          `}
          >
            <header className='flex items-center gap-[10px] mb-[10px]'>
              <Avatar>
                <AvatarImage alt={asset.creator.name} src={asset.creator.profilePictureUrl} />
                <AvatarFallback>
                  <span className='text-[clamp(14px,4vw,18px)] text-white'>
                    {asset.creator.name.slice(0, 2).toUpperCase()}
                  </span>
                </AvatarFallback>
              </Avatar>

              <p
                title={asset.creator.name}
                className='
                  leading-[18px] font-medium line-clamp-2 overflow-ellipsis
                  text-[clamp(14px,4vw,16px)] text-white
                '
              >
                {asset.creator.name}
              </p>
            </header>

            <footer className='flex flex-col space-y-[4px]'>
              <React.Activity mode={asset.deliverable.id % 3 === 0 ? 'visible' : 'hidden'}>
                <Tags items={tags} listClassNames='py-0' />
              </React.Activity>

              <div className='flex items-center gap-[10px]'>
                <GitPullRequestDraft width={14} height={14} className='text-white' />
                <span
                  title={asset.deliverable.title}
                  className='text-[14px] line-clamp-1 overflow-ellipsis whitespace-nowrap text-white'
                >
                  {asset.deliverable.title}
                </span>
              </div>

              <div className='flex items-center gap-[10px]'>
                <MessageCircleMore width={14} height={14} className='text-white' />
                <span
                  title='0 comments'
                  className='text-[14px] line-clamp-1 overflow-ellipsis whitespace-nowrap text-white'
                >
                  {messages.length} comments
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
