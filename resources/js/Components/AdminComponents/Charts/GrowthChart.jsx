import React from "react";
import { Line } from "react-chartjs-2";

const GrowthChart = () => {
    const data = {
        labels: ["Today", "1M", "6M", "1Y", "2Y"],
        datasets: [
            {
                label: "Revenue",
                data: [1000, 2000, 2500, 4000, 5000],
                fill: false,
                borderColor: "#1abc9c",
                tension: 0.4,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                grid: { display: false },
            },
            y: {
                ticks: { callback: (value) => `$${value}` },
            },
        },
        plugins: { legend: { display: false } },
    };

    return (
        <div className="p-4 rounded-lg border border-black w-full">
            <h2 className="font-[500] text-[20px] leading-[24px] text-[#808080] mb-4">Real-time Growth</h2>
            <div className=" w-full h-[250px]">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default GrowthChart;