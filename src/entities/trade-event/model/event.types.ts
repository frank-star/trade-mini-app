export type TradeType = 'long' | 'short';

export type TradeEvent = {
  id: string;
  userName: string;
  timestamp: Date;
  type: TradeType;
  leverage: number;
};
