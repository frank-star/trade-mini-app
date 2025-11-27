import { useEffect, useState } from 'react';

import { RecentTrades } from './RecentTrades';

import { getInitialRecentTrades, generateRandomTrade } from '../lib/mockData';

import type { TradeEvent } from '@/entities/trade-event';

export function RecentTradesWidget() {
  const [recentTrades, setRecentTrades] = useState<TradeEvent[]>(
    getInitialRecentTrades,
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const newTrade = generateRandomTrade();

      setRecentTrades((prev) => [...prev, newTrade]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return <RecentTrades trades={recentTrades} />;
}
