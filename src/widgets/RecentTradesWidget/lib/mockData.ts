import type { TradeEvent, TradeType } from '@/entities/trade-event';

export function getInitialRecentTrades(): TradeEvent[] {
  return [
    {
      id: 'trade-1',
      userName: 'Dany',
      timestamp: new Date(new Date().setHours(12, 32)),
      type: 'long',
      leverage: 10,
    },
    {
      id: 'trade-2',
      userName: 'Gabriel',
      timestamp: new Date(new Date().setHours(12, 45)),
      type: 'short',
      leverage: 100,
    },
  ];
}

export function generateRandomTrade(): TradeEvent {
  const names = ['Dany', 'Gabriel', 'Alex', 'Maria', 'John', 'Sarah'];
  const types: TradeType[] = ['long', 'short'];

  return {
    id: `trade-${Date.now()}-${Math.random()}`,
    userName: names[Math.floor(Math.random() * names.length)],
    timestamp: new Date(),
    type: types[Math.floor(Math.random() * types.length)],
    leverage: Math.floor(Math.random() * 100) + 1,
  };
}
