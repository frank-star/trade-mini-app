import { useState, useEffect, useRef } from 'react';

import {
  INITIAL_PRICE,
  PRICE_CHANGE_MIN,
  PRICE_CHANGE_MAX,
  UPDATE_INTERVAL_MS,
} from '@/shared/config/constants';

import type { PriceData, CurrentPrice } from '@/entities/price';

function generateRandomChange(): number {
  return (
    Math.random() * (PRICE_CHANGE_MAX - PRICE_CHANGE_MIN) + PRICE_CHANGE_MIN
  );
}

export function useRealtimePrice() {
  const [priceData, setPriceData] = useState<PriceData[]>([]);
  const [currentPrice, setCurrentPrice] = useState<CurrentPrice>({
    value: INITIAL_PRICE,
    change: 0,
    changePercent: 0,
  });
  const intervalRef = useRef<number | undefined>(undefined);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const initialData: PriceData[] = [];

    const now = Date.now() / 1000;

    for (let i = 0; i < 50; i++) {
      initialData.push({
        time: now - (50 - i) * 60,
        value: INITIAL_PRICE + Math.random() * 20 - 10,
      });
    }

    requestAnimationFrame(() => {
      setPriceData(initialData);
    });

    timeRef.current = now;

    intervalRef.current = window.setInterval(() => {
      setPriceData((prev) => {
        const change = generateRandomChange();
        const newPrice = prev[prev.length - 1].value + change;
        const newTime = timeRef.current + 2;

        timeRef.current = newTime;

        const newData = [...prev, { time: newTime, value: newPrice }];

        if (newData.length > 100) {
          return newData.slice(-100);
        }

        return newData;
      });

      setCurrentPrice((prev) => {
        const change = generateRandomChange();
        const newValue = Math.max(0, prev.value + change);
        const changeAmount = newValue - INITIAL_PRICE;
        const changePercent =
          INITIAL_PRICE > 0 ? (changeAmount / INITIAL_PRICE) * 100 : 0;

        return {
          value: newValue,
          change: changeAmount,
          changePercent,
        };
      });
    }, UPDATE_INTERVAL_MS);

    return () => {
      if (intervalRef.current !== undefined) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
    priceData,
    currentPrice,
  };
}
