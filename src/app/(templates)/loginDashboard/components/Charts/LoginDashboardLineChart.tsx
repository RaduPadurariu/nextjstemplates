"use client";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
);

export const LoginDashboardLineChart = () => {
  const data = {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Mobile apps",
        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
        fill: true,
        borderColor: "#5e72e4",
        backgroundColor: "rgba(94, 114, 228, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    interaction: {
      intersect: false,
      mode: "index" as const,
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
          borderDash: [5, 5],
        },
        ticks: {
          display: true,
          padding: 10,
          color: "#fbfbfb",
          font: {
            size: 11,
            family: "Open Sans",
            style: "normal" as const,
            lineHeight: 2,
          },
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
          borderDash: [5, 5],
        },
        ticks: {
          display: true,
          color: "#ccc",
          padding: 20,
          font: {
            size: 11,
            family: "Open Sans",
            style: "normal" as const,
            lineHeight: 2,
          },
        },
      },
    },
  };

  return (
    <div className="relative w-full h-[300px]">
      <Line data={data} options={options} />
    </div>
  );
};
