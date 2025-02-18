import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const dataTemplate = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
        {
            label: "Growth",
            data: [100, 200, 300, 400, 500, 600, 700],
            borderColor: "#4ade80",
            backgroundColor: "rgba(74, 222, 128, 0.2)",
            tension: 0.4,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: { display: false },
    },
    scales: {
        y: { beginAtZero: true },
    },
};

const SalesReportChart = () => {
    const stats = [
        { title: "Total Sales", value: "$3,23,234", growth: "+20%", data: dataTemplate },
        { title: "Total Registration", value: "23,234", growth: "+20%", data: dataTemplate },
        { title: "Total Visitors", value: "8,523,234", growth: "+20%", data: dataTemplate },
        { title: "Total Revenue", value: "$3,23,234", growth: "+20%", data: dataTemplate },
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className=" border border-black rounded-xl p-4 flex flex-col"
                >
                    <div>
                        <h2 className="text-gray-500 text-[10px] sm:text-sm">{stat.title}</h2>
                        <p className="text-[10px] sm:text-2xl font-bold text-gray-800">{stat.value}</p>
                        <p className="text-green-500 text-[10px] sm:text-sm">{stat.growth} Since Last Year</p>
                    </div>
                    <div className="mt-0 sm:mt-4">
                        <Line data={stat.data} options={options} height={100}/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SalesReportChart;