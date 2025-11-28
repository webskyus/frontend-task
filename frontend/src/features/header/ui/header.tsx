import React from 'react';
import BreadcrumbList from '@entities/breadcrumbs/ui/breadcrumb-list';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import TagList from '@entities/tag/ui/tag-list';
import { Tag } from '@/entities/tag/model/types';
import { Breadcrumb } from '@entities/breadcrumbs/model/types';

interface Props {
  breadcrumbs: Breadcrumb[];
  tags: Tag[];
  pageInfo: {
    name: string;
    link: string;
  };
}

const Header: React.FC<Props> = ({ tags, breadcrumbs, pageInfo }) => {
  return (
    <header className={'px-[10px] lg:px-[unset]'}>
      <BreadcrumbList items={breadcrumbs} />

      <Link href={pageInfo.link}>
        <h1 className={'flex items-center gap-[8px] mt-[4px] lg:mt-[10px]'}>
          <ChevronLeft className={'text-white/80'} />
          <span className={'text-[clamp(24px,4vw,30px)] font-bold text-black dark:text-white'}>
            {pageInfo.name}
          </span>
        </h1>
      </Link>

      <TagList items={tags} />
    </header>
  );
};

export default Header;
