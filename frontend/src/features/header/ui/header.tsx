import React from 'react';
import Breadcrumbs from '@entities/breadcrumbs/ui/breadcrumbs';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import TagList from '@entities/tag/ui/tag-list';
import { Tag } from '@/entities/tag/model/types';
import { Breadcrumb } from '@entities/breadcrumbs/model/types';
import { cn } from '@shared/lib/utils';

interface Props {
  breadcrumbs: Breadcrumb[] | null;
  tags: Tag[] | null;
  pageInfo: {
    name: string;
    link: string;
  };
}

const Header: React.FC<Props> = ({ tags, breadcrumbs, pageInfo }) => {
  const detectInnerPageHeaderMode = !tags && !breadcrumbs;

  return (
    <header className={'px-[10px] lg:px-[unset]'}>
      <React.Activity mode={breadcrumbs !== null && breadcrumbs.length ? 'visible' : 'hidden'}>
        <Breadcrumbs items={breadcrumbs as Breadcrumb[]} />
      </React.Activity>

      <h1 className={'relative flex items-center gap-[8px] mt-[4px] lg:mt-[10px]'}>
        <Link href={pageInfo.link}>
          <ChevronLeft
            className={cn([
              'text-white/80',
              detectInnerPageHeaderMode && 'w-[32px] h-full lg:w-[45px] lg:h-[45px]',
            ])}
          />
        </Link>

        <span
          title={pageInfo.name}
          className={cn([
            'line-clamp-1 text-[clamp(24px,4vw,30px)] font-bold text-black dark:text-white',
            detectInnerPageHeaderMode &&
              'w-full overflow-ellipsis line-clamp-1 whitespace-nowrap text-center',
          ])}
        >
          {pageInfo.name}
        </span>
      </h1>

      <React.Activity mode={tags !== null && tags.length ? 'visible' : 'hidden'}>
        <TagList items={tags as Tag[]} />
      </React.Activity>
    </header>
  );
};

export default Header;
