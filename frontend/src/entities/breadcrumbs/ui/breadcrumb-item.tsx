'use client';

import React from 'react';
import Link from 'next/link';

interface Props {
  data: {
    name: string;
    isLast: boolean;
    link: string;
  };
}

const BreadcrumbItem: React.FC<Props> = ({ data }) => {
  if (data.isLast) {
    return <span className='text-muted-foreground cursor-default'>{data.name}</span>;
  }

  return (
    <Link href={data.link} className='text-foreground hover:text-accent transition'>
      {data.name}
    </Link>
  );
};

export default BreadcrumbItem;
