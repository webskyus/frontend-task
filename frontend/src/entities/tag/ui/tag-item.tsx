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
    <span className={cn(['text-xs px-2 py-0.5 rounded-md border', data.color])}>{data.name}</span>
  );
};

export default TagItem;
