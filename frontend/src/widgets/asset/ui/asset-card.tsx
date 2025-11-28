import {
  Asset,
  ASSET_STATUS_NAME_LIST,
  ASSET_STATUS_VALUES_LIST,
  AssetStatusType,
} from '@entities/asset/model/type';
import React from 'react';
import Image from 'next/image';
import { capitalizeText } from '@shared/lib/helpers';
import { cn } from '@shared/lib/utils';

interface Props {
  asset: Asset;
}

const AssetCard: React.FC<Props> = ({ asset }) => {
  const getStatusStyles = (assetState: AssetStatusType) => {
    const statusStyles: Record<AssetStatusType, string> = {
      [ASSET_STATUS_VALUES_LIST.AWAITING_ASSET]:
        'font-medium text-[14px] bg-orange-900 text-status-pendingAdmin border-[2px] border-status-pendingAdmin/70',
      [ASSET_STATUS_VALUES_LIST.PENDING_ADMIN_REVIEW]:
        'font-medium text-[14px] bg-orange-900 text-status-pendingAdmin border-[2px] border-status-pendingAdmin/70',
      [ASSET_STATUS_VALUES_LIST.PENDING_BRAND_REVIEW]:
        'font-medium text-[14px] bg-orange-900 text-status-pendingAdmin border-[2px] border-status-pendingAdmin/70',
      [ASSET_STATUS_VALUES_LIST.APPROVED]:
        'font-medium text-[14px] bg-status-approved text-status-black',
      [ASSET_STATUS_VALUES_LIST.REJECTED]:
        'font-medium text-[14px] bg-status-rejected text-status-rejected',
      [ASSET_STATUS_VALUES_LIST.ALL]: '',
    };

    return statusStyles[assetState];
  };

  return (
    <article
      className={
        'relative max-w-[180px]  w-full h-full aspect-[3/6] p-[10px] rounded-[8px] overflow-hidden lg:aspect-[9/16] lg:max-w-[320px]'
      }
    >
      <Image
        src={asset.thumbnailUrl}
        fill={true}
        objectFit={'cover'}
        className={'z-0'}
        alt={asset.deliverableTitle}
      />

      <div className={'relative z-10'}>
        <span
          className={cn([
            'relative rounded-[8px] px-[8px] py-[4px]',
            getStatusStyles(asset.status),
          ])}
        >
          {capitalizeText(
            ASSET_STATUS_NAME_LIST[asset.status as keyof typeof ASSET_STATUS_NAME_LIST]
          )}
        </span>
      </div>
    </article>
  );
};

export default AssetCard;
