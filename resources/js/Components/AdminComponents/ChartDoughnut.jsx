import React from 'react'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartDoughnut = () => {
    const data = {
        labels: ["Cash", "Card"],
        datasets: [
            {
                data: [2364, 2364],
                backgroundColor: ["#017A8B", "#2E2E3E"],
                borderWidth: 0,
            },
        ],
    };

    const options = {
        cutout: "70%", // Makes it look like a donut
        plugins: {
            legend: {
                display: false, // Hide default legend
            },
        },
    };

    return (
        <div className='w-full md:w-[60%] lg:w-[40%] bg-white shadow-lg'>
            <div className='w-[98%] mx-auto p-2 flex flex-col gap-2'>
                {/* Heading */}
                <h4 className='font-[500] text-[20px] leading-[24px] text-[#808080]'>Today revenue</h4>
                <div className='flex justify-center'>
                    <div className="relative w-[200px] h-[200px] grid place-items-center">
                        <Doughnut data={data} options={options} />
                        <div className="font-[500] text-[21px] leading-[25px] text-[#808080] absolute ">$323,234</div>
                    </div>
                </div>
                {/* Cash and card */}
                <div className='flex gap-3 justify-center items-center text-[#808080] font-[400] text-[17px] leading-[20px]'>
                    <div className='flex items-center gap-2 justify-center'>
                        <div className='w-[10px] h-[10px] bg-[#00808E] rounded-full'></div>
                        <p className='flex gap-1'>
                            Cash,

                            <span className='text-[#00FFCC]'>236.00</span>
                        </p>
                    </div>
                    <div className='flex items-center gap-2 justify-center'>
                        <div className='w-[10px] h-[10px] bg-black rounded-full'></div>
                        <p className='flex gap-1'>
                            Card,

                            <span className='text-[#00FFCC]'>236.00</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChartDoughnut
