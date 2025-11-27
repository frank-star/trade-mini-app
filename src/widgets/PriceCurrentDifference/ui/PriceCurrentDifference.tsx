import { useMemo } from 'react';
import cn from 'classnames';

import { formatPrice } from '@/shared/lib/utils';

import type { CurrentPrice } from '@/entities/price';

type PriceCurrentDifferenceProps = {
  currentPrice: CurrentPrice;
};

export function PriceCurrentDifference({
  currentPrice,
}: PriceCurrentDifferenceProps) {
  const isPositive = useMemo(
    () => currentPrice.changePercent >= 0,
    [currentPrice.changePercent],
  );

  const isNegative = useMemo(
    () => currentPrice.changePercent < 0,
    [currentPrice.changePercent],
  );

  const changePercent = useMemo(
    () => currentPrice.changePercent.toFixed(2),
    [currentPrice.changePercent],
  );

  const priceParts = useMemo(() => {
    const formattedPrice = formatPrice(currentPrice.value);
    const dotIndex = formattedPrice.indexOf('.');

    if (dotIndex === -1) {
      return { integer: formattedPrice, decimal: '' };
    }

    return {
      integer: formattedPrice.slice(0, dotIndex),
      decimal: formattedPrice.slice(dotIndex),
    };
  }, [currentPrice.value]);

  return (
    <div className="flex items-center gap-2">
      <div className="text-3xl tracking-tight">
        <span className="text-white">{priceParts.integer}</span>
        {priceParts.decimal && (
          <span className="text-white/50">{priceParts.decimal}</span>
        )}
      </div>

      <div
        className={cn('text-lg', {
          'text-green-400': isPositive,
          'text-red-400': isNegative,
        })}
      >
        {isPositive ? '+' : ''}
        {changePercent}%
      </div>
    </div>
  );
}
