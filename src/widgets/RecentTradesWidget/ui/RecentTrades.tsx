import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import { formatTime } from '@/shared/lib/utils';

import type { TradeEvent } from '@/entities/trade-event';

type RecentTradesProps = {
  trades: TradeEvent[];
};

export function RecentTrades({ trades }: RecentTradesProps) {
  const visibleTrades = trades.slice(-2);

  const timeoutRef = useRef<number | null>(null);
  const prevLastIdRef = useRef<string | undefined>(
    visibleTrades[visibleTrades.length - 1]?.id,
  );

  const [newTradeIds, setNewTradeIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const currentLastId = visibleTrades[visibleTrades.length - 1]?.id;
    const prevLastId = prevLastIdRef.current;

    if (currentLastId && currentLastId !== prevLastId) {
      requestAnimationFrame(() => {
        setNewTradeIds(new Set([currentLastId]));

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          setNewTradeIds((prev) => {
            const next = new Set(prev);

            next.delete(currentLastId);

            return next;
          });
        }, 500);
      });
    }

    prevLastIdRef.current = currentLastId;

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [visibleTrades]);

  if (!visibleTrades.length) return null;

  return (
    <div className="absolute bottom-10 left-1 z-10 flex flex-col gap-2 pointer-events-none">
      {visibleTrades.map((trade, index) => (
        <div
          key={trade.id}
          className={`px-3 text-sm transition-all duration-500 ease-out ${
            index === visibleTrades.length - 1
              ? 'opacity-100 translate-y-0'
              : 'opacity-20 -translate-y-2'
          }`}
          style={
            index === visibleTrades.length - 1 && newTradeIds.has(trade.id)
              ? { animation: 'slideUpFadeIn 0.5s ease-out' }
              : undefined
          }
        >
          <div className="flex items-center gap-2 text-xs">
            <span
              className={cn('font-medium', {
                'text-success': trade.type === 'long',
                'text-accent-orange-quench': trade.type === 'short',
              })}
            >
              {trade.userName}
            </span>

            <span className="text-secondary text-xxs">
              {formatTime(trade.timestamp)}
            </span>
          </div>

          <div className="font-medium">
            Opened {trade.type === 'long' ? 'Long' : 'Short'} {trade.leverage}X
          </div>
        </div>
      ))}
    </div>
  );
}
