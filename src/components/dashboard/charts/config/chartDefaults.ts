import { ApexOptions } from 'apexcharts';

export const defaultChartOptions: ApexOptions = {
  chart: {
    toolbar: { show: false },
    zoom: { enabled: false },
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800,
      dynamicAnimation: {
        enabled: true,
        speed: 350
      }
    }
  },
  grid: {
    borderColor: '#f3f4f6',
    strokeDashArray: 4,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  tooltip: {
    theme: 'light',
    shared: true,
    intersect: false
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    offsetY: -15,
    itemMargin: {
      horizontal: 10,
      vertical: 0
    }
  },
  dataLabels: {
    enabled: false
  }
};