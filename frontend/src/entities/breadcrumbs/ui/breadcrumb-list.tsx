'use client';

import React from 'react';
import BreadcrumbItem from '@entities/breadcrumbs/ui/breadcrumb-item';
import { Breadcrumb } from '@entities/breadcrumbs/model/types';

interface Props {
  items: Breadcrumb[];
}

const BreadcrumbList: React.FC<Props> = ({ items }) => {
  return (
    <nav className='flex items-center gap-2 text-sm'>
      <ul>
        {items.map((item, i) => (
          <li key={item.id} className='flex items-center  gap-2'>
            <BreadcrumbItem data={{ ...item, isLast: i === items.length - 1 }} />

            {i !== items.length - 1 && <span className='text-muted-foreground'>/</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BreadcrumbList;
