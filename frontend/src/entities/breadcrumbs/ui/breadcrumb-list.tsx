'use client';

import React from 'react';
import BreadcrumbItem from '@entities/breadcrumbs/ui/breadcrumb-item';
import { Breadcrumb } from '@entities/breadcrumbs/model/types';
import { ChevronRight } from 'lucide-react';

interface Props {
  items: Breadcrumb[];
}

const BreadcrumbList: React.FC<Props> = ({ items }) => {
  return (
    <nav className='flex items-center '>
      <ul
        className={'flex items-center gap-[8px] py-[15px] overflow-x-auto hide-scrollbar-x-mobile'}
      >
        {items.map((item, i) => (
          <li key={item.id} className='flex items-center gap-[8px]'>
            <BreadcrumbItem data={{ ...item, isLast: i === items.length - 1 }} />

            {i !== items.length - 1 && (
              <ChevronRight className={'w-[21px] h-[21px] text-white/80'} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BreadcrumbList;
