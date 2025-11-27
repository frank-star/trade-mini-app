import { createChart, AreaSeries } from 'lightweight-charts';

import type { IChartApi, ISeriesApi } from 'lightweight-charts';

export function createChartInstance(container: HTMLDivElement): IChartApi {
  return createChart(container, {
    width: container.clientWidth,
    height: 348,
    layout: {
      background: { color: 'transparent' },
      textColor: 'rgba(255, 255, 255, 0.5)',
      fontFamily: 'Geist',
      fontSize: 10,
      attributionLogo: false,
    },
    grid: {
      vertLines: { visible: false },
      horzLines: { visible: false },
    },
    timeScale: {
      timeVisible: true,
      secondsVisible: false,
      borderColor: 'rgba(255, 255, 255, 0.1)',
      ticksVisible: true,
      rightOffsetPixels: 12,
    },
    rightPriceScale: {
      borderColor: 'rgba(255, 255, 255, 0.1)',
      scaleMargins: {
        top: 0.3,
        bottom: 0.25,
      },
      ticksVisible: true,
    },
  });
}

export function createAreaSeries(chart: IChartApi): ISeriesApi<'Area'> {
  return chart.addSeries(AreaSeries, {
    lineColor: '#ECBD75',
    lineWidth: 2,
    topColor: 'rgba(236, 189, 117, 0.1)',
    bottomColor: 'rgba(236, 189, 117, 0)',
    priceLineVisible: false,
    lastValueVisible: false,
  });
}
