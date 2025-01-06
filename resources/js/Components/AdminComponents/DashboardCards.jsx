import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { Link } from '@inertiajs/react';

let CardsData = [
    { Total: "Total Appointments", to:"/admin/appointments", icon: <IoDocumentTextOutline />, number: "15", borderColor: "border-[#000000]" },
    { Total: "New Patient Forms", to:"/admin/pending-form", icon: <IoDocumentTextOutline />, number: "15", borderColor: "border-[#FF0000]" },
    { Total: "Vaccines", to:"/admin/labs-result", icon: <BsPeople />, number: "255", borderColor: "border-[#000000]" },
    { Total: "Labs", to:"/admin/labs-result", icon: <AiOutlineCloudDownload />, number: "15", borderColor: "border-[#FF0000]" },
    { Total: "Patients", to:"/admin/client-list", icon: <AiOutlineCloudDownload />, number: "$15", borderColor: "border-[#000000]" },
    { Total: "Total Uploaded Documents", to:"/admin/documents", icon: <IoDocumentTextOutline />, number: "15", borderColor: "border-[#000000]" },

]

const DashboardCards = () => {
    return (
        <div className='grid gap-3 md:gap-5 2xl:gap-3 grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6'>
            {CardsData.map((data, index) => (
                <Link to={data.to} key={index} className={`${data.borderColor} w-full h-[150px] sm:h-[200px] bg-white shadow-lg rounded-xl border-l-[7px] flex justify-center items-center hover:cursor-pointer hover:scale-105 transition-all ease-in-out`}>
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
                </Link>
            ))}
        </div>
    )
}

export default DashboardCards
