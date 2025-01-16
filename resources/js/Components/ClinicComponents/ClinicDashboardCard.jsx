import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BiCalendarEvent } from "react-icons/bi";

let CardsData = [
    { Total: "Clients", icon: <BsPeople />, number: "15", borderColor: "border-[#000000]" },
    { Total: "Revenue", icon: <IoDocumentTextOutline />, number: "15", borderColor: "border-[#FF0000]" },
    { Total: "Users", icon: <IoDocumentTextOutline />, number: "15", borderColor: "border-[#000000]" },
    { Total: "No. of Logins", icon: <BiCalendarEvent />, number: "$15", borderColor: "border-[#FF0000]" },
    { Total: "Uploaded Documents", icon: <AiOutlineCloudDownload />, number: "150", borderColor: "border-[#000000]" },
    { Total: "Patients", icon: <AiOutlineCloudDownload />, number: "1775", borderColor: "border-[#FF0000]" },
]

const ClinicDashboardCard = () => {
    return (
        <div className='grid gap-3 md:gap-5 2xl:gap-3  grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6'>
            {CardsData.map((data, index) => (
                <div key={index} className={`${data.borderColor} w-full h-[150px] sm:h-[200px] bg-white shadow-lg rounded-xl border-l-[7px] flex justify-center items-center hover:cursor-pointer hover:scale-105 transition-all ease-in-out`}>
                    <div className='w-[90%] h-[80%] sm:h-[70%] mx-auto 2xl:mx-0 flex flex-col justify-center gap-6'>
                        {/* icon and data name */}
                        <div className='flex items-center gap-1 sm:gap-2'>
                            <div className='p-2 text-white bg-[#FF2C2C80] rounded-xl flex items-center justify-center text-[15px] sm:text-[30px]'>
                                {data.icon}
                            </div>
                            <p className='font-[600] text-[12px] sm:text-[16px] sm:leading-[19px]'>{data.Total}</p>
                        </div>
                        <span className='font-[700] text-[30px] sm:text-[40px] sm:leading-[48px] ml-4'>{data.number}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ClinicDashboardCard
