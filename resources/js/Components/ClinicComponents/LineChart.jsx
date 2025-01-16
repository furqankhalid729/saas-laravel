import React from 'react';
import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,    // For x-axis labels
    LinearScale,     // For y-axis values
    PointElement,    // For points in line charts or scatter plots
    LineElement,     // For line charts
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // x-axis labels
        datasets: [
            {
                label: 'Revenue',
                data: [500, 1200, 1500, 1900, 500], // y-axis values
                fill: true,
                backgroundColor: 'rgba(239, 68, 68, 0.2)', // Tailwind's red-500 with transparency
                borderColor: 'rgba(239, 68, 68, 1)', // Tailwind's red-500
                tension: 0.4, // curve smoothness
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
            <div className='flex justify-between items-center h-[60px]'>
                <h3 className="text-[16px] leading-[19px] font-[700] ">Subscription Revenue</h3>
                <div className='flex gap-1 items-center'>
                    <p className='py-1 px-3 font-[400] text-[14px] leading-[16px] hover:bg-white rounded-lg shadow-2xl hover:cursor-pointer'>Latest</p>
                    <p className='py-1 px-3 font-[400] text-[14px] leading-[16px] hover:bg-white rounded-lg shadow-2xl hover:cursor-pointer'>Monthly</p>
                    <p className='py-1 px-3 font-[400] text-[14px] leading-[16px] hover:bg-white rounded-lg shadow-2xl hover:cursor-pointer'>All Time</p>
                </div>
            </div>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;