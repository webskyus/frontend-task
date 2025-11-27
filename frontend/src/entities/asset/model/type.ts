type AssetStatusType =
  | 'AWAITING_ASSET'
  | 'PENDING_ADMIN_REVIEW'
  | 'PENDING_BRAND_REVIEW'
  | 'APPROVED'
  | 'REJECTED';

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

export type { Asset };
