import { ApexOptions } from 'apexcharts';
import { baseChartTheme } from './chartTheme';

export const revenueChartConfig: ApexOptions = {
  ...baseChartTheme,
  chart: {
    ...baseChartTheme.chart,
    type: 'area'
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  colors: ['#1a91ff'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [50, 100, 100]
    }
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  yaxis: {
    labels: {
      formatter: (value: number) => `$${value.toLocaleString()}`
    }
  }
};

export const revenueChartData = [{
  name: 'Revenue',
  data: [30000, 40000, 35000, 50000, 49000, 60000, 70000, 91000, 85000, 94000, 98000, 99000]
}];