import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { dashboardData } from "../Data/dashboardData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const AnalyticsChart = () => {
  const barData = {
    labels: dashboardData.months,
    datasets: [
      {
        label: "New Users",
        data: dashboardData.userGrowth,
        backgroundColor: "#3b82f6",
      },
    ],
  };

  const lineData = {
    labels: dashboardData.months,
    datasets: [
      {
        label: "Revenue ($)",
        data: dashboardData.revenueTrend,
        borderColor: "#10b981",
        backgroundColor: "#10b981",
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-4">User Growth</h3>
        <Bar data={barData} />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-4">Revenue Trend</h3>
        <Line data={lineData} />
      </div>
    </div>
  );
};

export default AnalyticsChart;
