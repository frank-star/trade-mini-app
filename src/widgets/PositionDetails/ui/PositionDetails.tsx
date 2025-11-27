import { useState } from 'react';
import cn from 'classnames';

import { OpenLongPosition } from '@/features/open-long-position/ui/OpenLongPosition';
import { OpenShortPosition } from '@/features/open-short-position/ui/OpenShortPosition';

import { IconChevronDown } from '@/assets';

import { DEFAULT_MARGIN, DEFAULT_LEVERAGE } from '@/shared/config/constants';
import { Tag } from '@/shared/ui';

type PositionDetailsProps = {
  onExpand?: (status: boolean) => void;
};

export function PositionDetails({ onExpand }: PositionDetailsProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
    onExpand?.(!isExpanded);
  };

  return (
    <div className="fixed bottom-[70px] left-0 right-0 bg-background border-t border-white/5 rounded-t-[20px]">
      <div className="w-full max-w-lg mx-auto px-3 py-2">
        <div className="flex items-center justify-between">
          <h3 className="text-white/50 text-xs">Position details</h3>

          <div className="flex items-center gap-2">
            <div className="flex gap-2 overflow-hidden transition-all duration-300 ease-in-out">
              <Tag>Margin ${DEFAULT_MARGIN}</Tag>
              <Tag>Leverage {DEFAULT_LEVERAGE}x</Tag>
            </div>

            <button
              onClick={handleExpand}
              className="p-1.5 hover:bg-surface-light rounded-lg text-white/70 transition-colors"
            >
              <IconChevronDown
                className={cn('size-3.5 transition-transform duration-300', {
                  'rotate-180': isExpanded,
                })}
              />
            </button>
          </div>
        </div>

        <div
          className={cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            {
              'max-h-0 opacity-0 mt-0': !isExpanded,
              'max-h-[200px] opacity-100 mt-4': isExpanded,
            },
          )}
        >
          <div className="flex gap-2">
            <OpenLongPosition />
            <OpenShortPosition />
          </div>
        </div>
      </div>
    </div>
  );
}
