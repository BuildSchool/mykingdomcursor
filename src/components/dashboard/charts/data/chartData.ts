import { ApexOptions } from 'apexcharts';

export interface ChartData {
  options: ApexOptions;
  series: any[];
}

export const defaultChartData: ChartData = {
  options: {},
  series: []
};
