export type Timeframe = '15S' | '1M' | '1H' | '1D';

export const TIMEFRAMES: Timeframe[] = ['15S', '1M', '1H', '1D'];

export type TimeframeOption = {
  value: Timeframe;
  label: string;
};
