'use client';

import React from 'react';
import { Breadcrumb as BreadcrumbType } from '@entities/breadcrumbs/model/types';
import { ChevronRight } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@shared/ui/breadcrumbs';

interface Props {
  items: BreadcrumbType[];
}

const Breadcrumbs: React.FC<Props> = ({ items }) => {
  return (
    <Breadcrumb className='flex items-center'>
      <BreadcrumbList
        className={
          'flex items-center flex-nowrap gap-[8px] py-[10px] overflow-x-auto hide-scrollbar-x-mobile lg:py-[20px]'
        }
      >
        {items.map((item, i) => (
          <React.Fragment key={item.id + i}>
            <React.Activity mode={i !== items.length - 1 ? 'visible' : 'hidden'}>
              <BreadcrumbItem className='flex items-center gap-[8px]'>
                <BreadcrumbLink
                  href={item.link}
                  className='text-[14px] text-white/80  cursor-pointer transition hover:text-white'
                >
                  {item.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </React.Activity>

            <React.Activity mode={i === items.length - 1 ? 'visible' : 'hidden'}>
              <BreadcrumbItem className='flex items-center gap-[8px] font-semibold text-white'>
                {item.name}
              </BreadcrumbItem>
            </React.Activity>

            <BreadcrumbSeparator>
              <React.Activity mode={i !== items.length - 1 ? 'visible' : 'hidden'}>
                <ChevronRight className={'w-[21px] h-[21px] text-white/80'} />
              </React.Activity>
            </BreadcrumbSeparator>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
