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
    return (
      <span className='text-[14px] font-semibold text-white  cursor-default '>{data.name}</span>
    );
  }

  return (
    <Link
      href={data.link}
      className='text-[14px] font-medium text-white/80  cursor-pointer transition hover:text-white'
    >
      {data.name}
    </Link>
  );
};

export default BreadcrumbItem;
