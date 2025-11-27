import type {
  IChartApi,
  ISeriesApi,
  Time,
  SeriesMarker,
  ISeriesMarkersPluginApi,
} from 'lightweight-charts';
import type { PriceData } from '@/entities/price';

export function updateChartData(
  series: ISeriesApi<'Area'>,
  chart: IChartApi,
  markers: ISeriesMarkersPluginApi<Time>,
  priceData: PriceData[],
): void {
  if (!priceData.length) return;

  const chartData = priceData.map((point) => ({
    time: Math.floor(point.time) as Time,
    value: point.value,
  }));

  const existingPriceLines = series.priceLines();
  const lastPrice = chartData[chartData.length - 1].value;
  const lastTime = chartData[chartData.length - 1].time;

  series.setData(chartData);

  existingPriceLines.forEach((line) => {
    series.removePriceLine(line);
  });

  series.createPriceLine({
    price: lastPrice,
    color: '#97FCA6',
    lineWidth: 2,
    lineStyle: 1,
    axisLabelVisible: true,
    title: '',
  });

  const marker: SeriesMarker<Time> = {
    time: lastTime,
    position: 'inBar',
    color: '#FFFFFF',
    shape: 'circle',
    size: 1,
  };

  markers.setMarkers([marker]);

  chart.timeScale().fitContent();
}
