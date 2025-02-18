import React from 'react'
import { TiTick } from "react-icons/ti";

let NumberDiv = [
    { number: 1, title: "Patient" },
    { number: 2, title: "Appointment" },
    { number: 3, title: "Physical In Progress" },
    { number: 4, title: "Waiting for Completion" },
    { number: 5, title: "Complete" },
]

const ProgressBar = ({ currentPage }) => {
    
    return (
        <div className={`${currentPage > 5 ? "hidden" : "flex justify-center"}`}>
            {NumberDiv.map((data, index) => (
                <div key={index} className='flex flex-col gap-2 w-full 3xl:w-[200px]'>
                    <div className='flex items-center w-full'>
                        <div className={`${currentPage === data.number ? "border-2" : "border-none"} min-w-[35px] min-h-[35px] sm:min-w-[44px] sm:min-h-[44px]  border-[#EF3D35] rounded-full grid place-content-center`}>
                            <span className={`${currentPage === data.number ? "bg-[#EF3D35] text-white" : "bg-[#EBEDF0] text-black"} ${currentPage > data.number ? "bg-green-500 text-white" : ""} rounded-full  flex justify-center items-center min-w-[24px] min-h-[24px] sm:min-w-[32px] sm:min-h-[32px]`}>
                                {currentPage <= data.number ? data.number : <TiTick />}</span>
                        </div>
                        {/* Line div */}
                        <div className={`${currentPage > data.number ? "border-[#20C375]  border-[1px]" : ""} w-full h-0`}></div>
                    </div>
                    <p className={`${currentPage === data.number ? "font-[600]" : "font-[400]"} xl:text-nowrap  text-[8px] sm:text-[16px] leading-[19px] pl-1 pr-5 xl:pr-10`}>{data.title}</p>
                </div>
            ))}
        </div>
    )
}

export default ProgressBar
