'use client';

import React from 'react';
import { Tag } from '@entities/tag/model/types';
import TagItem from '@entities/tag/ui/tag-item';
import { cn } from '@shared/lib/utils';

interface Props {
  items: Tag[];
  listClassNames?: string;
}

const TagList: React.FC<Props> = ({ items, listClassNames }) => {
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
            <TagItem data={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TagList;
