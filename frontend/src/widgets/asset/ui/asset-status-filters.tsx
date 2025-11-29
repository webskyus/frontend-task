'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { assetStatuses } from '@entities/asset/model/statuses';
import { Button } from '@shared/ui/button';
import { cn } from '@shared/lib/utils';
import { Asset, ASSET_STATUS_VALUES_LIST } from '@entities/asset/model/type';

interface Props {
  data: Asset[] | undefined;
}

// Simple client-side filter via URL params.
// In production, this should trigger a server request with caching.
const AssetStatusFilters: React.FC<Props> = ({ data }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentFilter = searchParams.get('status') || '';

  const handleSetFilter = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) params.set('status', value);
    if (!value) params.delete('status');

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <article className='sticky top-[10px] left-0 flex mb-[20px] mx-auto px-[10px] overflow-x-auto hide-scrollbar-x-mobile lg:px-[inherit]'>
      <div className={'flex items-center mx-auto p-[4px] bg-foreground/10 rounded-[8px]'}>
        {assetStatuses.map((status, index) => {
          const isActive = currentFilter === status.value;
          const assetCount = data?.filter((asset) =>
            status.value === ASSET_STATUS_VALUES_LIST.ALL ? asset : asset.status === status.value
          ).length;

          return (
            <Button
              key={status.value}
              onClick={() => handleSetFilter(status.value)}
              variant={'link'}
              className={cn([
                'min-h-auto h-auto p-0 px-[10px] py-[4px] border-none cursor-pointer transition-all ring-0 hover:no-underline hover:opacity-80',
                isActive && 'bg-foreground/10',
              ])}
            >
              <React.Activity mode={index !== 0 ? 'visible' : 'hidden'}>
                <span
                  className={cn([
                    `w-[12px] h-[12px] rounded-[2px] opacity-70 bg-status-`,
                    status.color,
                  ])}
                />
              </React.Activity>

              {status.label}

              <span className='opacity-70'>{assetCount}</span>
            </Button>
          );
        })}
      </div>
    </article>
  );
};

export default AssetStatusFilters;
