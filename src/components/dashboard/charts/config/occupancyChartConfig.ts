import { ApexOptions } from 'apexcharts';
import { baseChartTheme } from './chartTheme';

export const occupancyChartConfig: ApexOptions = {
  ...baseChartTheme,
  chart: {
    ...baseChartTheme.chart,
    type: 'line'
  },
  stroke: {
    curve: 'smooth',
    width: 3
  },
  colors: ['#764dff'],
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  yaxis: {
    labels: {
      formatter: (value: number) => `${value}%`
    },
    min: 0,
    max: 100
  },
  markers: {
    size: 4,
    colors: ['#764dff'],
    strokeColors: '#fff',
    strokeWidth: 2,
    hover: { size: 6 }
  }
};

export const occupancyChartData = [{
  name: 'Occupancy Rate',
  data: [85, 87, 89, 88, 90, 92, 94, 93, 95, 94, 95, 94]
}];