'use client';

import React from 'react';
import { cn } from '@shared/lib/utils';

interface Props {
  data: {
    name: string;
    color: string;
  };
}

const TagItem: React.FC<Props> = ({ data }) => {
  return (
    <span
      className={cn([
        'px-[12px] py-[4px] font-medium text-[10px]  text-white/80 whitespace-nowrap rounded-[6px] uppercase',
        data.color,
      ])}
    >
      {data.name}
    </span>
  );
};

export default TagItem;
