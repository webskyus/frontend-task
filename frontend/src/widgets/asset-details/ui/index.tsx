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
import MediaQuery from 'react-responsive';
import { BREAKPOINTS } from '@shared/config/breakpoints';
import { Spinner } from '@shared/ui/spinner';

const AssetDetailsWidget = () => {
  const params = useParams();
  const id = (params.id || '') as string;
  const { data: asset, isLoading, error } = useAsset(id);

  const [sheetIsOpen, setSheetIsOpen] = React.useState(false);

  if (isLoading)
    return (
      <div
        className={
          'w-full flex items-center justify-center space-x-[10px] p-[20px] text-[16px] text-white/80'
        }
      >
        <Spinner />
        <span>Loading...</span>
      </div>
    );
  if (error || !asset)
    return <p className={'w-full p-[20px] text-[16px] text-white'}>Something went wrong...</p>;

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

      <MediaQuery minWidth={BREAKPOINTS.LG}>
        <section
          className={`
            w-full
            border-t-[2px] border-t-gray-500/10 
            lg:w-1/3 lg:border-t-0 lg:border-l-[2px] lg:border-l-gray-500/10
          `}
        >
          <AssetDetailsSidebar asset={asset} />
        </section>
      </MediaQuery>

      <MediaQuery maxWidth={BREAKPOINTS.LG}>
        <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
          <SheetContent
            side={'left'}
            className={
              'max-w-full w-full overflow-y-auto hide-scrollbar-y-mobile touch-manipulation sm:!max-w-full sm:!w-[450px]'
            }
          >
            <AssetDetailsSidebar asset={asset} />

            <Button
              type={'button'}
              onClick={() => setSheetIsOpen(false)}
              variant='outline'
              className={'mt-auto mb-[10px] mx-[10px] text-white'}
            >
              Close
            </Button>
          </SheetContent>
        </Sheet>
      </MediaQuery>
    </section>
  );
};

export default AssetDetailsWidget;
