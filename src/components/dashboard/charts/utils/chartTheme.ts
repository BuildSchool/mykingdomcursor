import { ApexOptions } from 'apexcharts';

export const defaultChartTheme: ApexOptions = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  grid: {
    borderColor: '#f3f4f6',
    strokeDashArray: 4
  },
  tooltip: {
    theme: 'light'
  },
  dataLabels: {
    enabled: false
  }
};
