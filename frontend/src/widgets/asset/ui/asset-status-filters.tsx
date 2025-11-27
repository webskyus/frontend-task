'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@shared/lib/utils';
import { assetStatuses } from '@entities/asset/model/statuses';

const AssetStatusFilters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const current = searchParams.get('status') || '';

  const update = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) params.set('status', value);
    if (!value) params.delete('status');

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className='flex gap-3 overflow-x-auto py-3 scrollbar-hide'>
      {assetStatuses.map((s) => {
        const isActive = current === s.value;

        return (
          <button
            key={s.value}
            onClick={() => update(s.value)}
            className={cn([
              `
              flex items-center gap-2 px-4 py-2 rounded-full text-sm whitespace-nowrap
              border transition
            `,
              isActive
                ? 'bg-white text-black border-white shadow-md'
                : 'bg-white/10 border-white/20 text-white',
            ])}
          >
            <span className={`w-3 h-3 rounded-full ${s.color}`} />

            {s.label}

            <span className='opacity-70'>0</span>
          </button>
        );
      })}
    </div>
  );
};

export default AssetStatusFilters;
