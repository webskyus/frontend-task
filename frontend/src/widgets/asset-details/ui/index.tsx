'use client';

import React from 'react';
import AssetMediaPanel from '@widgets/asset-media-panel/ui/asset-media-panel';
import AssetEditForm from '@widgets/asset-edit-form/ui/asset-edit-form';
import useAsset from '@features/fetch-assets/model/use-asset';
import AssetStatusPanel from '@widgets/asset-status-panel/ui/asset-status-panel';
import { useParams } from 'next/navigation';
import AssetDetailsSidebar from '@widgets/asset-details-sidebar/ui/asset-details-sidebar';
import { Sheet, SheetContent } from '@shared/ui/sheet';
import { Button } from '@shared/ui/button';

const AssetDetailsWidget = () => {
  const params = useParams();
  const id = (params.id || '') as string;
  const { data: asset, isLoading, error } = useAsset(id);

  const [sheetIsOpen, setSheetIsOpen] = React.useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (error || !asset) return <div>Failed to load asset</div>;

  return (
    <section
      className={
        'flex flex-col h-full bg-blue-950/3 border-t-[2px] border-t-gray-500/10 lg:flex-row'
      }
    >
      <section className={'w-full p-[10px] lg:w-2/3 lg:p-[20px]'}>
        <section
          className={'max-w-full mx-auto space-y-[30px] lg:max-w-[1000px] 2xl:max-w-[1200px]'}
        >
          <AssetStatusPanel asset={asset} handleShowDrawer={setSheetIsOpen} />
          <AssetMediaPanel asset={asset} />
          <AssetEditForm asset={asset} />
        </section>
      </section>

      <section
        className={`
            w-full hidden
            border-t-[2px] border-t-gray-500/10 
            lg:w-1/3 lg:block lg:border-t-0 lg:border-l-[2px] lg:border-l-gray-500/10
          `}
      >
        <AssetDetailsSidebar />
      </section>

      <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
        <SheetContent side={'left'} className={'max-w-full w-full sm:!max-w-full sm:!w-[450px]'}>
          <AssetDetailsSidebar />

          <Button
            type={'button'}
            onClick={() => setSheetIsOpen(false)}
            variant='outline'
            className={'mt-auto mb-[10px] mx-[10px] text-white sm:hidden'}
          >
            Close
          </Button>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default AssetDetailsWidget;
