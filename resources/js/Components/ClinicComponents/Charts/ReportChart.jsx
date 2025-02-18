import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ReportChart = () => {
  // Chart data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Total Sales",
        data: [50000, 48000, 52000, 50000, 55000, 54000, 52000],
        backgroundColor: "#333333", // Black
        barThickness: 20,
      },
      {
        label: "Total Visitor",
        data: [70000, 68000, 72000, 70000, 75000, 74000, 72000],
        backgroundColor: "#0d9488", // Teal
        barThickness: 20,
      },
      {
        label: "Total Orders",
        data: [30000, 32000, 33000, 31000, 35000, 36000, 34000],
        backgroundColor: "#d8b4fe", // Light Purple
        barThickness: 20,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: true,
        text: "Report",
        font: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#e5e7eb", // Light Gray
        },
        ticks: {
          callback: function (value) {
            return value >= 1000 ? `${value / 1000}k` : value;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Report</h2>
        <button className="px-4 py-2 border rounded-md text-gray-600 bg-gray-100 hover:bg-gray-200">
          Last 1 year
        </button>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ReportChart;