enum ASSET_STATUS_LIST {
  AWAITING_ASSET = 'AWAITING_ASSET',
  PENDING_ADMIN_REVIEW = 'PENDING_ADMIN_REVIEW',
  PENDING_BRAND_REVIEW = 'PENDING_BRAND_REVIEW',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

type AssetStatusType = (typeof ASSET_STATUS_LIST)[keyof typeof ASSET_STATUS_LIST];

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

export { type Asset, type AssetStatusType, ASSET_STATUS_LIST };
