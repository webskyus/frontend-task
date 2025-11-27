'use client';

import React from 'react';
import { Tag } from '@entities/tag/model/types';
import TagItem from '@entities/tag/ui/tag-item';

interface Props {
  items: Tag[];
}

const TagList: React.FC<Props> = ({ items }) => {
  return (
    <nav className='flex items-center gap-2 text-sm'>
      <ul>
        {items.map((item) => (
          <li key={item.id} className='flex items-center  gap-2'>
            <TagItem data={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TagList;
