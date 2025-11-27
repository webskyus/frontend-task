import { Asset } from '@entities/asset/model/type';
import React from 'react';

interface Props {
  asset: Asset;
}

const AssetCard: React.FC<Props> = ({ asset }) => {
  return (
    <div>
      <div>
        <img src={asset.thumbnailUrl} alt={asset.deliverableTitle} className='w-full' />
      </div>

      <div>
        <p>{asset.status}</p>
        <p>{asset.deliverableTitle}</p>
        <p>{asset.creatorName}</p>
        <p>{asset.commentsCount} comments</p>
      </div>
    </div>
  );
};

export default AssetCard;
