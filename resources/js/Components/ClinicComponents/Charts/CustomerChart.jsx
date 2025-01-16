import React from "react";
import { Doughnut } from "react-chartjs-2";

const CustomerChart = () => {
    const data = {
        
        datasets: [
            {
                data: [30, 20, 50, 10],
                backgroundColor: ["#00808E", "#E0B0FF", "#2E2532", "#D9D9D9"],
                hoverBackgroundColor: ["#34495e", "#1abc9c", "#ecf0f1"],
            },
        ],
    };

    const options = {
        cutout: "70%",
        plugins: {
            tooltip: { enabled: true },
        },
    };

    return (
        <div className="p-4 rounded-lg bg-white shadow-lg">
            <h2 className="font-[500] text-[20px] leading-[24px] text-[#808080] mb-4">Customer</h2>
            <div className="relative w-48 h-48 mx-auto ">
                <Doughnut data={data} options={options} />
                <div className="absolute inset-0 font-[500] text-[16px] leading-[19px] flex flex-col items-center justify-center text-[#808080]">
                    <span className="font-bold text-xl">100%</span>
                    <span className="text-gray-500">Total</span>
                </div>
            </div>
            <div className="flex justify-around mt-4 text-sm">
                <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#2c3e50] rounded-full mr-2"></div> Active (85%)
                </div>
                <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#16a085] rounded-full mr-2"></div> New (85%)
                </div>
                <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#bdc3c7] rounded-full mr-2"></div> Retarget (85%)
                </div>
            </div>
        </div>
    );
};

export default CustomerChart;