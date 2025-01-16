import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Filler);

const BarChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Forms Filled',
                data: [1000, 2000, 4000, 3500, 3000],
                backgroundColor: 'rgba(75, 85, 99, 0.8)', // Tailwind's gray-600
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
        },
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-[50%]">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Forms Filled</h3>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;