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

const ASSET_STATUS_FILTER_NAME_LIST = {
  'ALL': 'All',
  [ASSET_STATUS_VALUES_LIST.AWAITING_ASSET]: 'Awaiting asset',
  [ASSET_STATUS_VALUES_LIST.PENDING_ADMIN_REVIEW]: 'Needs admin review',
  [ASSET_STATUS_VALUES_LIST.PENDING_BRAND_REVIEW]: 'In brand review',
  [ASSET_STATUS_VALUES_LIST.APPROVED]: 'Approved',
  [ASSET_STATUS_VALUES_LIST.REJECTED]: 'Rejected (awaiting edits)',
}

const ASSET_STATUS_SECTION_NAME_LIST = {
  'ALL': 'All',
  [ASSET_STATUS_VALUES_LIST.AWAITING_ASSET]: 'Awaiting asset',
  [ASSET_STATUS_VALUES_LIST.PENDING_ADMIN_REVIEW]: 'Needs review',
  [ASSET_STATUS_VALUES_LIST.PENDING_BRAND_REVIEW]: 'In brand review',
  [ASSET_STATUS_VALUES_LIST.APPROVED]: 'Approved',
  [ASSET_STATUS_VALUES_LIST.REJECTED]: 'Rejected (awaiting edits)',
}

const ASSET_STATUS_CARD_NAME_LIST = {
  'ALL': 'All',
  [ASSET_STATUS_VALUES_LIST.AWAITING_ASSET]: 'Awaiting asset',
  [ASSET_STATUS_VALUES_LIST.PENDING_ADMIN_REVIEW]: 'Pending admin review',
  [ASSET_STATUS_VALUES_LIST.PENDING_BRAND_REVIEW]: 'Pending in brand review',
  [ASSET_STATUS_VALUES_LIST.APPROVED]: 'Final Approved',
  [ASSET_STATUS_VALUES_LIST.REJECTED]: 'Rejected (awaiting edits)',
}

type AssetStatusType = (typeof ASSET_STATUS_VALUES_LIST)[keyof typeof ASSET_STATUS_VALUES_LIST];

interface Asset {
  id: number;
  creator: Creator;
  assetUrl: string;
  thumbnailUrl: string;
  caption: string;
  soundUrl: string;
  status: AssetStatusType
  deliverable: Deliverable;
}

interface Creator {
  id: number;
  name: string;
  handle: string;
  profilePictureUrl: string;
}

interface Deliverable {
  id: number;
  brief: Brief;
  title: string;
  deadline: string | null;
  submissionOrigin: string;
  fees: number | null;
}

interface Brief {
  id: number;
  name: string;
}

export {
  type Asset,
  type AssetStatusType,
  type Creator,
  type Deliverable,
  type Brief,
  ASSET_STATUS_VALUES_LIST,
  ASSET_STATUS_FILTER_NAME_LIST,
  ASSET_STATUS_SECTION_NAME_LIST,
  ASSET_STATUS_CARD_NAME_LIST,
  ASSET_GRID_MODE,
};
