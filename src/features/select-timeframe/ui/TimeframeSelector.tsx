import cn from 'classnames';

import { TIMEFRAMES, type Timeframe } from '../model/timeframe';

type TimeframeSelectorProps = {
  selected: Timeframe;
  onSelect: (timeframe: Timeframe) => void;
};

export function TimeframeSelector({
  selected,
  onSelect,
}: TimeframeSelectorProps) {
  return (
    <div className="flex gap-2 p-1">
      {TIMEFRAMES.map((timeframe) => (
        <div
          key={timeframe}
          className="flex-1 relative"
          style={{ minWidth: 0 }}
        >
          <button
            className={cn(
              'relative w-full flex-1 px-4 py-2 rounded-xl font-medium transition-all duration-300 cursor-pointer',
              {
                'bg-accent-orange/5 text-accent-orange border border-accent-gold/30':
                  selected === timeframe,
                'bg-surface border border-transparent text-white hover:bg-surface-darker':
                  selected !== timeframe,
              },
            )}
            onClick={() => onSelect(timeframe)}
          >
            {timeframe}
          </button>
        </div>
      ))}
    </div>
  );
}
