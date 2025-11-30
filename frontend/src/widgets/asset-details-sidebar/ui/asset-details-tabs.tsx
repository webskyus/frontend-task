'use client';

import { cn } from '@shared/lib/utils';
import useSidebarTab from '@widgets/asset-details-sidebar/model/use-sidebar-tab';
import { TABS, tabs } from '@widgets/asset-details-sidebar/model/tabs';
import { Button } from '@shared/ui/button';
import AssetOverviewPanel from '@widgets/asset-overview-panel/ui/asset-overview-panel';
import React from 'react';
import AssetMessagesPanel from '@features/message-panel/ui/messages-panel';
import { EllipsisVertical } from 'lucide-react';
import AssetDetailsInstructions from '@widgets/asset-details-sidebar/ui/asset-details-instructions';
import { useParams } from 'next/navigation';
import useAsset from '@features/fetch-assets/model/use-asset';

const AssetDetailsTabs = () => {
  const params = useParams();
  const id = (params.id || '') as string;
  const { data: asset, error } = useAsset(id);
  const { tab, setTab } = useSidebarTab();

  if (error || !asset) return <div>Failed to load asset</div>;

  return (
    <aside>
      <header className={'flex min-h-[50px]  border-b-[2px] border-gray-500/10 '}>
        {tabs.map((item) => (
          <Button
            key={item.key}
            variant={'link'}
            onClick={() => setTab(item.key)}
            className={cn([
              'p-0 h-auto py-[4px] px-[12px] text-[14px] !text-white/80 font-medium rounded-none cursor-pointer transition-colors hover:no-underline',
              tab === item.key
                ? '!text-status-approved border-b-[2px] border-b-status-approved'
                : 'text-mutedForeground hover:text-white',
            ])}
          >
            {item.label}
          </Button>
        ))}

        <Button
          variant={'link'}
          className={'mr-[10px] translate-y-[5px] p-0 ml-auto cursor-pointer'}
        >
          <EllipsisVertical />
        </Button>
      </header>

      <React.Activity mode={tab === TABS.OVERVIEW ? 'visible' : 'hidden'}>
        <AssetOverviewPanel asset={asset} />
        <hr className={'my-[10px] border-gray-500/10'} />
        <AssetDetailsInstructions />
      </React.Activity>

      <React.Activity mode={tab === TABS.MESSAGES ? 'visible' : 'hidden'}>
        <AssetMessagesPanel asset={asset} />
      </React.Activity>
    </aside>
  );
};

export default AssetDetailsTabs;
