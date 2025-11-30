import { ASSET_STATUS_VALUES_LIST, AssetStatusType } from '@entities/asset/model/type';
import React from 'react';
import { CheckIcon, ShieldAlert, X } from 'lucide-react';

const statusVisual: Record<
  AssetStatusType,
  {
    styles: string;
    icon: { element: React.ReactNode; wrapperStyles: string };
  }
> = {
  [ASSET_STATUS_VALUES_LIST.AWAITING_ASSET]: {
    styles:
      'font-medium text-[14px] bg-status-inReview text-status-black border-[2px] border-status-inReview/70',
    icon: {
      element: <ShieldAlert width={10} height={10} className={'text-white'} strokeWidth={3} />,
      wrapperStyles: 'bg-black',
    },
  },
  [ASSET_STATUS_VALUES_LIST.PENDING_ADMIN_REVIEW]: {
    styles:
      'font-medium text-[14px] bg-orange-900 text-status-pendingAdmin border-[2px] border-status-pendingAdmin/70',
    icon: {
      element: <ShieldAlert width={10} height={10} className={'text-black'} strokeWidth={3} />,
      wrapperStyles: 'bg-status-pendingAdmin',
    },
  },
  [ASSET_STATUS_VALUES_LIST.PENDING_BRAND_REVIEW]: {
    styles:
      'font-medium text-[14px] bg-status-pending orange-900 text-status-black border-[2px] border-status-pending/70',
    icon: {
      element: <ShieldAlert width={10} height={10} className={'text-white'} strokeWidth={3} />,
      wrapperStyles: 'bg-black',
    },
  },
  [ASSET_STATUS_VALUES_LIST.APPROVED]: {
    styles: 'font-medium text-[14px] bg-status-approved text-status-black',
    icon: {
      element: <CheckIcon width={10} height={10} className={'text-white'} />,
      wrapperStyles: 'bg-black',
    },
  },
  [ASSET_STATUS_VALUES_LIST.REJECTED]: {
    styles: 'font-medium text-[14px] bg-status-rejected text-status-black',
    icon: {
      element: <X width={10} height={10} className={'text-white'} />,
      wrapperStyles: 'bg-black',
    },
  },
  [ASSET_STATUS_VALUES_LIST.ALL]: {
    styles: '',
    icon: {
      element: <ShieldAlert width={10} height={10} />,
      wrapperStyles: '',
    },
  },
};

export { statusVisual };
