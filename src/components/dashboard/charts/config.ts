import { ApexOptions } from "apexcharts";

export const occupancyChartData = [
  {
    name: "Occupancy Rate",
    data: [75, 82, 78, 85, 80, 87, 84]
  }
];

export const occupancyChartOptions: ApexOptions = {
  chart: {
    type: "line",
    height: 350,
    toolbar: {
      show: false
    }
  },
  stroke: {
    curve: "smooth",
    width: 3
  },
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    labels: {
      style: {
        colors: "#64748b"
      }
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: "#64748b"
      },
      formatter: (value) => `${value}%`
    }
  },
  tooltip: {
    y: {
      formatter: (value) => `${value}%`
    }
  },
  grid: {
    borderColor: "#e2e8f0"
  },
  colors: ["#3b82f6"]
}; 