import React from 'react';
import { Button } from '@shared/ui/button';
import StatusBadge from '@entities/asset/ui/status-badge';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@shared/ui/drawer';
import { assetStatuses } from '@entities/asset/model/statuses';
import { cn } from '@shared/lib/utils';
import { CheckIcon, TextAlignJustify } from 'lucide-react';
import useUpdateStatus from '@features/update-asset-status/model/use-update-status';
import { Spinner } from '@shared/ui/spinner';
import { Asset, ASSET_STATUS_VALUES_LIST } from '@entities/asset/model/type';
import { toast } from 'sonner';

interface Props {
  asset: Asset;
  handleShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const AssetStatusPanel: React.FC<Props> = ({ asset, handleShowDrawer }) => {
  const [isActiveStatus, setIsActiveStatus] = React.useState(asset.status);
  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);

  const { updateStatus, isPending } = useUpdateStatus(
    asset,
    () => {
      setDrawerIsOpen(false);
      toast('Asset status updated successfully', {
        description: 'Asset status submitted successfully',
      });
    },
    () =>
      toast('Something went wrong...', {
        description: 'Please try again... Or check your internet connection...',
      })
  );
  const handleSetStatus = () => updateStatus({ status: isActiveStatus });

  return (
    <section
      className={'flex justify-between items-center  gap-[10px] lg:justify-end lg:gap-[20px]'}
    >
      <Button
        variant={'link'}
        onClick={() => handleShowDrawer(true)}
        className={'flex w-auto max-h-auto h-auto p-0 text-transparent lg:hidden'}
      >
        <TextAlignJustify className={'min-w-[24px] min-h-[24px] text-white'} />
      </Button>

      <StatusBadge status={asset.status} />

      <Drawer open={drawerIsOpen} onOpenChange={setDrawerIsOpen}>
        <DrawerTrigger asChild>
          <Button
            className={`
                relative inline-flex items-center justify-center h-auto px-[20px] py-[8px] 
                text-[17px] text-white cursor-pointer
                overflow-hidden  transition-transform duration-300 rounded-[8px]
                hover:scale-[1.03]  active:scale-[0.98] animate-gradient-move
            `}
          >
            <span
              className='
                absolute inset-0
                bg-gradient-to-r from-pink-500 via-purple-800 to-blue-900
                animate-gradientMove
                bg-[length:200%_200%]
                opacity-90
              '
            />
            <span
              className='
                absolute inset-0 rounded-xl
                bg-gradient-to-r from-pink-500/40 via-purple-500/40 to-blue-500/40
                blur-xl opacity-0
                transition-opacity duration-300
                group-hover:opacity-40
              '
            />

            <span className={'relative'}>Edit Status</span>
          </Button>
        </DrawerTrigger>

        <DrawerContent>
          <div className='mx-auto w-full max-w-lg'>
            <DrawerHeader>
              <DrawerTitle>Set new status</DrawerTitle>
              <DrawerDescription className={'mb-[16px]'}>
                Set updated status for current asset
              </DrawerDescription>
              <div className={'inline-flex flex-wrap'}>
                {assetStatuses.slice(1).map((status) => {
                  return (
                    <Button
                      key={status.value}
                      disabled={asset.status !== ASSET_STATUS_VALUES_LIST.PENDING_ADMIN_REVIEW}
                      onClick={() => setIsActiveStatus(status.value)}
                      variant={'link'}
                      className={cn([
                        `
                          min-h-auto max-w-max h-auto p-0 
                          px-[10px] py-[4px] text-[16px] 
                          text-black/70 rounded-none border-[2px] border-transparent
                          border-none cursor-pointer transition-all ring-0 
                          hover:no-underline hover:opacity-80
                        `,
                        status.color,
                      ])}
                    >
                      {isActiveStatus === status.value && <CheckIcon />}
                      <span>{status.label}</span>
                    </Button>
                  );
                })}
              </div>
            </DrawerHeader>
            <DrawerFooter>
              <Button
                disabled={
                  isPending || asset.status !== ASSET_STATUS_VALUES_LIST.PENDING_ADMIN_REVIEW
                }
                className={'space-x-[10px]'}
                onClick={handleSetStatus}
              >
                <React.Activity mode={isPending ? 'visible' : 'hidden'}>
                  <Spinner />
                </React.Activity>

                <React.Activity
                  mode={
                    asset.status === ASSET_STATUS_VALUES_LIST.PENDING_ADMIN_REVIEW
                      ? 'visible'
                      : 'hidden'
                  }
                >
                  <span>Update asset status</span>
                </React.Activity>

                <React.Activity
                  mode={
                    asset.status !== ASSET_STATUS_VALUES_LIST.PENDING_ADMIN_REVIEW
                      ? 'visible'
                      : 'hidden'
                  }
                >
                  <span>You cannot update the status if the Asset is not pending admin review</span>
                </React.Activity>
              </Button>

              <DrawerClose asChild>
                <Button variant='outline' className={'text-white'}>
                  Cancel
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </section>
  );
};

export default AssetStatusPanel;
