'use client';

import React from 'react';
import { Tag } from '@entities/tags/model/types';
import { cn } from '@shared/lib/utils';
import { Badge } from '@shared/ui/badge';

interface Props {
  items: Tag[];
  listClassNames?: string;
}

const Tags: React.FC<Props> = ({ items, listClassNames }) => {
  return (
    <nav className='flex items-center'>
      <ul
        className={cn([
          'flex items-center gap-[8px] py-[8px] overflow-x-auto hide-scrollbar-x-mobile',
          listClassNames,
        ])}
      >
        {items.map((item) => (
          <li key={item.id} className='flex items-center  gap-[8px]'>
            <Badge
              className={cn([
                'px-[12px] py-[4px] font-medium text-[10px]  text-white/80 whitespace-nowrap rounded-[6px] uppercase hover:text-black',
                item.color,
              ])}
            >
              {item.name}
            </Badge>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Tags;
