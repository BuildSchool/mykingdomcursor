import { dynamic } from '../../../utils/dynamic';
import { ChartContainer } from './components';
import { ChartSkeleton } from './components';
import { useChart } from './hooks/useChart';
import { occupancyChartConfig } from './config/occupancyChartConfig';
import type { RangeOption } from './types';

const Chart = dynamic(() => import('react-apexcharts'), {
  loading: () => <ChartSkeleton />
});

const initialData = [{
  name: 'Occupancy Rate',
  data: [85, 87, 89, 88, 90, 92, 94, 93, 95, 94, 95, 94]
}];

const timeRanges = {
  '6months': 1,
  '1year': 0.98,
  '2years': 0.95
};

const rangeOptions: RangeOption[] = [
  { value: '6months', label: 'Last 6 Months' },
  { value: '1year', label: 'Last Year' },
  { value: '2years', label: 'Last 2 Years' }
];

export default function OccupancyChart() {
  const { data, selectedRange, updateRange } = useChart({
    initialData,
    timeRanges,
    defaultRange: '6months'
  });

  return (
    <ChartContainer
      title="Occupancy Trends"
      selectedRange={selectedRange}
      onRangeChange={updateRange}
      ranges={rangeOptions}
    >
      <Chart
        options={occupancyChartConfig}
        series={data}
        type="line"
        height={350}
      />
    </ChartContainer>
  );
}