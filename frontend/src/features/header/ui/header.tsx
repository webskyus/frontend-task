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
    <header>
      <BreadcrumbList items={breadcrumbs} />

      <Link href={pageInfo.link}>
        <h1>
          <ChevronLeft />
          <span>{pageInfo.name}</span>
        </h1>
      </Link>

      <TagList items={tags} />
    </header>
  );
};

export default Header;
