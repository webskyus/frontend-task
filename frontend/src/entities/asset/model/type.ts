enum ASSET_GRID_MODE {
  SINGLE = 'SINGLE',
  MULTI = 'MULTI',
}

enum ASSET_STATUS_VALUES_LIST {
  ALL = '',
  AWAITING_ASSET = 'AWAITING_ASSET',
  PENDING_ADMIN_REVIEW = 'PENDING_ADMIN_REVIEW',
  PENDING_BRAND_REVIEW = 'PENDING_BRAND_REVIEW',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

enum ASSET_STATUS_NAME_LIST {
  ALL = 'All',
  AWAITING_ASSET = 'Awaiting asset',
  PENDING_ADMIN_REVIEW = 'Needs admin review',
  PENDING_BRAND_REVIEW = 'In brand review',
  APPROVED = 'Approved',
  REJECTED = 'Rejected (awaiting edits)',
}

type AssetStatusType = (typeof ASSET_STATUS_VALUES_LIST)[keyof typeof ASSET_STATUS_VALUES_LIST];

interface Asset {
  id: string;
  deliverableTitle: string;
  creatorName: string;
  creatorAvatarUrl: string;
  videoUrl: string;
  thumbnailUrl: string;
  status: AssetStatusType;
  commentsCount: number;
}

export {
  type Asset,
  type AssetStatusType,
  ASSET_STATUS_VALUES_LIST,
  ASSET_STATUS_NAME_LIST,
  ASSET_GRID_MODE,
};
