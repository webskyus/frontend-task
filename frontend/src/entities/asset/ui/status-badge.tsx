import React from 'react';
import { cn } from '@shared/lib/utils';
import { capitalizeText } from '@shared/lib/helpers';
import {
  ASSET_STATUS_CARD_NAME_LIST,
  ASSET_STATUS_FILTER_NAME_LIST,
  AssetStatusType,
} from '@entities/asset/model/type';
import { statusVisual } from '@entities/asset/lib/get-status-visual';

interface Props {
  status: AssetStatusType;
  className?: string;
}

const StatusBadge: React.FC<Props> = ({ status, className }) => {
  const label = ASSET_STATUS_CARD_NAME_LIST[status as keyof typeof ASSET_STATUS_FILTER_NAME_LIST];

  return (
    <div
      className={cn(
        'flex items-center gap-[4px] px-[8px] py-[4px] max-w-max rounded-[8px]',
        statusVisual[status].styles,
        className
      )}
    >
      <div
        className={cn([
          'flex items-center justify-center w-[14px] h-[14px] rounded-full',
          statusVisual[status].icon.wrapperStyles,
        ])}
      >
        {statusVisual[status].icon.element}
      </div>

      <span className={'leading-[14px] line-clamp-1 overflow-ellipsis whitespace-nowrap'}>
        {capitalizeText(label)}
      </span>
    </div>
  );
};

export default StatusBadge;
