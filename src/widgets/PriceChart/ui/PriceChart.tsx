import { useEffect, useRef } from 'react';
import { createSeriesMarkers } from 'lightweight-charts';
import type {
  IChartApi,
  ISeriesApi,
  ISeriesMarkersPluginApi,
  Time,
} from 'lightweight-charts';

import { useRealtimePrice } from '../model/useRealtimePrice';
import { createChartInstance, createAreaSeries } from '../lib/chartInit';
import { updateChartData } from '../lib/chartUpdate';

export function PriceChart() {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<'Area'> | null>(null);
  const markersRef = useRef<ISeriesMarkersPluginApi<Time> | null>(null);

  const { priceData } = useRealtimePrice();

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChartInstance(chartContainerRef.current);
    const areaSeries = createAreaSeries(chart);
    const seriesMarkers = createSeriesMarkers(areaSeries);

    chartRef.current = chart;
    seriesRef.current = areaSeries;
    markersRef.current = seriesMarkers;

    const handleResize = () => {
      if (chartContainerRef.current && chartRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      chart.remove();
    };
  }, []);

  useEffect(() => {
    if (
      seriesRef.current &&
      chartRef.current &&
      markersRef.current &&
      priceData.length > 0
    ) {
      updateChartData(
        seriesRef.current,
        chartRef.current,
        markersRef.current,
        priceData,
      );
    }
  }, [priceData]);

  return (
    <div
      ref={chartContainerRef}
      className="w-full"
      style={{ height: '348px' }}
    />
  );
}
