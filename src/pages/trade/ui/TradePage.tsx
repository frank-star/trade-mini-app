import { useState } from 'react';
import cn from 'classnames';

import { ConnectWallet, useWallet } from '@/features/connect-wallet';
import { SelectWallet } from '@/features/select-wallet';
import { PriceChart, useRealtimePrice } from '@/widgets/PriceChart';
import { RecentTradesWidget } from '@/widgets/RecentTradesWidget';
import { PositionDetails } from '@/widgets/PositionDetails';
import { PriceCurrentDifference } from '@/widgets/PriceCurrentDifference';

import { TRADING_PAIR, DEFAULT_LEVERAGE } from '@/shared/config/constants';

import { FavoritesToggle } from '@/features/favorites-toggle';
import { CoinSettings } from '@/features/coin-settings';
import { PairSelect } from '@/features/pair-select';
import { TimeframeSelector } from '@/features/select-timeframe';

import { BulletsPagination } from '@/shared/ui';

import type { Timeframe } from '@/features/select-timeframe/model/timeframe';

export function TradePage() {
  const { currentPrice } = useRealtimePrice();
  const { wallet } = useWallet();

  const [selectedTimeframe, setSelectedTimeframe] = useState<Timeframe>('1M');
  const [currentPage, setCurrentPage] = useState(1);
  const [isPositionDetailsExpanded, setIsPositionDetailsExpanded] =
    useState(false);

  return (
    <div
      className={cn('flex flex-col gap-2 pb-30', {
        'pb-42': isPositionDetailsExpanded,
      })}
    >
      <div className="flex items-center justify-between gap-3">
        <PairSelect pair={TRADING_PAIR} leverage={DEFAULT_LEVERAGE} />
        {wallet.isConnected ? <SelectWallet /> : <ConnectWallet />}
      </div>

      <div className="py-3 flex items-center justify-between">
        <PriceCurrentDifference currentPrice={currentPrice} />

        <div className="flex items-center gap-2">
          <FavoritesToggle />
          <CoinSettings />
        </div>
      </div>

      <div className="relative">
        <PriceChart />
        <RecentTradesWidget />
      </div>

      <TimeframeSelector
        selected={selectedTimeframe}
        onSelect={setSelectedTimeframe}
      />

      <BulletsPagination
        total={5}
        current={currentPage}
        onChange={setCurrentPage}
      />

      <PositionDetails onExpand={setIsPositionDetailsExpanded} />
    </div>
  );
}
