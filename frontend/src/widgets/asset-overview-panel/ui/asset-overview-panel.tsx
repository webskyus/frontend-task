import React from 'react';
import { Avatar, AvatarImage } from '@shared/ui/avatar';
import { Asset } from '@entities/asset/model/type';

interface Props {
  asset: Asset;
}

const AssetOverviewPanel: React.FC<Props> = ({ asset }) => {
  return (
    <div className='max-w-[400px] p-[15px] py-[20px] space-y-[30px] '>
      <h3 className='text-[18px] font-bold text-white'>Overview</h3>

      <div className='flex items-center gap-[10px]'>
        <Avatar className='w-[40px] h-[40px]'>
          <AvatarImage src={asset.creator.profilePictureUrl} />
        </Avatar>
        <div>
          <p className='ont-semibold text-[14px] text-white/80 f'>Brand</p>
          <p className='text-[14px] text-white '>{asset.creator.name}</p>
        </div>
      </div>

      <div>
        <p className='text-[14px] mb-[4px] text-white/80 '>Brief Name</p>
        <p className='text-[14px] text-white '>{asset.deliverable.brief.name}</p>
      </div>

      <div className='flex justify-between'>
        <div>
          <p className='text-[14px] mb-[4px] text-white/80 '>Fee</p>
          <p className='text-[14px] text-white '>—</p>
        </div>
        <div>
          <p className='text-[14px] mb-[4px] text-white/80 '>Deadline</p>
          <p className='text-[14px] text-white '>—</p>
        </div>
      </div>

      <div>
        <p className='mb-[4px] text-white/80 text-[14px] '>Deliverable title</p>
        <p className='text-[14px] text-white '>{asset.deliverable.title}</p>
      </div>
    </div>
  );
};

export default AssetOverviewPanel;
