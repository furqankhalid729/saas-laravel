import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BiCalendarEvent } from "react-icons/bi";
import { Link } from '@inertiajs/react';

let CardsData = [
    { Total: "Total Uploaded Documents", icon: <IoDocumentTextOutline />, number: "15", LastPTag: "Since onboarded", borderColor: "border-[#FF0000]" },
    { Total: " Filled Forms - Today", icon: <IoDocumentTextOutline />, number: "15", LastPTag: "Since Today", borderColor: "border-[#000000]" },
    { Total: "Total Revenue", icon: <BiCalendarEvent />, number: "$15", LastPTag: "Today Sale’s", borderColor: "border-[#FF0000]" },
    { Total: "Total Users", icon: <AiOutlineCloudDownload />, number: "150", LastPTag: "Since onboarded", borderColor: "border-[#000000]" },
    { Total: "Total No. of Logins", icon: <AiOutlineCloudDownload />, number: "1775", LastPTag: "Since onboarded", borderColor: "border-[#FF0000]" },
]

const ClientCards = () => {
    return (
        <div className='grid gap-3 md:gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
            {CardsData.map((data, index) => (
                <Link href="/clinic/dashboard" key={index} className={`${data.borderColor}  w-full h-[150px] sm:h-[200px] bg-white shadow-lg rounded-xl border-l-[7px] flex justify-center items-center hover:cursor-pointer hover:scale-105 transition-all ease-in-out`}>
                    <div className='w-[90%] h-[80%] sm:h-[70%] mx-auto flex flex-col justify-between gap-3'>
                        {/* icon and data name */}
                        <div className='flex items-center gap-1 sm:gap-2'>
                            <div className='p-2 text-white bg-[#FF2C2C80] rounded-xl flex items-center justify-center text-[15px] sm:text-[30px]'>
                                {data.icon}
                            </div>
                            <p className='font-[600] text-[12px] sm:text-[16px] sm:leading-[19px]'>{data.Total}</p>
                        </div>
                        <span className='font-[700] text-[30px] sm:text-[40px] sm:leading-[48px] ml-4'>{data.number}</span>
                        <p className='text-[#808080] font-[400] text-[14px] leading-[16px] text-center'>{data.LastPTag}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ClientCards
