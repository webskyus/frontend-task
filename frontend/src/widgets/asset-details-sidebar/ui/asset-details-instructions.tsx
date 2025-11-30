import React from 'react';
import { ChevronRight } from 'lucide-react';

const AssetDetailsInstructions = () => {
  return (
    <section>
      <header className={'flex items-center justify-between p-[15px]'}>
        <h3 className={'text-[18px] font-bold text-white'}>Caption & Sounds Instructions</h3>
        <ChevronRight className={'w-[20px] h-[20px] text-white'} />
      </header>
    </section>
  );
};

export default AssetDetailsInstructions;
