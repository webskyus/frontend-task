import {
  ASSET_STATUS_FILTER_NAME_LIST,
  ASSET_STATUS_VALUES_LIST,
} from '@entities/asset/model/type';

const assetStatuses = [
  {
    value: ASSET_STATUS_VALUES_LIST.ALL,
    label: ASSET_STATUS_FILTER_NAME_LIST.ALL,
    color: '',
  },
  {
    value: ASSET_STATUS_VALUES_LIST.AWAITING_ASSET,
    label: ASSET_STATUS_FILTER_NAME_LIST.AWAITING_ASSET,
    color: 'bg-status-pending',
  },
  {
    value: ASSET_STATUS_VALUES_LIST.PENDING_ADMIN_REVIEW,
    label: ASSET_STATUS_FILTER_NAME_LIST.PENDING_ADMIN_REVIEW,
    color: 'bg-status-pendingAdmin',
  },
  {
    value: ASSET_STATUS_VALUES_LIST.PENDING_BRAND_REVIEW,
    label: ASSET_STATUS_FILTER_NAME_LIST.PENDING_BRAND_REVIEW,
    color: 'bg-status-inReview',
  },
  {
    value: ASSET_STATUS_VALUES_LIST.REJECTED,
    label: ASSET_STATUS_FILTER_NAME_LIST.REJECTED,
    color: 'bg-status-rejected',
  },
  {
    value: ASSET_STATUS_VALUES_LIST.APPROVED,
    label: ASSET_STATUS_FILTER_NAME_LIST.APPROVED,
    color: 'bg-status-approved',
  },
];

export { assetStatuses };
