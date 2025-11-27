import { ASSET_STATUS_LIST } from '@entities/asset/model/type';

const assetStatuses = [
  {
    value: '',
    label: 'All',
    color: 'bg-neutral-500',
  },
  {
    value: ASSET_STATUS_LIST.AWAITING_ASSET,
    label: 'Awaiting asset',
    color: 'bg-yellow-400',
  },
  {
    value: ASSET_STATUS_LIST.PENDING_ADMIN_REVIEW,
    label: 'Needs admin review',
    color: 'bg-blue-400',
  },
  {
    value: ASSET_STATUS_LIST.PENDING_BRAND_REVIEW,
    label: 'In brand review',
    color: 'bg-purple-400',
  },
  {
    value: ASSET_STATUS_LIST.REJECTED,
    label: 'Rejected (awaiting edits)',
    color: 'bg-red-400',
  },
  {
    value: ASSET_STATUS_LIST.APPROVED,
    label: 'Approved',
    color: 'bg-green-400',
  },
];

export { assetStatuses };
